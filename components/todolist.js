import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import ItemComponent from "./itemcomponent.js";
import styles from "../stylesheets/todolist.style.js";

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
            handleDone={this.props.handleDone}
            status={this.props.status}
            text={item.text}
          />
        );
      } else if (item.type === "step") {
        return (
          <ItemComponent
            id={item.id}
            key={item.inputid}
            handleDelete={this.props.handleDelete}
            handleDone={this.props.handleDone}
            status={this.props.status}
            text={item.text}
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
