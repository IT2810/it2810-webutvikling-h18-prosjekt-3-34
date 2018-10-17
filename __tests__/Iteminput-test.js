import React from "react";
import Iteminput from ".././components/iteminput";

import renderer from "react-test-renderer";

/**
 * Test klasse for iteminput komponent
 */

// 1. Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<Iteminput />).toJSON();
  expect(tree).toMatchSnapshot();
});

// 2.
