import React from "react";
import { action } from "@storybook/addon-actions";
import { Input } from "./Input";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Input",
  component: Input,
  decorators: [withA11y],
};

export const Inputs: React.FunctionComponent = () => (
  <form>
    <Input label={"First Name"} name="fname" value="red" required />
    <br />
    <br />
    <Input label={"Last Name"} name="lname" value="red" />
    <br />
    <br />
    <Input label={"Age"} name="age" type="number" value="red" required />
    <br />
    <br />
    {/* todo: use button component */}
    {/* <button type="submit">submit</button> */}
  </form>
);
