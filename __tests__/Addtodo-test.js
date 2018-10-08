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
const shallow = new ShallowRenderer();
shallow.render(<Addtodo />);
const result = shallow.getRenderOutput();

expect(result.type).toBe("Modal");
*/
