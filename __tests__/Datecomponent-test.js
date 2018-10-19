import React from "react";
import DateComponent from ".././components/datecomponent";

import renderer from "react-test-renderer";

//Snapshot test
test("renders correctly", () => {
  //Sets the viewdate to today.
  const viewDate = new Date();
  const tree = renderer.create(<DateComponent viewDate={viewDate} />).toJSON();
  expect(tree).toMatchSnapshot();
});
