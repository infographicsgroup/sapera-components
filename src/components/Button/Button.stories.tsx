import React from "react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { Button } from "./Button";
import { withA11y } from "@storybook/addon-a11y";
import Icon from "./Icon";

export default {
  title: "Button",
  component: Button,
  decorators: [withA11y],
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const downloadIcon = <Icon height={"25px"} width={"25px"} />;

export const TextButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Column>
      <Button bg={"purple"} onClick={action("clicked")}>
        primary lg, custom bg
      </Button>
      <br />
      <Button size={"medium"} onClick={action("clicked")}>
        primary md
      </Button>
      <br />
      <Button size={"small"} onClick={action("clicked")}>
        primary sm
      </Button>
    </Column>
    <Column>
      <Button isSecondary onClick={action("clicked")}>
        Secondary lg
      </Button>
      <br />
      <Button bg={"yellow"} size={"medium"} isSecondary onClick={action("clicked")}>
        Secondary md
      </Button>
      <br />
      <Button size={"small"} isSecondary onClick={action("clicked")}>
        Secondary sm
      </Button>
    </Column>
  </div>
);

export const TextWithIconButtons: React.FunctionComponent = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Column>
      <Button icon={downloadIcon} onClick={action("clicked")}>
        <p>button</p>
      </Button>
      <br />
      <Button icon={downloadIcon} size={"medium"} iconFirst onClick={action("clicked")}>
        <p>Button</p>
      </Button>
      <br />
      <Button icon={downloadIcon} size={"small"} onClick={action("clicked")}>
        <p>Button</p>
      </Button>
    </Column>
    <Column>
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
