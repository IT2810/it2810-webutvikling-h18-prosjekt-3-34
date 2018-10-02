import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";

export default class Iteminput extends Component {
  addItem = () => {
    this.props.addItem();
    this.props.toggleTodoInput();
  };

  render() {
    return (
      <View>
        <TextInput onChangeText={this.props.handleInput} />
        <TouchableOpacity onPress={this.addItem}>
          <Text>V</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
