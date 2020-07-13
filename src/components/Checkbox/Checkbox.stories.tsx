import React from "react";
import { action } from "@storybook/addon-actions";
import { Checkbox } from "./Checkbox";
import { withA11y } from "@storybook/addon-a11y";
import { Column, Grid } from "../../theme/custom-styled-components";

export default {
  title: "Checkbox",
  component: Checkbox,
  decorators: [withA11y],
};

export const Default: React.FunctionComponent = () => {
  return (
    <Grid gridGap={4}>
      <Column>
        <Checkbox id="checkbox-default" onChange={action("clicked")}>
          This is a custom checkbox default style
        </Checkbox>
      </Column>
      <Column>
        <Checkbox id="checkbox-checked" checked onChange={action("clicked")}>
          checked
        </Checkbox>
      </Column>
      <Column>
        <Checkbox id="checkbox-disabled" disabled onChange={action("clicked")}>
          disabled
        </Checkbox>
      </Column>
    </Grid>
  );
};
