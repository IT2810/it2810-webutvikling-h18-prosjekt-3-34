import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Picker, AsyncStorage } from 'react-native'
import StepCounter from "./components/stepcounter.js"
import ToDoList from "./components/todolist.js"
import styles from "./stylesheets/app.style.js";
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

componentDidMount() {
  let key = 0;
  let storedArray = [];
  AsyncStorage.getAllKeys((err, keys) => {

  AsyncStorage.multiGet(keys, (err, stores) => {
    stores.map((result, i, store) => {
      let jsonresult= result[1][6];
      console.log("stores[] " + store[i][0] + "result: " + jsonresult);
        if (key < parseInt(jsonresult)) {
          key = parseInt(jsonresult) +1;
        }
        console.log("KEY ER: " + key);
        let value = store[i][1];
        this.setState({itemCounter:key});
        storedArray.push(JSON.parse(value));
        console.log(storedArray);
        this.setState({items:storedArray});
      });
    });
  });

}

storeItemData = async (items) => {
  try {
    let storeArray = [];
    for (let i = 0; i < items.length; i++ ) {
      storeArray.push([i.toString(), JSON.stringify(items[i])]);
    }
    await AsyncStorage.multiSet(storeArray);
  } catch (error) {
    alert("wat" + error);
  }
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
    this.storeItemData(newList);
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
        if (element.id !== index) {
          newList.push({
            id: element.id,
            inputid: "input" + element.inputid,
            name: "Rad " + element.name,
            type: element.type,
            text: element.text
          });
      }
      else if (element.id === index) {
          AsyncStorage.removeItem(index.toString());
      }
    });
    this.setState({items:newList});
  }
}

handleClear = async () => {
  try {
    await AsyncStorage.clear();
  }
  catch(error){
    console.log(error);
  }
}

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

            <TouchableOpacity style={styles.addItemButton} color="black" onPress={this.handleClear}>
            <Text style={styles.text}>clear</Text>
            </TouchableOpacity>
      </React.Fragment>
    );
  }
}
