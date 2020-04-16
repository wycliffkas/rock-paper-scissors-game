import React from "react";
import { shallow } from "enzyme";
import Controls from "../../components/Controls";

describe("Controls", () => {
  const props = {
    resetGame: jest.fn(),
    startGame: jest.fn(),
  };

  const wrapper = shallow(<Controls {...props} />);
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
