import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const TextButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      <Button role="Primary button" onClick={action("clicked")}>
        primary lg
      </Button>
      <br />
      <Button role="Primary button" size={"md"} onClick={action("clicked")}>
        primary md
      </Button>
      <br />
      <Button role="Primary button" size={"sm"} onClick={action("clicked")}>
        primary sm
      </Button>
    </div>
    <div>
      <Button role="Secondary button" isSecondary onClick={action("clicked")}>
        Secondary lg
      </Button>
      <br />
      <Button role="Secondary button" size={"md"} isSecondary onClick={action("clicked")}>
        Secondary md
      </Button>
      <br />
      <Button role="Secondary button" size={"sm"} isSecondary onClick={action("clicked")}>
        Secondary sm
      </Button>
    </div>
  </div>
);

export const TextWithIconButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      <Button buttonVariety={"textWithIcon"} role="Secondary button" onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        Download
      </Button>
      <br />
      <Button buttonVariety={"textWithIcon"} role="Secondary button" size={"md"} onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        Download
      </Button>
      <br />
      <Button buttonVariety={"textWithIcon"} role="Secondary button" size={"sm"} onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        Download
      </Button>
    </div>
    <div>
      <Button buttonVariety={"textWithIcon"} role="Secondary button" isSecondary onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        Download
      </Button>

      <br />
      <Button
        buttonVariety={"textWithIcon"}
        role="Secondary button"
        size={"md"}
        isSecondary
        onClick={action("clicked")}
      >
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        Download
      </Button>
      <br />
      <Button
        buttonVariety={"textWithIcon"}
        role="Secondary button"
        size={"sm"}
        isSecondary
        onClick={action("clicked")}
      >
        <svg height="30" width="30">
          <rect fill="blue" height="30" width="30" />
        </svg>
        Download
      </Button>
    </div>
  </div>
);

export const IconButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Button buttonVariety={"icon"} role="Icon button" isSecondary onClick={action("clicked")}>
      <svg height="20" width="20">
        <rect height="20" width="20" />
      </svg>
    </Button>
    <br />
    <Button buttonVariety={"icon"} role="Icon button" size={"md"} isSecondary onClick={action("clicked")}>
      <svg height="20" width="20">
        <rect height="20" width="20" />
      </svg>
    </Button>
    <br />
    <Button buttonVariety={"icon"} role="Icon button" size={"sm"} isSecondary onClick={action("clicked")}>
      <svg height="20" width="20">
        <rect height="20" width="20" />
      </svg>
    </Button>
  </div>
);

export const ButtonStates: React.FunctionComponent = () => (
  <>
    <Button role="Disabled button" disabled onClick={action("clicked")}>
      Disabled
    </Button>
    <br />
    <Button role="Hovered button" onClick={action("clicked")}>
      Hover
    </Button>
  </>
);
