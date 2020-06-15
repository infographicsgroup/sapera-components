import React from "react";
import { shallow } from "enzyme";
import { SelectComponent } from "./Select";

const DATA = {
  CLASSNAME: "selectComponent",
};

describe("Select", () => {
  describe("renders <SelectComponent /> component", () => {
    const wrapper = shallow(<SelectComponent className={DATA.CLASSNAME} />);

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });
  });
});
