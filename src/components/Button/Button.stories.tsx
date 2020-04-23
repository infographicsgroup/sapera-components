import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y],
};

export const TextButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      <Button onClick={action("clicked")}>primary lg</Button>
      <br />
      <Button size={"medium"} onClick={action("clicked")}>
        primary md
      </Button>
      <br />
      <Button size={"small"} onClick={action("clicked")}>
        primary sm
      </Button>
    </div>
    <div>
      <Button isSecondary onClick={action("clicked")}>
        Secondary lg
      </Button>
      <br />
      <Button size={"medium"} isSecondary onClick={action("clicked")}>
        Secondary md
      </Button>
      <br />
      <Button size={"small"} isSecondary onClick={action("clicked")}>
        Secondary sm
      </Button>
    </div>
  </div>
);

export const TextWithIconButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      <Button buttonVariety={"textWithIcon"} onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        <p>Download</p>
      </Button>
      <br />
      {/* TODO/Question: would I have to import button sizes here everytime I want to specify button size outside of sorybook to get rid of the type error? this is one of the parts of the enum typing that I didn't get */}
      <Button buttonVariety={"textWithIcon"} size={"medium"} onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        <p>Download</p>
      </Button>
      <br />
      <Button buttonVariety={"textWithIcon"} size={"small"} onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        <p>Download</p>
      </Button>
    </div>
    <div>
      <Button buttonVariety={"textWithIcon"} isSecondary onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        <p>Download</p>
      </Button>
      <br />
      <Button buttonVariety={"textWithIcon"} size={"medium"} isSecondary onClick={action("clicked")}>
        <p>Download</p>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
      </Button>
      <br />
      <Button buttonVariety={"textWithIcon"} size={"small"} isSecondary onClick={action("clicked")}>
        <svg height="30" width="30">
          <rect height="30" width="30" />
        </svg>
        Download
      </Button>
    </div>
  </div>
);

export const IconButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <div>
      <Button ariaLabel={"download"} buttonVariety={"icon"} isSecondary onClick={action("clicked")}>
        <svg height="20" width="20">
          <rect height="20" width="20" />
        </svg>
      </Button>
      <br />
      <Button ariaLabel={"download"} buttonVariety={"icon"} size={"medium"} isSecondary onClick={action("clicked")}>
        <svg height="20" width="20">
          <rect height="20" width="20" />
        </svg>
      </Button>
      <br />
      <Button ariaLabel={"download"} buttonVariety={"icon"} size={"small"} isSecondary onClick={action("clicked")}>
        <svg height="20" width="20">
          <rect height="20" width="20" />
        </svg>
      </Button>
    </div>
    <div>
      <Button ariaLabel={"download"} buttonVariety={"icon"} onClick={action("clicked")}>
        <svg height="20" width="20">
          <rect height="20" width="20" />
        </svg>
      </Button>
      <br />
      <Button ariaLabel={"download"} buttonVariety={"icon"} size={"medium"} onClick={action("clicked")}>
        <svg height="20" width="20">
          <rect height="20" width="20" />
        </svg>
      </Button>
      <br />
      <Button ariaLabel={"download"} buttonVariety={"icon"} size={"small"} onClick={action("clicked")}>
        <svg height="20" width="20">
          <rect height="20" width="20" />
        </svg>
      </Button>
    </div>
  </div>
);

export const ButtonStates: React.FunctionComponent = () => (
  <>
    <Button disabled onClick={action("clicked")}>
      Disabled
    </Button>
    <br />
    <Button onClick={action("clicked")}>Hover</Button>
  </>
);
