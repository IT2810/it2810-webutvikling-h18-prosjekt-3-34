import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView
} from "react-native";
import ItemComponent from "./itemcomponent.js";

export default class ToDoList extends Component {
  render() {
    const itemMapper = item => {
      if (item.type === "todo") {
        return (
          <ItemComponent
            id={item.id}
            key={item.inputid}
            handleDelete={this.props.handleDelete}
            status={this.props.status}
            text={item.description}
          />
        );
      } else if (item.type === "step") {
        return (
          <ItemComponent
            id={item.id}
            key={item.inputid}
            handleDelete={this.props.handleDelete}
            status={this.props.status}
            text={item.description}
          />
        );
      }
    };
    return (
      <ScrollView style={styles.container}>
        {this.props.items.map(itemMapper)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 300,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: "85%"
  },
  text: {
    color: "black",

    fontSize: 18
  },
  rad: {
    padding: 10,
    marginTop: 0,
    backgroundColor: "#ADD8E6",
    alignItems: "center"
  }
});
