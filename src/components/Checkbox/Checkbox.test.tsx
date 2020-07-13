import React from "react";
import { shallow } from "enzyme";
import { Checkbox } from "./Checkbox";

const DATA = {
  ID: "checkbox-default",
  TEXT: "Text",
  VALUE: "Value",
  CLASSNAME: "Checkbox",
  CHECKED: true,
};

describe("Checkbox", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Checkbox checked={DATA.CHECKED} className={DATA.CLASSNAME} id={DATA.ID} onClick={mockFn}>
        {DATA.TEXT}
      </Checkbox>,
    );

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    // TODO: continue
  });
});
