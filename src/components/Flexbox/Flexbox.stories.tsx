import React from "react";
import { Flexbox } from "./Flexbox";

export default {
  title: "Flexbox",
  component: Flexbox,
};

// TODO: add Storybook AddOns info about styled-system,
// add info about HOC to add inline style and classname
// https://styled-system.com/guides/build-a-box
export const Default: React.FunctionComponent = () => (
  <Flexbox alignContent="center" justifyContent="space-around">
    This is a flexbox content powered by&nbsp;<a href="https://styled-system.com/api/">styled-system</a>.
  </Flexbox>
);
