import React from "react";
import Itemcomponent from ".././components/itemcomponent";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Itemcomponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
