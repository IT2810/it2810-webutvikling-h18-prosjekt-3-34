import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Picker
} from "react-native";
import StepCounter from "./components/stepcounter.js";
import ToDoList from "./components/todolist.js";
import Modal from "react-native-modal";

export default class App extends Component {
  state = {
    items: [],
    itemCounter: 0,
    completedItems: [],
    addComponent: "",
    isModalVisible: false
  };

  addItem = () => {
    let newList = this.state.items.slice();
    const type = "todo"; //change this!
    newList.push({
      id: this.state.itemCounter,
      inputid: "input" + this.state.itemCounter,
      name: "Rad " + this.state.itemCounter
    });
    this.setState({ items: newList });
    this.state.itemCounter++;
  };

  handleDeleteClick = index => {
    if (this.state.items.length > 0) {
      var newList = [];
      this.state.items.forEach(function(element) {
        if (element.id != index) {
          newList.push({
            id: element.id,
            inputid: "input" + element.inputid,
            name: "Rad " + element.name
          });
        }
      });

      this.setState({ items: newList });
    }
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <React.Fragment>
        <View style={styles.topBorder} />

        <View style={styles.banner}>
          <Text style={styles.textStyleBanner}>{"DAGSPLANLEGGER'N"}</Text>
          <Text style={styles.textStyleTM}>{"TM"}</Text>
        </View>

        <View style={styles.siteContainer}>
          <ToDoList
            items={this.state.items}
            handleDelete={this.handleDeleteClick}
          />

          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.modal}>
              <Text>Add goal:</Text>
              <TouchableOpacity>
                <Text>Todo</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Steps</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.state._toggleModal}>
                <Text>Exit</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.addGoalButton}
            color="white"
            onPress={this._toggleModal}
          >
            <Text style={styles.addGoalText}>+</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  siteContainer: {
    backgroundColor: "#dedede",
    height: "100%",
    marginTop: 0,
    alignItems: "center"
  },
  topBorder: {
    height: 20,
    backgroundColor: "#dedede"
  },
  banner: {
    backgroundColor: "#dedede",
    marginTop: 0,
    justifyContent: "center",
    height: 80,
    flexDirection: "row"
  },
  textStyleBanner: {
    fontSize: 22,
    lineHeight: 80,
    textAlignVertical: "top",
    color: "black"
  },
  textStyleTM: {
    fontSize: 9,
    lineHeight: 60,
    textAlignVertical: "top",
    color: "black"
  },
  addItemButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f4f4f",
    height: 35,
    width: 110,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15
  },
  addGoalButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 100,
    position: "absolute",
    right: 20,
    top: 440 //TODO: Change this to bottom
  },

  modal: {
    backgroundColor: "white",
    justifyContent: "flex-end",
    margin: 0
  },

  addGoalText: {
    fontSize: 40
  },
  kolonne: {
    padding: 10
  },
  text: {
    color: "white"
  }
});

/*
  <TouchableOpacity
            style={styles.addItemButton}
            color="black"
            onPress={this.addItem}
          >
            <Text style={styles.text}> New Item</Text>
          </TouchableOpacity>

        <Picker
            selectedValue={this.state.addComponent}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ addComponent: itemValue })
            }
          >
            <Picker.Item label="Todo" value="java" />
            <Picker.Item label="Steps" value="js" />
          </Picker>
          
           {
        id: 0,
        inputid: 0,
        name: "Rad 0",
        type: "todo",
        description: "Vaske klær"
      }
          */
