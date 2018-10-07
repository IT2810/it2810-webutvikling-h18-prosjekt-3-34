import React from "react";
import Iteminput from ".././components/iteminput";

import renderer from "react-test-renderer";

//Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Iteminput />).toJSON();
  expect(tree).toMatchSnapshot();
});
