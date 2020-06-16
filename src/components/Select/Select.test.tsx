import React from "react";
import { shallow } from "enzyme";
import { SelectComponent } from "./Select";
import { OPTIONS_DATA } from "./dummyData";

const DATA = {
  CLASSNAME: "selectComponent",
};

describe("Select", () => {
  describe("renders <SelectComponent /> component", () => {
    const wrapper = shallow(<SelectComponent className={DATA.CLASSNAME} options={OPTIONS_DATA} />);

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    // TODO: continue
  });
});
