import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const TextButtons: React.FunctionComponent = () => (
  <>
    <Button role="Secondary button" isSecondary onClick={action("clicked")}>
      Secondary Large
    </Button>
    <br />
    <Button role="Secondary button" size="medium" isSecondary onClick={action("clicked")}>
      Secondary Medium
    </Button>
    <br />
    <Button role="Secondary button" size="small" isSecondary onClick={action("clicked")}>
      Secondary Medium
    </Button>

    <Button role="Default button" onClick={action("clicked")}>
      Primary Large
    </Button>
    <br />
    <Button role="Default button" size="medium" onClick={action("clicked")}>
      Primary Medium
    </Button>
    <br />
    <Button role="Default button" size="small" onClick={action("clicked")}>
      Primary Small
    </Button>
  </>
);

export const TextWithIconButtons: React.FunctionComponent = () => (
  <Button buttonStyle="textWithIcon" role="Secondary button" isSecondary onClick={action("clicked")}>
    <svg height="30" width="30">
      <rect fill="blue" height="30" width="30" />
    </svg>
    WIP: Text with Icon
  </Button>
);

export const IconButtons: React.FunctionComponent = () => (
  <Button buttonStyle="icon" role="Icon button" onClick={action("clicked")}>
    <svg height="20" width="20">
      <rect fill="orange" height="30" width="30" />
    </svg>
  </Button>
);

export const Disabled: React.FunctionComponent = () => (
  <Button role="Disabled button" disabled onClick={action("clicked")}>
    Disabled
  </Button>
);
