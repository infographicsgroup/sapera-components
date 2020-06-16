import React from "react";
import styled from "styled-components";
import { SelectComponent } from "./Select";
import { OPTIONS_DATA } from "./dummyData";
import { Column, Grid, Spacer } from "../../theme/custom-styled-components";

const Heading = styled.h5`
  font-family: sans-serif;
`;
export default {
  title: "Select",
  component: SelectComponent,
};

export const Default: React.FunctionComponent = () => {
  return (
    <Grid gridTemplateColumns={{ xxs: "100%", lg: "50% 50%" }} p={2}>
      <Column>
        <Heading>Large size</Heading>
        <Spacer mb={7} mt={2}>
          <SelectComponent options={OPTIONS_DATA} placeholder="Choose flavour" />
        </Spacer>
      </Column>

      <Column>
        <Heading>Meidum size</Heading>
        <Spacer mb={7} mt={2}>
          <SelectComponent options={OPTIONS_DATA} size="medium" />
        </Spacer>
      </Column>
    </Grid>
  );
};
