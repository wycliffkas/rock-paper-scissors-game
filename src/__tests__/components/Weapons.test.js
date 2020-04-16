import React from "react";
import { shallow } from "enzyme";
import Weapons from "../../components/Weapons";

describe("Weapons", () => {
  const wrapper = shallow(<Weapons />);
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
