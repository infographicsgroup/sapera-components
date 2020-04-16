import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default: React.FunctionComponent = () => (
  <Button role="Default button" onClick={action("clicked")}>
    Default
  </Button>
);

export const Disabled: React.FunctionComponent = () => (
  <Button role="Disabled button" disabled onClick={action("clicked")}>
    Disabled
  </Button>
);

export const Icon: React.FunctionComponent = () => (
  <Button role="Icon button" onClick={action("clicked")}>
    <svg height="30" width="30">
      <rect fill="blue" height="30" width="30" />
    </svg>
  </Button>
);
