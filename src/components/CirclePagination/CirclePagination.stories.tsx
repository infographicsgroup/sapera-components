import React, { useState } from "react";
import { CirclePagination } from "./CirclePagination";
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { Column, Spacer } from "../../theme/custom-styled-components";

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
    <Column>
      <Column alignItems="center" border="primary" height={50} justifyContent="center" width={50}>
        {activeItem}
      </Column>
      <Spacer mt={{ xxs: 3, lg: 5 }} />
      <CirclePagination activeItem={activeItem} data={dummyData} onItemClick={(index: number) => onClick(index)} />
    </Column>
  );
};
