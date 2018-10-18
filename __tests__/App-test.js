import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { AsyncStorage as storage } from "react-native";

import App from "../App";
import MockAsyncStorage from "mock-async-storage";
import renderer from "react-test-renderer";

const mockAsync = () => {
  const mockImpl = new MockAsyncStorage();
  jest.mock("AsyncStorage", () => mockImpl);
};

const releaseMockAsync = () => jest.unmock("AsyncStorage");

beforeAll(() => {
  console.log("Start");
  // Set Date object to a deterministic value

  // Setup for AsyncStorage mock
  mockAsync();
});

afterAll(() => {
  //Release Date

  //Release mockAsync
  releaseMockAsync();
  console.log("end");
});

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
/*
it("Mock async storage working", async () => {
  await storage.setItem("steps", "15000");
  const value = await storage.getItem("steps");
  expect(value).toBe("15000");
});
*/
it("addItem method should store data in async list", async () => {
  //Key for this value is 1, since state.itemCounter is now 1.
  appComponent.setState({ text: "text To AsyncStorage" });
  appComponent.setState({ type: "todo" });
  appComponent.addItem();
  const key = appComponent.state.items[0].id.toString(); //key = 1
  const value = await storage.getItem(key);
  const valueAsObject = JSON.parse(value);
  expect(valueAsObject).toEqual(appComponent.state.items[0]);
});
