import React from "react";
import { Flexbox } from "./Flexbox";

export default {
  title: "Flexbox Component",
  component: Flexbox,
};

// TODO: add Storybook AddOns info about styled-system, using camelCasing for inline styles,
// and Flexbox types are named FlexboxComponentProps instead of FlexboxProps due to styled-system existing FlexboxProps
export const Default: React.FunctionComponent = () => (
  <Flexbox
    styles={{
      borderBottom: "1px solid",
    }}
  >
    This is a Flexbox content powered by&nbsp;<a href="https://styled-system.com/api/">styled-system</a>.
  </Flexbox>
);
