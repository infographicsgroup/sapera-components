import React from "react";
import { action } from "@storybook/addon-actions";
import { RadioButton } from "./RadioButton";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "RadioButton",
  component: RadioButton,
  decorators: [withA11y],
};

export const Default: React.FunctionComponent = () => (
  <>
    <br />
    <RadioButton name="color" value="red" onClick={action("clicked")}>
      Red
    </RadioButton>
    <RadioButton name="color" value="yellow" onClick={action("clicked")}>
      Yellow
    </RadioButton>
    <RadioButton name="color" value="green" onClick={action("clicked")}>
      Green
    </RadioButton>
  </>
);

export const Disabled: React.FunctionComponent = () => (
  <>
    <RadioButton name="color" value="pink" disabled onClick={action("clicked")}>
      Disabled radio button
    </RadioButton>
    <RadioButton name="color" value="orange" disabled onClick={action("clicked")}>
      Disabled radio button
    </RadioButton>
  </>
);

// export const Selected: React.FunctionComponent = () => <RadioButton onClick={action("clicked")}>Selected</RadioButton>;

// export const Disabled: React.FunctionComponent = () => (
//   <RadioButton disabled onClick={action("clicked")}>
//     Disabled
//   </RadioButton>
// );
