import React from "react";
import { shallow } from "enzyme";
import { Input } from "./Input";

const DATA = {
  LABEL: "Label",
  CLASSNAME: "input",
};

describe("Button", () => {
  describe("Renders common props as expected", () => {
    let inputVal;

    const wrapper = shallow(
      <Input
        className={DATA.CLASSNAME}
        label={"Your age"}
        name="age"
        type="number"
        value={inputVal}
        onInputChange={(val) => (inputVal = val)}
      />,
    );
    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });
  });
});
