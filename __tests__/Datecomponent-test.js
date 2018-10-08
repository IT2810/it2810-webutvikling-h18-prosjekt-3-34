import React from "react";
import DateComponent from ".././components/datecomponent";

import renderer from "react-test-renderer";

//Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<DateComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
