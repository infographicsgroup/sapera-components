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
        <Checkbox id="checkbox-default" name="default" value="default" onChange={action("checked")}>
          This is a custom checkbox default style
        </Checkbox>
      </Column>
      <Column>
        <Checkbox
          errorText="hasError"
          id="checkbox-with-error"
          name="checkbox-with-error"
          value="checkbox-with-error"
          hasError
          onChange={action("checked")}
        >
          Checkbox with Error
        </Checkbox>
      </Column>
      <Column>
        <Checkbox id="checkbox-disabled" name="disabled" value="disabled" disabled onChange={action("checkd")}>
          disabled
        </Checkbox>
      </Column>
    </Grid>
  );
};
