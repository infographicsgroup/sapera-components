import React from "react";
import { shallow } from "enzyme";
import { Flexbox } from "./Flexbox";

const DATA = {
  CONTENT: <div>content</div>,
};

describe("Flexbox", () => {
  describe("renders <Flexbox /> components", () => {
    const wrapper = shallow(<Flexbox>{DATA.CONTENT}</Flexbox>);

    it("renders children when passed in", () => {
      expect(wrapper.contains(DATA.CONTENT)).toBe(true);
    });
  });
});
