import React from "react";
import { SelectComponent } from "./Select";
import { Column, Spacer } from "../../styled";
import { withA11y } from "@storybook/addon-a11y";
import { OPTIONS_DATA } from "./Select.props";

/**
 * <Default />
 */
const Default: React.FunctionComponent = () => (
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

export { Default };

export default {
  title: "Select",
  component: SelectComponent,
  decorators: [withA11y],
};
