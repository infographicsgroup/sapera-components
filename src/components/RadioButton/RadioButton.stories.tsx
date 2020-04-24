import React from "react";
import { action } from "@storybook/addon-actions";
import { RadioButton } from "./RadioButton";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "RadioButton",
  component: RadioButton,
  decorators: [withA11y],
};

export const Default: React.FunctionComponent = () => <RadioButton onClick={action("clicked")}>Default</RadioButton>;

// export const Selected: React.FunctionComponent = () => <RadioButton onClick={action("clicked")}>Selected</RadioButton>;

// export const Disabled: React.FunctionComponent = () => (
//   <RadioButton disabled onClick={action("clicked")}>
//     Disabled
//   </RadioButton>
// );
