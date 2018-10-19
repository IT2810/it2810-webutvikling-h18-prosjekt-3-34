import React from "react";
import Todolist from ".././components/todolist";
import Itemcomponent from ".././components/itemcomponent";
import { ScrollView } from "react-native";
import ShallowRenderer from "react-test-renderer/shallow";

let items = [
  { id: 1, inputid: "input1", type: "todo", text: "kjop melk", done: true }
];

//Snapshot test

const shallow = new ShallowRenderer();
shallow.render(<Todolist items={items} />);
const result = shallow.getRenderOutput();

test("renders correctly", () => {
  expect(result).toMatchSnapshot();
  expect(result.type).toBe(ScrollView);
});

test("renders child correctly", () => {
  expect(result.props.children).toEqual([
    <Itemcomponent key="input1" id={1} text="kjop melk" status={true} />
  ]);
});
