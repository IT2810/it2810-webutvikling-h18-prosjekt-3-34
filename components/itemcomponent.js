import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../stylesheets/itemcomponent.style.js";

export default class ItemComponent extends Component {
  

  render() {

    return (
      <View style={styles.itemComponent}>
        <Text style={styles.textStyle}>{this.props.text}</Text>

        <View style={styles.buttonView}>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => this.props.handleDelete(this.props.id)}
            text={this.props.text}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
