import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "../App";

//Snapshot test
const shallow = new ShallowRenderer();
shallow.render(<App />);
const result = shallow.getRenderOutput();

test("renders correctly", () => {
  expect(result).toMatchSnapshot();
  expect(result.type).toBe(React.Fragment);
});
