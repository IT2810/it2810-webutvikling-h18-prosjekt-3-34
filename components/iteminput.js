import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "../stylesheets/iteminput.style.js";

/**
 * @desc Denne komponenten brukes til å ta imot input fra brukeren
 * Bruker addItem og toggleTodoInput for å endre state i App
 * @author Magnus Eriksson, Thusan Arul
 *
 */
export default class Iteminput extends Component {
  /**Utvider addItem funksjonen til å også kjøre toggleTodoInput i tillegg. Dette gjør at komponenten som blir opprettet blir av riktig type
   * @see addtodo.js for toggleTodoInput funksjonen
   */
  addItem = () => {
    this.props.addItem();
    this.props.toggleTodoInput();
  };

  render() {
    return (
      <View style={styles.addItemContainer}>
        <TextInput
          keyboardType={this.props.keyboardType}
          style={styles.textInputStyle}
          autoCapitalize={"words"}
          placeholder={this.props.placeholder}
          placeholderColor={"black"}
          onChangeText={this.props.handleInput}
        />
        <TouchableOpacity style={styles.addItemStyle} onPress={this.addItem}>
          <Text>Add item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
