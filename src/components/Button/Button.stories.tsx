import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";
import { withA11y } from "@storybook/addon-a11y";
import { DownloadIcon } from "../Icon/Icons";
import { Column } from "../../styled";

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y],
};

const downloadIcon = <DownloadIcon height={25} width={25} />;

export const TextButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Column alignItems="center" justifyContent="center">
      <Button bg="purple" id="button-id" onClick={action("clicked")}>
        primary lg, custom bg
      </Button>
      <br />
      <Button
        data-test="data-attribute-test"
        data-test-two="data-attribute-test-two"
        size="medium"
        onClick={action("clicked")}
      >
        primary md
      </Button>
      <br />
      <Button size="small" onClick={action("clicked")}>
        primary sm
      </Button>
    </Column>
    <Column>
      <Button isSecondary onClick={action("clicked")}>
        Secondary lg
      </Button>
      <br />
      <Button bg="yellow" size="medium" isSecondary onClick={action("clicked")}>
        Secondary md
      </Button>
      <br />
      <Button size="small" isSecondary onClick={action("clicked")}>
        Secondary sm
      </Button>
    </Column>
  </div>
);

export const TextWithIconButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Column alignItems="center" justifyContent="center">
      <Button icon={downloadIcon} onClick={action("clicked")}>
        button
      </Button>
      <br />
      <Button icon={downloadIcon} size="medium" iconFirst onClick={action("clicked")}>
        Button
      </Button>
      <br />
      <Button icon={downloadIcon} size="small" onClick={action("clicked")}>
        Button
      </Button>
    </Column>
    <Column>
      <Button icon={downloadIcon} isSecondary onClick={action("clicked")}>
        Download
      </Button>
      <br />
      <Button icon={downloadIcon} size="medium" isSecondary onClick={action("clicked")}>
        Download
      </Button>
      <br />
      <Button icon={downloadIcon} size="small" iconFirst isSecondary onClick={action("clicked")}>
        Download
      </Button>
    </Column>
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
