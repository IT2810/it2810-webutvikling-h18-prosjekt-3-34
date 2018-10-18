import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import renderer from "react-test-renderer";
import App from "../App";
import MockStorage from "./mockStorage";
import AsyncStorage from "react-native";
let dateNowSpy;

const storageCache = {};
const asyncStorage = new MockStorage(storageCache);
jest.setMock("AsyncStorage", asyncStorage);

//Snapshot test
const shallow = new ShallowRenderer();
shallow.render(<App />);
const result = shallow.getRenderOutput();
/* Fix mock date
test("renders correctly", () => {
  expect(result).toMatchSnapshot(); //Mock date object beforeAll
  expect(result.type).toBe(React.Fragment);
});
*/
let appComponent = renderer.create(<App />).getInstance();
it("addItem should add an item to items list", () => {
  expect(appComponent.state.items).toEqual([]);
  appComponent.setState({ type: "todo" });
  appComponent.setState({ text: "hello" });
  appComponent.addItem();
  expect(appComponent.state.items).toEqual([
    {
      date: new Date().getDate(),
      id: 0,
      inputid: "input0",
      name: "Rad 0",
      type: "todo",
      text: "hello",
      done: false
    }
  ]);
});

it("addItem should increase itemcounter, and reset text and type field", () => {
  expect(appComponent.state.itemCounter).toBe(1);
  expect(appComponent.state.text).toBe(null);
  expect(appComponent.state.type).toBe(null);
});

it("handleInput should set text state", () => {
  appComponent.handleInput("hello");
  expect(appComponent.state.text).toBe("hello");
});

let yesterDay = new Date().getDate() - 1;

it("handlePrevDayClick should set a new date", () => {
  appComponent.handlePrevDayClick();
  expect(appComponent.state.viewDate.getDate()).toBe(yesterDay);
});

it("Asynchstorage is empty first time", () => {
  expect(appComponent.AsynchStorage).toBe(null);
});
