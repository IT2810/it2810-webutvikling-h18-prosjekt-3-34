import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";
import styles from "../stylesheets/stepcounter.style.js";

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
          pastStepCount: "Unavailable."
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  renderStepText = () => {
    let stepLeft = parseInt(this.props.stepGoal - this.state.pastStepCount);
    if (this.state.pastStepCount < this.props.stepGoal) {
      return (
        <Text style={styles.stepCounterText2}>
          Du mangler {stepLeft} steg for å oppnå dagens mål!
        </Text>
      );
    } else {
      return (
        <Text style={styles.stepCounterText2}>Du har oppnådd dagens mål!</Text>
      );
    }
  };

  render() {
    const stepText = this.renderStepText();
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
  }
}
/*
<Text style={styles.stepCounterText2}>
          Steps in current session: {this.state.currentStepCount}
        </Text>
*/
Expo.registerRootComponent(StepCounter);
