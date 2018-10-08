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
      <View style={styles.addItemContainer}>
        <TextInput style={styles.textInputStyle} autoCapitalize={"words"} placeholder={"Input goes in this field..."} placeholderColor={"black"} onChangeText={this.props.handleInput} />
        <TouchableOpacity style={styles.addItemStyle} onPress={this.addItem}>
          <Text>Add item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
