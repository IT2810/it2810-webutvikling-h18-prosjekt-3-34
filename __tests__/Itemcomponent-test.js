import React from "react";
import Itemcomponent from ".././components/itemcomponent";

import renderer from "react-test-renderer";

//Snapshot test of a completed item component
test("renders correctly", () => {
  const tree = renderer.create(<Itemcomponent status={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
