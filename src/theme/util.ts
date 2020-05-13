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
};

export type ColorType = BaseColor;
