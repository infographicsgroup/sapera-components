import React from "react";
import { shallow } from "enzyme";
import { Input } from "./Input";

const DATA = {
  LABEL: "Label",
  CLASSNAME: "input",
};

describe("Button", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();

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

    // const wrapperDisabled = shallow(
    //   <Button disabled onClick={mockFn}>
    //     {DATA.LABEL}
    //   </Button>,
    // );

    it("renders children as a string expected", () => {
      expect(wrapper.children().text()).toEqual(DATA.LABEL);
    });

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    it("simulates click events", () => {
      wrapper.find(`.${DATA.CLASSNAME}`).simulate("click");
      expect(mockFn.mock.calls.length).toEqual(1);
    });

    it("button should look disabled, but not have disabled attribute", () => {
      expect(wrapperDisabled.props().disabled).toEqual(undefined);
    });

    // TODO: continue add attributes and icon
  });
});
