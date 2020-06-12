// NOTE: temporary internal theme file. Will use CSS Utility repo later.
import chroma from "chroma-js";
import styledBreakpoint from "@humblebee/styled-components-breakpoint";

export const lightenColor = (color: any, alpha: number): chroma.Color => chroma(color).alpha(alpha);

/**
 * Types of Base Colors.
 * @enum {string}
 * Unique names generated from http://chir.ag/projects/name-that-color
 */
enum BaseColor {
  Amethyst = "#B566CC",
  Bianca = "#FCFAF3",
  Coral = "#FF884D",
  Dandelion = "#FFDD61",
  DodgerBlue = "#4DA3FF",
  Emerald = "#56D680",
  GableGreen = "#19323C",
  Persimmon = "#FF5C57",
  Turquoise = "#30C7BE",
  White = "#ffff",
}

/**
 * Types of Semantic Colors.
 * @enum {string}
 */
export const Color = {
  Primary: BaseColor.GableGreen,

  SecondaryBlue: BaseColor.DodgerBlue,
  SecondaryGreen: BaseColor.Emerald,
  SecondaryOrange: BaseColor.Coral,
  SecondaryPurple: BaseColor.Amethyst,
  SecondaryRed: BaseColor.Persimmon,
  SecondaryTeal: BaseColor.Turquoise,
  SecondaryYellow: BaseColor.Dandelion,

  TextPrimary: BaseColor.GableGreen,
  TextInverted: BaseColor.White,

  BackgroundMain: BaseColor.Bianca,
  BorderGrey: lightenColor(BaseColor.GableGreen, 0.5).css(),
};

export type ColorType = BaseColor;

/**
 * Types of breakpoint sizes
 * @enum {number}
 */
export enum BreakpointSize {
  xxs = 0,
  xs = 320,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200,
}

// For non styled-system usage
export const breakpoint = styledBreakpoint({
  xxs: BreakpointSize.xxs,
  xs: BreakpointSize.xs,
  sm: BreakpointSize.sm,
  md: BreakpointSize.md,
  lg: BreakpointSize.lg,
  xl: BreakpointSize.xl,
});
