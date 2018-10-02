import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import StepCounter from "./components/stepcounter.js";
import ToDoList from "./components/todolist.js";

import Addtodo from "./components/addtodo.js";

export default class App extends Component {
  state = {
    items: [],
    itemCounter: 0,
    completedItems: [],
    isModalVisible: false,
    type: null,
    text: null
  };

  renderList() {
    let newList = this.state.items.slice();
    this.setState({ items: newList });
  }

  addItem = item => {
    let newList = this.state.items.slice();
    newList.push({
      id: this.state.itemCounter,
      inputid: "input" + this.state.itemCounter,
      name: "Rad " + this.state.itemCounter,
      type: this.state.type,
      text: this.state.text
    });
    this.setState({ items: newList });
    this.state.itemCounter++;
    this.toggleModal();
    this.setState({ text: null });
    this.setState({ type: null });
  };

  handleInput = text => {
    this.setState({ text: text });
  };

  setType = text => {
    this.setState({ type: text });
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

  toggleModal = () =>
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

          <Addtodo
            isModalVisible={this.state.isModalVisible}
            toggleModal={this.toggleModal}
            addItem={this.addItem}
            handleInput={this.handleInput}
            setType={this.setType}
          />
          <StepCounter />
          <TouchableOpacity
            style={styles.addGoalButton}
            color="white"
            onPress={this.toggleModal}
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
        inputid: "input0",
        name: "rad0",
        text: "kjøp brød",
        type: "todo"
      }
          */
