import React from "react";
import styled from "styled-components";
import { SelectComponent } from "./Select";
import { OPTIONS_DATA } from "./dummyData";
import { Column, Spacer } from "../../theme/custom-styled-components";
import { withA11y } from "@storybook/addon-a11y";

const Heading = styled.h5`
  font-family: sans-serif;
`;
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
          <Heading>Large size with custom placeholder</Heading>
          <Spacer mb={4} mt={2}>
            <SelectComponent options={OPTIONS_DATA} placeholder="Choose flavour" />
          </Spacer>
        </Column>
        <Column>
          <Heading>Meidum size</Heading>
          <Spacer mb={7} mt={2}>
            <SelectComponent options={OPTIONS_DATA} size="medium" />
          </Spacer>
        </Column>
      </Spacer>
    </Column>
  );
};
