import { BreakpointSize, Color } from "./util";
import { create } from "@storybook/theming/create";

class BreakpointsTypes<T> extends Array<T> {
  get xxs(): T {
    return this[0];
  }

  get xs(): T {
    return this[1];
  }

  get sm(): T {
    return this[2];
  }

  get md(): T {
    return this[3];
  }

  get lg(): T {
    return this[4];
  }

  get xl(): T {
    return this[5];
  }
}

const breakpoints = new BreakpointsTypes(
  `${BreakpointSize.xxs}`, // zero value does not need unit
  `${BreakpointSize.xs}px`,
  `${BreakpointSize.sm}px`,
  `${BreakpointSize.md}px`,
  `${BreakpointSize.lg}px`,
  `${BreakpointSize.xl}px`,
);

export default create({
  /*
  Space theme
  https://styled-system.com/demo
  We use custom spacing values based on the 8-Point Grid Design Principal
  https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632
  example: https://www.ibm.com/standards/web/elements/grid.html
  */
  space: [0, 8, 16, 24, 32, 40, 64, 86, 104, 120],
  borders: {
    // 1px sometimes weren't showing up on Chrome- 'thin' is a fix
    // https://muffinman.io/fix-for-chrome-not-rendering-borders/
    primary: `thin solid ${Color.Primary}`,
    transparent: "thin solid transparent",
  },
  breakpoints,
});
