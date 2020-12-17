import React from "react";
import { shallow } from "enzyme";
import { CirclePagination } from "@components";

const DATA = {
  LABEL: "Label",
  CLASSNAME: "circlePagination",
};

const DUMMY_DATA = [1, 2, 3, 4];

describe("CirclePagination", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <CirclePagination activeItem={1} className={DATA.CLASSNAME} data={DUMMY_DATA} onItemClick={mockFn} />,
    );

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    it("should have a child for each data item", () => {
      expect(wrapper.children()).toHaveLength(DUMMY_DATA.length);
    });
  });
});
