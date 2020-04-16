import React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";

const DATA = {
  LABEL: "Label",
  CLASSNAME: "button",
};

describe("Button", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Button className={DATA.CLASSNAME} role="test button" onClick={mockFn}>
        {DATA.LABEL}
      </Button>,
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
