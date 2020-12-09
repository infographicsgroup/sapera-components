import { colors } from "./colors";
import { create } from "@storybook/theming";
import { Breakpoint } from "./breakpoints";

/**
 * Theme customs
 */
const configuration = {
  /*
    Space theme

    https://styled-system.com/demo

    We use custom spacing values based on the 8-Point Grid Design Principal

    https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632

    example:

    https://www.ibm.com/standards/web/elements/grid.html
  */
  space: [0, 8, 16, 24, 32, 40, 64, 86, 104, 120],

  borders: {
    // 1px sometimes weren't showing up on Chrome- 'thin' is a fix

    // https://muffinman.io/fix-for-chrome-not-rendering-borders/

    primary: `thin solid ${colors.primary}`,

    transparent: "thin solid transparent",
  },

  breakpoints: [Breakpoint.xxs, Breakpoint.xs, Breakpoint.sm, Breakpoint.md, Breakpoint.lg, Breakpoint.xl],
};

/**
 * Styled system theme
 */
const theme = create({ base: "light" }, configuration);

export { theme };
