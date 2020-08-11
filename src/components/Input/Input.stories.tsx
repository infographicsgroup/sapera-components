import React from "react";
import { action } from "@storybook/addon-actions";
import { DownloadIcon } from "../Icon/Icons";
import { Input } from "./Input";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: "Input",
  component: Input,
  decorators: [withA11y],
};

const downloadIcon = <DownloadIcon height={25} width={25} />;

export const Inputs: React.FunctionComponent = () => (
  <form>
    <Input errorText={"there was an error"} label={"First Name"} name="fname" required />
    <br />
    <br />
    <Input iconRight={downloadIcon} label={"Last Name"} name="lname" />
    <br />
    <br />
    <Input icon={downloadIcon} iconRight={downloadIcon} label={"Age"} name="age" type="number" required />
    <br />
    <br />
    <Input icon={downloadIcon} label={"Color"} name="color" required />
    {/* todo: use button component */}
    {/* <button type="submit">submit</button> */}
  </form>
);
