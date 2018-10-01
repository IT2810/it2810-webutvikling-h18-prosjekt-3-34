import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import ItemComponent from "./itemcomponent.js";

export default class ToDoList extends Component {
  render() {
    // render component based on type
    const itemMapper = item => {
      if (item.type === "todo") {
        return (
          <ItemComponent
            id={item.id}
            key={item.inputid}
            handleDelete={this.props.handleDelete}
            status={this.props.status}
            text={item.text}
            handleInput={this.props.handleInput}
          />
        );
      } else if (item.type === "step") {
        return (
          <ItemComponent
            id={item.id}
            key={item.inputid}
            handleDelete={this.props.handleDelete}
            status={this.props.status}
            text={item.text}
            handleInput={this.props.handleInput}
          />
        );
      }
    };
    return (
      // Maps the items list in app to components through itemMapper method
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
