import React from "react";
import Addtodo from ".././components/addtodo";

import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

// Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Addtodo />).toJSON();
  expect(tree).toMatchSnapshot();
});

//Test if children components renders correctly
/*
const renderer = new ShallowRenderer();
renderer.render(<Addtodo />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('Modal');
expect(result.props.children).toEqual([
// write children of Modal
])*/
