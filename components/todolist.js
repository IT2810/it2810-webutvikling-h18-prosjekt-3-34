import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import ItemComponent from "./itemcomponent.js";
import styles from "../stylesheets/todolist.style.js";

/**
 * @desc render en liste med itemcomponents. Dette representerer todolisten i applikasjonen.
 * @author Erik Larsen, Magnus Eriksson
 * @see Itemcomponent
 */

export default class ToDoList extends Component {
  render() {
    // render component if it is a todo item.
    const itemMapper = item => {
      if (item.type === "todo") {
        return (
          <ItemComponent
            id={item.id}
            key={item.inputid}
            handleDelete={this.props.handleDelete}
            handleDone={this.props.handleDone}
            text={item.text}
            status={item.done}
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
