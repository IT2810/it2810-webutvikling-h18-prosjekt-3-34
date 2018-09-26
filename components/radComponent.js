import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class radComponent extends Component {
  render () {
    return (
      <TouchableOpacity
         key = {this.props.item.id}
         style = {this.props.styles.kolonne}
         onPress = {() => this.props.alertItemName(item)}>

         <Text style = {this.props.styles.text}>
            {this.props.item.name}
         </Text>
      </TouchableOpacity>
    );
  }
}
