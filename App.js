import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Picker, AsyncStorage } from 'react-native'
import StepCounter from "./components/stepcounter.js"
import ToDoList from "./components/todolist.js"
import styles from "./stylesheets/app.style.js";
import Addtodo from "./components/addtodo.js";
import DateComponent from "./components/datecomponent.js";

export default class App extends Component {

  state = {
    items: [],
    itemCounter: 0,
    completedItems: [],
    isModalVisible: false,
    type: null,
    text: null,
    viewDate: new Date(),
  };


  renderList() {
    let newList = this.state.items.slice();
    this.setState({ items: newList });
  }

componentDidMount() {
  this.loadListItems();
}

loadListItems() {
  console.log(this.state.viewDate.getDay());
  {/* LASTER INN LISTE-ELEMENTENE SOM ER LAGRET I ASYNCSTORAGE */}
  let key = 0;
  let storedArray = [];
  AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (err, stores) => {
    stores.map((result, i, store) => {
        let value = JSON.parse(store[i][1]);
        {/* OPPDATERER KEY (SLIK AT STATE TIL ITEMCOUNTER BLIR RIKTIG) TIL 1 MER ENN DEN HØYESTE KEYEN */}
        if (key <= value.id) {
          key = value.id +1;
        }
        this.setState({itemCounter:key});
        storedArray.push(value);
        this.setState({items:storedArray});
      });
    });
  });
}

storeItemData = async (items) => {
  try {
    let storeArray = [];
    for (let i = 0; i < items.length; i++ ) {
      storeArray.push([items[i].id.toString(), JSON.stringify(items[i])]);
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
    console.log("items lengde: " + this.state.items.length + " index: " + index);
    if (this.state.items.length > 0) {
      var newList = [];
      this.state.items.forEach(function(element) {
        if (element.id != index) {
          newList.push({
            id: element.id,
            inputid: "input" + element.inputid,
            name: "Rad " + element.name,
            type: element.type,
            text: element.text
          });
      }
      if (element.id == index) {
          console.log("delete this item.")
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

handlePrevDayClick = () => {
  let currentDate = new Date()
  if(this.state.viewDate.getDate() !== currentDate.getDate()-1){
    this.setState({
      viewDate: new Date(this.state.viewDate.setDate(this.state.viewDate.getDate()-1))
    })
  }
}

handleNextDayClick = () => {
  let currentDate = new Date()
  if(this.state.viewDate.getDate() !== currentDate.getDate()+1){
    this.setState({
      viewDate: new Date(this.state.viewDate.setDate(this.state.viewDate.getDate()+1))
    })
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

        <View style={styles.viewDateStyle}>
          <DateComponent viewDate={this.state.viewDate} handlePrevDayClick={this.handlePrevDayClick} handleNextDayClick={this.handleNextDayClick}/>
        </View>

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

          <View style={styles.buttonContainer}>
            <View style={styles.emptySpace}> </View>
            
            <TouchableOpacity
              style={styles.addGoalButton}
              color="white"
              onPress={this.toggleModal}>

              <Text style={styles.addGoalText}>Add item</Text>
            </TouchableOpacity>
          </View>

        </View>

      </React.Fragment>
    );
  }
}
