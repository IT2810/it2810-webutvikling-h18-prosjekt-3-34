import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class ItemComponent extends Component {
  render () {
    return (
      <View style={styles.itemComponent}>
      <Text style={styles.textStyle2}> - Her kommer ToDoItem - </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  itemComponent: {
    backgroundColor: "aliceblue",
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  textStyle2: {
    fontFamily: 'GillSans-BoldItalic',

  }
});
