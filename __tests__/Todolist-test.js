import React from "react";
import Todolist from ".././components/todolist";

import renderer from "react-test-renderer";

let items = [
  { id: 1, inputid: "input1", name: "rad1", type: "todo", text: "kjop melk" }
];

//Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Todolist items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});
