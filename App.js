import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  Picker,
  AsyncStorage,
  TouchableWithoutFeedback
} from "react-native";
import StepCounter from "./components/stepcounter.js";
import ToDoList from "./components/todolist.js";
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
    addItemDisabled: false,
    doneCounter: 0,
  };

  renderList() {
    let newList = this.state.items.slice();
    this.setState({ items: newList });
  }

  componentDidMount() {
    this.loadListItems();
    let liste = [];
    this.storeItemData(liste);
    console.log(this.state.items);
  }

  loadListItems() {
    {
      /* LASTER INN LISTE-ELEMENTENE SOM ER LAGRET I ASYNCSTORAGE FOR CURRENT DAY*/
    }
    let currentDate = new Date();
    let doneToDos = 0;
    console.log("Kjør loadListItems()");
    let dato = this.state.viewDate.getDate();
    let key = 0;
    let storedArray = [];
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let value = JSON.parse(store[i][1]);
          {
            /* OPPDATERER KEY (SLIK AT STATE TIL ITEMCOUNTER BLIR RIKTIG) TIL 1 MER ENN DEN HØYESTE KEYEN */
          }
          if (value.date === dato) {
            console.log(
              "Add an item..." + "dato:" + dato + "value.date:" + value.date
            );
            storedArray.push(value);
            console.log(storedArray);
          }
          { /* sjekk om datoen er større eller lik dagens, for å unngå å telle
              med todo's som er fra de forrige dagene
              Teller altså bare med ferdige todo's som er i dag eller frem i tid. */}
          if ((dato == currentDate.getDate()) || (dato == (currentDate.getDate() -1)) || (dato == currentDate.getDate() +1)) {
            if (value.done == true) {
              doneToDos = doneToDos + 1;
            }
          }
          if (key <= value.id) {
            key = value.id + 1;
          }
          this.setState({ itemCounter: key });
          this.setState({ items: storedArray });
          this.setState({ doneCounter : doneToDos })
        });
      });
    });
  }

  storeItemData = async items => {
    try {
      let storeArray = [];
      for (let i = 0; i < items.length; i++) {
        storeArray.push([items[i].id.toString(), JSON.stringify(items[i])]);
      }
      await AsyncStorage.multiSet(storeArray);
    } catch (error) {
      alert("wat" + error);
    }
  };

  addItem = item => {
    let newList = this.state.items.slice();
    newList.push({
      date: this.state.viewDate.getDate(),
      id: this.state.itemCounter,
      inputid: "input" + this.state.itemCounter,
      name: "Rad " + this.state.itemCounter,
      type: this.state.type,
      text: this.state.text,
      done: false,
    });
    console.log(newList);
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

  handleDone = index => {
    var dato = this.state.viewDate.getDate();
    if (this.state.items.length > 0) {
      var newList = [];
      this.state.items.forEach(function(element) {
        if (element.id != index && element.date == dato) {
          newList.push({
            date: element.date,
            id: element.id,
            inputid: element.inputid,
            name: element.name,
            type: element.type,
            text: element.text,
            done: element.done,
          });
        }
        else if (element.id == index && element.date == dato) {
          newList.push({
            date: element.date,
            id: element.id,
            inputid: element.inputid,
            name: element.name,
            type: element.type,
            text: element.text,
            done: true,
          });
        }
      });
      this.storeItemData(newList);
      this.loadListItems();
    }
  }

  handleDeleteClick = index => {
    console.log(this.state.items);
    var dato = this.state.viewDate.getDate();
    if (this.state.items.length > 0) {
      var newList = [];
      this.state.items.forEach(function(element) {
        if (element.id != index && element.date == dato) {
          newList.push({
            date: element.date,
            id: element.id,
            inputid: "input" + element.inputid,
            name: "Rad " + element.name,
            type: element.type,
            text: element.text,
            done: false,
          });
        }
        if (element.id == index) {
          AsyncStorage.removeItem(index.toString());
        }
      });
      this.setState({ items: newList });
      this.loadListItems();
    }
  };

  handlePrevDayClick = () => {
    let currentDate = new Date();
    if (this.state.viewDate.getDate() !== currentDate.getDate() - 1) {
      this.setState({
        viewDate: new Date(
          this.state.viewDate.setDate(this.state.viewDate.getDate() - 1)
        )
      });
      console.log(this.state.viewDate.getDate());
      this.loadListItems();
      if (this.state.viewDate.getDate() < currentDate.getDate()) {
        this.setState({ addItemDisabled: true });
      }
    }
  };

  handleNextDayClick = () => {
    let currentDate = new Date();
    if (this.state.viewDate.getDate() !== currentDate.getDate() + 1) {
      this.setState({
        viewDate: new Date(
          this.state.viewDate.setDate(this.state.viewDate.getDate() + 1)
        )
      });
      console.log(this.state.viewDate.getDate());
      this.loadListItems();
      if (this.state.viewDate.getDate() >= currentDate.getDate()) {
        this.setState({ addItemDisabled: false });
      }
    }
  };

  renderAddItemButton = () => {};

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
            <DateComponent
              viewDate={this.state.viewDate}
              handlePrevDayClick={this.handlePrevDayClick}
              handleNextDayClick={this.handleNextDayClick}
            />
          </View>

          <ToDoList
            items={this.state.items}
            handleDelete={this.handleDeleteClick}
            handleDone={this.handleDone}
          />

          <Addtodo
            isModalVisible={this.state.isModalVisible}
            toggleModal={this.toggleModal}
            addItem={this.addItem}
            handleInput={this.handleInput}
            setType={this.setType}
            dateToday={this.state.viewDate}
          />
          <StepCounter />

          <View style={styles.buttonContainer}>
            <Text style={styles.addGoalText}>{this.state.doneCounter}</Text>
            <TouchableOpacity
              style={
                this.state.addItemDisabled
                  ? styles.addGoalButtonDis
                  : styles.addGoalButton
              }
              onPress={this.toggleModal}
              disabled={this.state.addItemDisabled}
            >
              <Text style={styles.addGoalText}>Add item</Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
