import React from "react";
import { shallow } from "enzyme";
import { Flexbox } from "./Flexbox";

const DATA = {
  CONTENT: <div>content</div>,
  CLASSNAME: "flexbox",
};

describe("Flexbox", () => {
  describe("renders <Flexbox /> components", () => {
    const wrapper = shallow(<Flexbox className={DATA.CLASSNAME}>{DATA.CONTENT}</Flexbox>);

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    it("renders children when passed in", () => {
      expect(wrapper.contains(DATA.CONTENT)).toBe(true);
    });

    // TODO: renders inline styles
  });
});
