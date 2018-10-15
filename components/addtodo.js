import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Iteminput from "./iteminput";
import styles from "../stylesheets/addtodo.style.js";

class Addtodo extends Component {
  state = {
    showTodoInputField: false,
    showStepInputField: false
  };

  toggleTodoInput = () => {
    this.props.setType("todo");
    this.setState({ showTodoInputField: !this.state.showTodoInputField });
  };

  toggleStepInput = () => {
    this.props.setType("step");
    this.setState({ showStepInputField: !this.state.showStepInputField });
  };

  closeModal = () => {
    this.setState({ showTodoInputField: false });
    this.setState({ showStepInputField: false });
    this.props.toggleModal();
  };

  renderTodoInput = Iteminput => {
    if (this.state.showTodoInputField) {
      return (
        <Iteminput
          handleInput={this.props.handleInput}
          text={this.props.text}
          addItem={this.props.addItem}
          toggleTodoInput={this.toggleTodoInput}
          setType={this.props.setType}
        />
      );
    } else {
      return null;
    }
    //hide stepinput
  };
  // number validation
  renderStepInput = Iteminput => {
    if (this.state.showStepInputField) {
      return (
        <Iteminput
          handleStepGoal={this.props.handleStepGoal}
          handleInput={this.props.handleInput}
          text={this.props.text}
          addItem={this.props.addItem}
          toggleTodoInput={this.toggleStepInput}
          setType={this.props.setType}
        />
      );
    } else {
      return null;
    }
    //hide stepinput
  };

  render() {
    const todoinput = this.renderTodoInput(Iteminput);
    const stepsinput = this.renderStepInput(Iteminput);
    var dateFormat = require("dateformat");
    let dato = this.props.dateToday;

    return (
      <Modal isVisible={this.props.isModalVisible}>
        <View style={styles.modal}>
          <Text style={styles.goalText}>Add a goal for selected day: </Text>
          <Text>{dateFormat(dato, "dddd, mmmm dS")}</Text>
          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={this.toggleTodoInput}
          >
            <Text style={styles.modalText}>Todo</Text>
          </TouchableOpacity>
          {todoinput}
          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={this.toggleStepInput}
          >
            <Text style={styles.modalText}>Steps</Text>
          </TouchableOpacity>
          {stepsinput}
          <TouchableOpacity style={styles.exitButton} onPress={this.closeModal}>
            <Text style={styles.exitText}>Exit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default Addtodo;
