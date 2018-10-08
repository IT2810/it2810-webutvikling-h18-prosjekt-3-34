import React from "react";
import Todolist from ".././components/todolist";
import Itemcomponent from ".././components/itemcomponent";
import { ScrollView } from "react-native";

import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

let items = [
  { id: 1, inputid: "input1", name: "rad1", type: "todo", text: "kjop melk" },
  { id: 2, inputid: "input2", name: "rad2", type: "step", text: 200 }
];

//Snapshot test

test("renders correctly", () => {
  const tree = renderer.create(<Todolist items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

const shallow = new ShallowRenderer();
shallow.render(<Todolist items={items} />);
const result = shallow.getRenderOutput();

expect(result.type).toBe(ScrollView);
expect(result.props.children).toEqual([
  <Itemcomponent key="input1" id={1} text="kjop melk" />,
  <Itemcomponent key="input2" id={2} text={200} />
]);
