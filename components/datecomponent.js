import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button, Vibration, TouchableWithoutFeedback} from 'react-native'
import styles from "../stylesheets/datecomponent.style.js"

export default class DateComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let viewDate = this.props.viewDate;
    let currentDate = new Date();
    var dateFormat = require("dateformat");
    switch(viewDate.getDay()){
      case currentDate.getDay():
        return(
          <React.Fragment>
          <Text style={styles.todayText}>Today</Text>
          <View style={styles.dateBox}>

            <TouchableOpacity style = {styles.prevDay} onPress={this.props.handlePrevDayClick}>
              <Text>{"<--"}</Text>
            </TouchableOpacity>

            <Text style = {styles.dateText}>{dateFormat(viewDate, "dddd, mmmm dS")}</Text>

            <TouchableOpacity style = {styles.nextDay} onPress={this.props.handleNextDayClick}>
              <Text>{"-->"}</Text>
            </TouchableOpacity>
          </View>
          </React.Fragment>
        );
      case currentDate.getDay()+1:
        return(
          <React.Fragment>
          <Text style={styles.todayText}>Tomorrow</Text>
          <View style={styles.dateBox}>
            <TouchableOpacity style = {styles.prevDay} onPress={this.props.handlePrevDayClick}>
              <Text>{"<--"}</Text>
            </TouchableOpacity>

            <Text style={styles.dateText}>{dateFormat(viewDate, "dddd, mmmm dS")}</Text>

            <TouchableWithoutFeedback>
              <View style = {styles.nextDayClicked}>
                <Text>{"-->"}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          </React.Fragment>
        );
      case currentDate.getDay()-1:
        return(
          <React.Fragment>
          <Text style={styles.todayText}>Yesterday</Text>
          <View style={styles.dateBox}>
            <TouchableWithoutFeedback>
              <View style = {styles.prevDayClicked}>
                <Text style={styles.textWhite}>{"<--"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <Text style = {styles.dateText}>{dateFormat(viewDate, "dddd, mmmm dS")}</Text>

            <TouchableOpacity style = {styles.nextDay} onPress={this.props.handleNextDayClick}>
              <Text style={styles.textWhite}>{"-->"}</Text>
            </TouchableOpacity>
          </View>
          </React.Fragment>
        );

    }
  }
}

//Expo.registerRootComponent(DateComponent);
