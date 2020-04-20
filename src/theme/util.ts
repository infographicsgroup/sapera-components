// NOTE: temporary internal theme file. Will use CSS Utility repo later.

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
  GableGreen = "#18333C",
  Persimmon = "#FF5C57",
  Turquoise = "#30C7BE",
}

/**
 * Types of Semantic Colors.
 * @enum {string}
 */
export enum Color {
  Primary = BaseColor.GableGreen,

  SecondaryBlue = BaseColor.DodgerBlue,
  SecondaryGreen = BaseColor.Emerald,
  SecondaryOrange = BaseColor.Coral,
  SecondaryPurple = BaseColor.Amethyst,
  SecondaryRed = BaseColor.Persimmon,
  SecondaryTeal = BaseColor.Turquoise,
  SecondaryYellow = BaseColor.Dandelion,

  TextPrimary = BaseColor.GableGreen,
  TextInverted = BaseColor.Bianca,

  BackgroundMain = BaseColor.Bianca,
}

/**
 * Types of Sizes
 * @enum {number}
 */
export enum Size {
  Wrapper = 1482,
  HeaderHeight = 80,
}

/**
 * Types of Sizes
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

// TODO
// z-indexes
// fonts

export type ColorType = Color;
export type SizeType = Size;
