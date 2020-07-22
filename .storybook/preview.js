import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import themeDecorator from "./themeDecorator";

addDecorator(withInfo);
addDecorator(themeDecorator);
