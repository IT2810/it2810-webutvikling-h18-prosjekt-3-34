import React from "react";
import Stepcounter from ".././components/stepcounter";

import renderer from "react-test-renderer";

//Snapshot test TODO: mock date

test("renders correctly", () => {
  const tree = renderer.create(<Stepcounter viewDate={new Date()} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Code gotten from expo docs. Only change is text shown. Not needed to test.
