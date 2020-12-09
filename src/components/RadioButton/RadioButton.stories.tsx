import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { RadioButton } from "./RadioButton";
import { withA11y } from "@storybook/addon-a11y";
import { colors } from "../../styles/colors";

export default {
  title: "RadioButton",
  component: RadioButton,
  decorators: [withA11y],
};

export const Default: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState("green");

  const onClick = (name: string) => {
    setSelectedOption(name);
    action("clicked");
  };

  return (
    <>
      <RadioButton
        checked={selectedOption === "red"}
        color={colors.secondary.red}
        name="color"
        value="red"
        onClick={() => onClick("red")}
      >
        Red
      </RadioButton>
      <RadioButton
        checked={selectedOption === "yellow"}
        color={colors.secondary.yellow}
        name="color"
        value="yellow"
        onClick={() => onClick("yellow")}
      >
        Yellow
      </RadioButton>
      <RadioButton
        checked={selectedOption === "green"}
        color="green"
        name="color"
        value="green"
        onClick={() => onClick("green")}
      >
        Green
      </RadioButton>
      <RadioButton
        checked={selectedOption === "pink"}
        color="pink"
        name="color"
        value="pink"
        disabled
        onClick={() => onClick("pink")}
      >
        Pink (Disabled)
      </RadioButton>
    </>
  );
};
