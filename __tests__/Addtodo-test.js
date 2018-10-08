import React from "react";
import Addtodo from ".././components/addtodo";
import { Text, View, TouchableOpacity } from "react-native";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import Modal from "react-native-modal";
import styles from "../stylesheets/addtodo.style.js";

// Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Addtodo />).toJSON();
  expect(tree).toMatchSnapshot();
});

//Test if children components renders correctly
const shallow = new ShallowRenderer();
shallow.render(<Addtodo />);
const result = shallow.getRenderOutput();

test("Renders correct type", () => {
  expect(result.type).toBe(Modal);
});

it("ToggleTodoInput should change showTodoInputField", () => {
  let addTodoComponent = renderer
    .create(<Addtodo setType={() => {}} />) // Not interested to test setType function of App.
    .getInstance();
  expect(addTodoComponent.state.showTodoInputField).toBe(false);
  addTodoComponent.toggleTodoInput();
  expect(addTodoComponent.state.showTodoInputField).toBe(true);
  addTodoComponent.toggleTodoInput();
  expect(addTodoComponent.state.showTodoInputField).toBe(false);
});

it("ToggleStepInput should change showStepInputField", () => {
  let addTodoComponent = renderer
    .create(<Addtodo setType={() => {}} />) // Not interested to test setType function of App.
    .getInstance();
  expect(addTodoComponent.state.showStepInputField).toBe(false);
  addTodoComponent.toggleStepInput();
  expect(addTodoComponent.state.showStepInputField).toBe(true);
  addTodoComponent.toggleStepInput();
  expect(addTodoComponent.state.showStepInputField).toBe(false);
});

it("CloseModal should set all States to false", () => {
  let addTodoComponent = renderer
    .create(<Addtodo toggleModal={() => {}} setType={() => {}} />) // Not interested to test toggle modal function of App.
    .getInstance();
  expect(addTodoComponent.state.showStepInputField).toBe(false);
  expect(addTodoComponent.state.showTodoInputField).toBe(false);
  addTodoComponent.toggleTodoInput();
  addTodoComponent.toggleStepInput();
  expect(addTodoComponent.state.showStepInputField).toBe(true);
  expect(addTodoComponent.state.showTodoInputField).toBe(true);
  addTodoComponent.closeModal();
  expect(addTodoComponent.state.showStepInputField).toBe(false);
  expect(addTodoComponent.state.showTodoInputField).toBe(false);
});
