import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button, Vibration} from 'react-native'
import styles from "../stylesheets/datecomponent.style.js"

export default class DateComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var dateFormat = require("dateformat");
    return(
      <View>
        <TouchableOpacity style = {styles.prevDay} onPress={this.props.handlePrevDayClick}>
          <Text>-1</Text>
        </TouchableOpacity>

        <Text>{dateFormat(this.props.viewDate, "dddd, mmmm dS")}</Text>

        <TouchableOpacity style = {styles.prevDay} onPress={this.props.handleNextDayClick}>
          <Text>+1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Expo.registerRootComponent(DateComponent);
