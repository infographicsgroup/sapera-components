import React from "react";
import { shallow } from "enzyme";
import { RadioButton } from "./RadioButton";

const DATA = {
  NAME: "Name",
  TEXT: "Text",
  VALUE: "Value",
  CLASSNAME: "radioButton",
};

describe("RadioButon", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <RadioButton className={DATA.CLASSNAME} name={DATA.NAME} value={DATA.VALUE} onClick={mockFn}>
        {DATA.TEXT}
      </RadioButton>,
    );

    it("renders children as a string expected", () => {
      expect(wrapper.children().text()).toEqual(DATA.TEXT);
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
  });
});
