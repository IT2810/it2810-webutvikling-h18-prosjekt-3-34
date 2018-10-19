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

// Metoden addItem bruker bare metoder lengre opp i hierarkiet,
// og blir dermed testet der.
