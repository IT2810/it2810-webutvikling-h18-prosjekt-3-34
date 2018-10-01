import React, { Component } from "react";
import { TextInput } from "react-native";

export default class Iteminput extends Component {
  state = {
    text: null
  };
  render() {
    return (
      <TextInput
        onChangeText={text => {
          this.props.handleInput;
        }}
      />
    );
  }
}
