import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Iteminput from "./iteminput";

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

  render() {
    const todoinput = this.renderTodoInput(Iteminput);
    const stepsinput = this.renderStepInput(Iteminput);

    return (
      <Modal isVisible={this.props.isModalVisible}>
        <View style={styles.modal}>
          <Text>Add Goal: </Text>
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
          <TouchableOpacity onPress={this.closeModal}>
            <Text>Exit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  //knapper inne i modal
  addItemBtn: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  //Tekst i modalknapp
  modalText: {
    fontSize: 20
  },
  modal: {
    backgroundColor: "white"
  }
});

export default Addtodo;
