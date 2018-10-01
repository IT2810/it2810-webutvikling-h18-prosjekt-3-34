import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

class Addtodo extends Component {
  render() {
    return (
      <Modal isVisible={this.props.isModalVisible}>
        <View style={styles.modal}>
          <Text>Add Goal: </Text>
          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={this.props.addItem}
          >
            <Text style={styles.modalText}>Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addItemBtn}>
            <Text style={styles.modalText}>Steps</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.toggleModal}>
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
