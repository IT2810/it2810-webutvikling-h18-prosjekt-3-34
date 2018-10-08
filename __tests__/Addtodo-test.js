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
