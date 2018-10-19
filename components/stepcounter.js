import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";
import styles from "../stylesheets/stepcounter.style.js";

/**
 * @desc Denne komponenten bruker expo sitt Pedometer API for å bruke skrittelleren til mobilen.
 * Stort sett er alle metodene lik som beskrevet i API dokumentasjonen, men vi rendrer komponenten annerledes, tilpasset vårt behov.
 * @author Erik Larsen
 * @see https://docs.expo.io/versions/latest/sdk/pedometer
 */

export default class StepCounter extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Unavailable.."
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  renderStepText = () => {
    let stepsLeft = parseInt(this.props.stepGoal - this.state.pastStepCount);
    if (this.state.pastStepCount < this.props.stepGoal) {
      return (
        <Text style={styles.stepCounterText2}>
          You are off by {stepsLeft} steps!
        </Text>
      );
    } else {
      return (
        <Text style={styles.stepCounterText2}>
          You have reached todays goal!
        </Text>
      );
    }
  };

  /**
   * Render forskjellig basert på hvilken dato det er.
   * Dette gjøres for å skille på dagene, og at komponenten passer med resten av applikasjonen.
   */
  render() {
    const stepText = this.renderStepText();
    let viewDate = this.props.viewDate;
    let currentDate = new Date();
    switch (viewDate.getDay()) {
      case currentDate.getDay():
        return (
          <View style={styles.container}>
            <Text style={styles.stepCounterText}>
              Steps today: {this.state.pastStepCount}
            </Text>
            <Text style={styles.stepCounterText2}>
              StepGoal: {this.props.stepGoal}
            </Text>
            {stepText}
          </View>
        );
      case currentDate.getDay() + 1:
        return (
          <View style={styles.container}>
            <Text style={styles.stepCounterText2}>
              StepGoal: {this.props.stepGoal}
            </Text>
          </View>
        );
      case currentDate.getDay() - 1:
        return (
          <View style={styles.container}>
            <Text style={styles.stepCounterText2}>
              StepGoal: {this.props.stepGoal}
            </Text>
          </View>
        );
    }
  }
}
/*
<Text style={styles.stepCounterText2}>
          Steps in current session: {this.state.currentStepCount}
        </Text>
*/
Expo.registerRootComponent(StepCounter);
