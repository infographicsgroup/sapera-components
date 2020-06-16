import React from "react";
import { SelectComponent } from "./Select";

export default {
  title: "Select",
  component: SelectComponent,
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Default: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <SelectComponent options={options} />
      </div>
      <br></br>
      <div>
        <SelectComponent options={options} size="medium" />
      </div>
    </div>
  );
};
