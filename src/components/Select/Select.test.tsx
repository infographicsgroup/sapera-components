import React from "react";
import { shallow } from "enzyme";
import { SelectComponent } from "./Select";
import { OPTIONS_DATA } from "./dummyData";

const DATA = {
  CLASSNAME: "selectComponent",
  LABEL: "label",
};

describe("Select", () => {
  describe("renders <SelectComponent /> component", () => {
    const wrapper = shallow(<SelectComponent label={DATA.LABEL} options={OPTIONS_DATA} />);
    it("should render without errors", () => {
      expect(wrapper.length).toBe(1);
    });

    // TODO: continue
  });
});
