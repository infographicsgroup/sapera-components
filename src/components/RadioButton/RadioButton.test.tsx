import React from "react";
import { shallow } from "enzyme";
import { RadioButton } from "./RadioButton";

const DATA = {
  LABEL: "Label",
  CLASSNAME: "radioButton",
};

describe("RadioButon", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <RadioButton className={DATA.CLASSNAME} onClick={mockFn}>
        {DATA.LABEL}
      </RadioButton>,
    );

    it("renders children as a string expected", () => {
      expect(wrapper.children().text()).toEqual(DATA.LABEL);
    });

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    it("simulates click events", () => {
      wrapper.find("button").simulate("click");
      expect(mockFn.mock.calls.length).toEqual(1);
    });

    it("should not be disabled", () => {
      expect(wrapper.props().disabled).toEqual(false);
    });

    // TODO: continue add attributes and icon
  });
});
