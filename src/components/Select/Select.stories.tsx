import React from "react";
import { SelectComponent } from "./Select";
import { OPTIONS_DATA } from "./dummyData";

export default {
  title: "Select",
  component: SelectComponent,
};

export const Default: React.FunctionComponent = () => {
  return (
    <div>
      <div>
        <SelectComponent options={OPTIONS_DATA} />
      </div>
      <br></br>
      <div>
        <SelectComponent options={OPTIONS_DATA} size="medium" />
      </div>
    </div>
  );
};
