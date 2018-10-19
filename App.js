import React, { Component } from "react";
import { Text, View, TouchableOpacity, AsyncStorage } from "react-native";
import StepCounter from "./components/stepcounter.js";
import ToDoList from "./components/todolist.js";
import styles from "./stylesheets/app.style.js";
import Addtodo from "./components/addtodo.js";
import DateComponent from "./components/datecomponent.js";

/** @desc App komponent for 'Dagsplanleggern'. Render todoliste, har funksjonalitet for å legge til gjøremål og skrittmål
 * og viser hvor mange skritt man har tatt for dagen og hvor mange skritt man mangler for å nå sine mål.
 * @see addtodo, datecomponent, itemcomponent, iteminput, stepcounter, todolist.
 * @author Thusan Arul, Erik Larsen, Magnus Eriksson
 */
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
    stepGoal: null,
    doneCounter: 0
  };

  renderList() {
    let newList = this.state.items.slice();
    this.setState({ items: newList });
  }

  // Kode som kjører når appen starter. Laster blant annet liste-elementene fra asyncstorage.
  componentDidMount() {
    this.loadListItems();
    let liste = [];
    this.storeItemData(liste);
  }

  // Denne funksjonen laster elementene fra AsyncStorage inn i lista, og gjør et par
  // andre småting som gjør at state blir riktig basert på lagret informasjon.
  loadListItems() {
    {
      /* LASTER INN LISTE-ELEMENTENE SOM ER LAGRET I ASYNCSTORAGE FOR CURRENT DAY*/
    }
    let currentDate = new Date();
    let doneToDos = 0;
    let dato = this.state.viewDate.getDate();
    let key = 0;
    let storedArray = [];
    let id = 0;
    let stepsGoal = 0;
    if (AsyncStorage.getItem("0"))
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            let value = JSON.parse(store[i][1]);
            //finner nyere objekt

            {
              /* OPPDATERER KEY (SLIK AT STATE TIL ITEMCOUNTER BLIR RIKTIG) TIL 1 MER ENN DEN HØYESTE KEYEN */
            }

            if (value.date === dato) {
              storedArray.push(value);
              if (id < value.id && value.type == "step") {
                id = value.id;
                stepsGoal = parseInt(value.stepgoal);
              }
            }
            {
              /* sjekk om datoen er større eller lik dagens, for å unngå å telle
              med todo's som er fra de forrige dagene
              Teller altså bare med ferdige todo's som er i dag eller frem i tid. */
            }
            if (
              value.date == currentDate.getDate() ||
              value.date == currentDate.getDate() - 1 ||
              value.date == currentDate.getDate() + 1
            ) {
              if (value.done == true) {
                doneToDos = doneToDos + 1;
              }
            }
            if (key <= value.id) {
              key = value.id + 1;
            }

            this.setState({ itemCounter: key });
            this.setState({ items: storedArray });
            this.setState({ stepGoal: stepsGoal });
            this.setState({ doneCounter: doneToDos });
          });
        });
      });
  }

  // Lagrer liste-elementer i AsyncStorage.
  storeItemData = async items => {
    try {
      let storeArray = [];
      for (let i = 0; i < items.length; i++) {
        storeArray.push([items[i].id.toString(), JSON.stringify(items[i])]);
      }

      if (storeArray.length > 0) {
        await AsyncStorage.multiSet(storeArray);
      }
    } catch (error) {
      alert("wat" + error);
      console.trace(error);
    }
  };

  // Funksjon for å legge til et element i lista eller step som stepgoal.
  addItem = item => {
    let newList = this.state.items.slice();
    newList.push({
      date: this.state.viewDate.getDate(),
      id: this.state.itemCounter,
      inputid: "input" + this.state.itemCounter,
      name: "Rad " + this.state.itemCounter,
      type: this.state.type,
      text: this.state.text,
      stepgoal: this.state.stepGoal,
      done: false
    });

    this.storeItemData(newList);
    this.setState({ items: newList });
    this.state.itemCounter++;
    this.toggleModal();
    this.setState({ text: null });
    this.setState({ type: null });
  };

  // Funksjon for å handle textinput enten som todo-item, eller som step-item (bare nummer).
  handleInput = text => {
    this.setState({ text: text });
  };

  // Veldig lik funksjonen over, håndterer input.
  handleStepGoal = stepGoal => {
    if (/^\d+$/.test(stepGoal)) {
      this.setState({ stepGoal: stepGoal });
    }
  };

  // Hånterer typen element (step- eller todo-element)
  setType = text => {
    this.setState({ type: text });
  };

  // Funksjonen som kalles når man trykker på "Done"-knappen på et element i lista.
  // Skal gjøre elementet grønt og øke counteren.
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
            stepgoal: element.stepgoal,
            done: element.done
          });
        } else if (element.id == index && element.date == dato) {
          newList.push({
            date: element.date,
            id: element.id,
            inputid: element.inputid,
            name: element.name,
            type: element.type,
            text: element.text,
            stepgoal: element.stepgoal,
            done: true
          });
        }
      });
      this.storeItemData(newList);
      this.loadListItems();
    }
  };

  // Funksjonen som kalles når man trykker på "Delete"-knappen på et element i lista.
  // Skal fjerne elementet fra den synlige lista, og fra AsyncStorage.
  handleDeleteClick = index => {
    let dato = this.state.viewDate.getDate();
    let newList = [];
    if (this.state.items.length > 0) {
      this.state.items.forEach(function(element) {
        if (element.id != index && element.date == dato) {
          newList.push({
            date: element.date,
            id: element.id,
            inputid: "input" + element.inputid,
            name: "Rad " + element.name,
            type: element.type,
            text: element.text,
            stepGoal: element.stepGoal,
            done: element.done
          });
        }
        if (element.id == index) {
          AsyncStorage.removeItem(index.toString());
        }
      });
      this.setState({ items: newList });
      this.loadListItems();

      if (newList.length === 0) {
        this.resetDoneCounter();
      }
    }
  };

  resetDoneCounter = () => {
    this.setState({ doneCounter: 0 });
  };

  // Funksjonen som kalles når man trykker på "<--"-knappen (tilbake en dag).
  // Skal rendre lista for den forrige dagen.
  handlePrevDayClick = () => {
    let currentDate = new Date();
    if (this.state.viewDate.getDate() !== currentDate.getDate() - 1) {
      this.setState({
        viewDate: new Date(
          this.state.viewDate.setDate(this.state.viewDate.getDate() - 1)
        )
      });

      this.loadListItems();
      if (this.state.viewDate.getDate() < currentDate.getDate()) {
        this.setState({ addItemDisabled: true });
      }
    }
  };

  // Funksjonen som kalles når man trykker på "-->"-knappen (framover en dag).
  // Skal rendre lista for den neste dagen.
  handleNextDayClick = () => {
    let currentDate = new Date();
    if (this.state.viewDate.getDate() !== currentDate.getDate() + 1) {
      this.setState({
        viewDate: new Date(
          this.state.viewDate.setDate(this.state.viewDate.getDate() + 1)
        )
      });

      this.loadListItems();
      if (this.state.viewDate.getDate() >= currentDate.getDate()) {
        this.setState({ addItemDisabled: false });
      }
    }
  };

  // Funksjonen som toggler av og på modal (der man legger til et item).
  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  // Render funksjonen som blir initialisert ved start av appen.
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
            handleStepGoal={this.handleStepGoal}
            setType={this.setType}
            dateToday={this.state.viewDate}
          />

          <StepCounter
            stepGoal={this.state.stepGoal}
            viewDate={this.state.viewDate}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.doneItemsCounter}>
              <Text style={styles.doneItemsCounterText}>
                {"ToDo's done: "}
                {this.state.doneCounter}
              </Text>
            </View>
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
