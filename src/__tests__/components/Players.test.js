import React from "react";
import { shallow } from "enzyme";
import Player from "../../components/Player";

describe("Player", () => {
  const wrapper = shallow(<Player />);
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});