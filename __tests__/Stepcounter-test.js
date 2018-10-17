import React from "react";
import Stepcounter from ".././components/stepcounter";

import renderer from "react-test-renderer";

//Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Stepcounter />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Code gotten from expo docs. Only change is text shown. Not needed to test.
