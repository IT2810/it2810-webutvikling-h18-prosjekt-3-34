import React from "react";
import Itemcomponent from ".././components/itemcomponent";

import renderer from "react-test-renderer";

//Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Itemcomponent />).toJSON();
  expect(tree).toMatchSnapshot();
});

//Test statechanging methods
it("hasDoneClick should change background color to green", () => {
  let itemComponent = renderer.create(<Itemcomponent />).getInstance();

  expect(itemComponent.state.backgroundColor).toBe("#bdbdbd");
  itemComponent.handleDoneClick();
  expect(itemComponent.state.backgroundColor).toBe("green");
});
