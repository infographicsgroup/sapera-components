import React from "react";
import { shallow } from "enzyme";
import { CirclePagination } from "./CirclePagination";

const DATA = {
  LABEL: "Label",
  CLASSNAME: "circlePagination",
};

describe("CirclePagination", () => {
  describe("Renders common props as expected", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(
      <CirclePagination activeItem={1} className={DATA.CLASSNAME} data={[1, 2, 3, 4]} onItemClick={mockFn} />,
    );

    it("should have a class name", () => {
      expect(wrapper.hasClass(DATA.CLASSNAME)).toBe(true);
    });

    it("simulates click events", () => {
      wrapper.find(`.${DATA.CLASSNAME}`).simulate("click");
      expect(mockFn.mock.calls.length).toEqual(1);
    });
  });
});
