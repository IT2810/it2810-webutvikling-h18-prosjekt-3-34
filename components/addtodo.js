import React, { Component } from "react";
import { Text, View, TouchableOpacity, Platform } from "react-native";
import Modal from "react-native-modal";
import Iteminput from "./iteminput";
import styles from "../stylesheets/addtodo.style.js";

/**
 * @desc Er en modal som tar i mot input fra brukeren og legger itemcomponent til i todolist hvis det er en "todo". Hvis det er et
 * skrittmål som blir registrert, blir oppdateres state, og dermed også stepcounter.
 * Har state for å kontrollere hvilken av inputfeltene som skal vises.
 * @author Magnus Eriksson
 * @see iteminput.js for inputfeltene.
 */

class Addtodo extends Component {
  state = {
    showTodoInputField: false,
    showStepInputField: false
  };

  // Kjøres når man trykker på todo knappen i modal. Setter App sin state til todo, for at itemet som blir opprettet blir riktig.
  // setter showTodoInputField for å rendre inputfelt.
  toggleTodoInput = () => {
    this.props.setType("todo");
    this.setState({ showTodoInputField: !this.state.showTodoInputField });
  };

  //Samme logikk som toggleTodoInput
  toggleStepInput = () => {
    this.props.setType("step");
    this.setState({ showStepInputField: !this.state.showStepInputField });
  };

  /**
   * Fjerner vising av begge inputfeltene når man trykker på exit av modal.
   * This props toggleModal er funksjonen som åpner/lukker modal.
   * @see App.js for toggleModal
   */
  closeModal = () => {
    this.setState({ showTodoInputField: false });
    this.setState({ showStepInputField: false });
    this.props.toggleModal();
  };

  /**
   * @desc Rendrer inputfelt basert på hvilken type det er. Todo godtar input av både tekst og tall
   * @see App.js for handleInput
   */
  renderTodoInput = Iteminput => {
    if (this.state.showTodoInputField) {
      return (
        <Iteminput
          keyboardType="default"
          handleInput={this.props.handleInput}
          text={this.props.text}
          addItem={this.props.addItem}
          toggleTodoInput={this.toggleTodoInput}
          setType={this.props.setType}
          placeholder="Enter a todo-task!"
        />
      );
    } else {
      return null;
    }
  };

  /**
   * @desc Rendrer inputfelt basert på hvilken type det er. Step godtar kun tall
   * Rendrer forskjellig keyboard type basert på OS, da number-pad ser best ut, men funker kun på ios.
   * @see App.js for handleInput
   */
  renderStepInput = Iteminput => {
    if (this.state.showStepInputField && Platform.OS === "ios") {
      return (
        <Iteminput
          keyboardType="number-pad"
          handleInput={this.props.handleStepGoal}
          text={this.props.text}
          addItem={this.props.addItem}
          toggleTodoInput={this.toggleStepInput}
          setType={this.props.setType}
          placeholder="Enter number of steps!"
        />
      );
    } else if (this.state.showStepInputField && Platform.OS === "android") {
      return (
        <Iteminput
          keyboardType="numeric"
          handleInput={this.props.handleStepGoal}
          text={this.props.text}
          addItem={this.props.addItem}
          toggleTodoInput={this.toggleStepInput}
          setType={this.props.setType}
          placeholder="Enter number of steps!"
        />
      );
    } else {
      return null;
    }
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
