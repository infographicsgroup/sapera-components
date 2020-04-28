import React from "react";
import { shallow } from "enzyme";
import { RadioButton } from "./RadioButton";

const DATA = {
  NAME: "Name",
  TEXT: "Text",
  VALUE: "Value",
  CLASSNAME: "radioButton",
  CHECKED: true,
};

describe("RadioButon", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <RadioButton
        checked={DATA.CHECKED}
        className={DATA.CLASSNAME}
        name={DATA.NAME}
        value={DATA.VALUE}
        onClick={mockFn}
      >
        {DATA.TEXT}
      </RadioButton>,
    );

    console.log("wrapper", wrapper.props());

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    it("should not be disabled", () => {
      expect(wrapper.props().disabled).toEqual(false);
    });

    it("should be checked", () => {
      expect(wrapper.props().ischecked).toEqual(true);
    });
  });
});
