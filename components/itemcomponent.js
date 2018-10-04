import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../stylesheets/itemcomponent.style.js";

export default class ItemComponent extends Component {
  state = {
    backgroundColor: "#bdbdbd"
  };

  handleDoneClick = () => {
    this.setState({ backgroundColor: "green" });
  };

  render() {
    const styleItemComponent = StyleSheet.create({
      itemComponent: {
        flexDirection: "row",
        backgroundColor: this.state.backgroundColor,
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        marginTop: 10,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10
      }
    });

    return (
      <View style={styleItemComponent.itemComponent}>
        <Text style={styles.textStyle}> {this.props.text}</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={this.handleDoneClick}
          >
            <Text style={styles.textStyle}>Done</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => this.props.handleDelete(this.props.id)}
            text={this.props.text}
          >
            <Text style={styles.textStyle}>Delete {this.props.id}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
