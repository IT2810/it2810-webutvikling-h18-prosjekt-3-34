import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class ItemComponent extends Component {
  render () {
    return (
      <View style={styles.itemComponent}>
      <Text>Skriv inn noe:</Text>
      <TextInput>
      </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  itemComponent: {
    backgroundColor: "aliceblue"
  },
})
