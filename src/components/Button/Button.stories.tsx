import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { withA11y } from "@storybook/addon-a11y";
import Icon from "./Icon";

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y],
};

const downloadIcon = <Icon width={"25px"} />;

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
      <Button icon={downloadIcon} onClick={action("clicked")}>
        <p>Download</p>
      </Button>
      <br />
      <Button icon={downloadIcon} size={"medium"} iconFirst onClick={action("clicked")}>
        <p>Download</p>
      </Button>
      <br />
      <Button icon={downloadIcon} size={"small"} onClick={action("clicked")}>
        <p>Download</p>
      </Button>
    </div>
    <div>
      <Button icon={downloadIcon} isSecondary onClick={action("clicked")}>
        <p>Download</p>
      </Button>
      <br />
      <Button icon={downloadIcon} size={"medium"} isSecondary onClick={action("clicked")}>
        <p>Download</p>
      </Button>
      <br />
      <Button icon={downloadIcon} size={"small"} iconFirst isSecondary onClick={action("clicked")}>
        Download
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
