import React from "react";
import { shallow } from "enzyme";
import App from "../../App";

describe("Weapons", () => {
  const wrapper = shallow(<App />);
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call changePlayMode when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "changePlayMode");
    const event = {
      target: { name: "", value: "" },
      preventDefault: jest.fn(),
    };
    wrapper.instance().changePlayMode(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call resetGame when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "resetGame");
    const event = {
      target: { name: "", value: "" },
      preventDefault: jest.fn(),
    };
    wrapper.instance().resetGame(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call selectWeapon when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "selectWeapon");
    const event = {
      target: { name: "", value: "" },
      preventDefault: jest.fn(),
    };
    wrapper.instance().selectWeapon(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call selectWinner when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "selectWinner");
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().selectWinner(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call declareWinner when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "declareWinner");
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().declareWinner(event);
    expect(spy).toHaveBeenCalled();
  });

  it("should call startGame when the function is called", () => {
    const spy = jest.spyOn(wrapper.instance(), "startGame");
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().startGame(event);
    expect(spy).toHaveBeenCalled();
  });
});
