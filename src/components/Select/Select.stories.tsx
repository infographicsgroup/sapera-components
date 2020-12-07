import React from "react";
import { SelectComponent } from "./Select";
import { OPTIONS_DATA } from "./dummyData";
import { Column, Spacer } from "../../styled";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Select",
  component: SelectComponent,
  decorators: [withA11y],
};

export const Default: React.FunctionComponent = () => {
  return (
    <Column>
      <Spacer p={3}>
        <Column>
          <Spacer mb={4} mt={2}>
            <SelectComponent
              label="Large size with custom placeholder"
              options={OPTIONS_DATA}
              placeholder="Choose flavour"
            />
          </Spacer>
        </Column>
        <Column>
          <Spacer mb={4} mt={2}>
            <SelectComponent label="Medium size" options={OPTIONS_DATA} size="medium" />
          </Spacer>
        </Column>
        <Column>
          <Spacer mb={7} mt={2}>
            <SelectComponent label="Disabled UI" options={OPTIONS_DATA} placeholder="Choose flavour" hasDisabledUI />
          </Spacer>
        </Column>
      </Spacer>
    </Column>
  );
};
