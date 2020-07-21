import React, { useState } from "react";
import { CirclePagination } from "./CirclePagination";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { Column } from "../../theme/custom-styled-components";

export default {
  title: "CirclePagination",
  component: CirclePagination,
  decorators: [withA11y],
};

const dummyData = [1, 2, 3, 4, 5];

export const CirclePaginationGroup: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState(1);

  const onClick = (index: number) => {
    setActiveItem(index);
    action("clicked");
  };

  return (
    <>
      <Column>
        <Column alignItems="center" justifyContent="center" border="primary" width={50} height={50}>
          {activeItem}
        </Column>
        <CirclePagination data={dummyData} onItemClick={(index: number) => onClick(index)} activeItem={activeItem} />
      </Column>
    </>
  );
};
