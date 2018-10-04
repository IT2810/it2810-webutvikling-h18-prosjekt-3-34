import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "../stylesheets/iteminput.style.js";

export default class Iteminput extends Component {
  addItem = () => {
    this.props.addItem();
    this.props.toggleTodoInput();
  };

  render() {
    return (
      <View>
        <TextInput onChangeText={this.props.handleInput} />
        <TouchableOpacity style={styles.addItemStyle} onPress={this.addItem}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
