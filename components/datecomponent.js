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
          <View style={styles.dateBox}>
            <TouchableOpacity style = {styles.prevDay} onPress={this.props.handlePrevDayClick}>
              <Text>-1</Text>
            </TouchableOpacity>

            <Text style = {styles.dateText}>{dateFormat(viewDate, "dddd, mmmm dS")}</Text>

            <TouchableOpacity style = {styles.nextDay} onPress={this.props.handleNextDayClick}>
              <Text>+1</Text>
            </TouchableOpacity>
          </View>
        );
      case currentDate.getDay()+1:
        return(
          <View style={styles.dateBox}>
            <TouchableOpacity style = {styles.prevDay} onPress={this.props.handlePrevDayClick}>
              <Text>-1</Text>
            </TouchableOpacity>

            <Text style={styles.dateText}>{dateFormat(viewDate, "dddd, mmmm dS")}</Text>

            <TouchableWithoutFeedback>
              <View style = {styles.nextDayClicked}>
                <Text>+1</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      case currentDate.getDay()-1:
        return(
          <View style={styles.dateBox}>
            <TouchableWithoutFeedback>
              <View style = {styles.prevDayClicked}>
                <Text style={styles.textWhite}>-1</Text>
              </View>
            </TouchableWithoutFeedback>

            <Text style = {styles.dateText}>{dateFormat(viewDate, "dddd, mmmm dS")}</Text>

            <TouchableOpacity style = {styles.nextDay} onPress={this.props.handleNextDayClick}>
              <Text style={styles.textWhite}>+1</Text>
            </TouchableOpacity>
          </View>
        );

    }
  }
}

//Expo.registerRootComponent(DateComponent);
