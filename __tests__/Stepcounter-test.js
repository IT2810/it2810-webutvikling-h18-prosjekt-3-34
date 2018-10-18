import React from "react";
import Stepcounter from ".././components/stepcounter";

import MockDate from "mockdate";

import renderer from "react-test-renderer";

//Snapshot test TODO: mock date
beforeAll(() => {
  MockDate.set("2018-10-10");
});

afterAll(() => {
  MockDate.reset();
});

test("renders correctly", () => {
  const tree = renderer.create(<Stepcounter viewDate={new Date()} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Code gotten from expo docs. Only change is text shown. Not needed to test.
