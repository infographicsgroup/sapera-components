import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import themeDecorator from "./themeDecorator";

addDecorator(withInfo);
addDecorator(themeDecorator);

export const parameters = {
  backgrounds: {
    default: "sapera",
    values: [
      { name: "white", value: "#ffffff" },
      { name: "sapera", value: "#f8f6ee" },
    ],
  },
};

addParameters(parameters);
