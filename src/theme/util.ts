// NOTE: temporary internal theme file. Will use CSS Utility repo later.
import chroma from "chroma-js";

export const lightenColor = (color: ColorType, alpha: number): chroma.Color => chroma(color).alpha(alpha);

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
  Pewter = "#949F9F",
  White = "#FFFFFF",
  Black = "#000000",
}

/**
 * Types of Semantic Colors.
 * @enum {string}
 */
export const Color = {
  Primary: BaseColor.GableGreen,
  Inverted: BaseColor.White,

  SecondaryBlue: BaseColor.DodgerBlue,
  SecondaryGreen: BaseColor.Emerald,
  SecondaryOrange: BaseColor.Coral,
  SecondaryPurple: BaseColor.Amethyst,
  SecondaryRed: BaseColor.Persimmon,
  SecondaryTeal: BaseColor.Turquoise,
  SecondaryYellow: BaseColor.Dandelion,

  TextPrimary: BaseColor.GableGreen,
  TextInverted: BaseColor.Bianca,
  TextDisabled: lightenColor(BaseColor.Black, 0.6).css(),

  BackgroundMain: BaseColor.Bianca,
  BackgroundDisabled: lightenColor(BaseColor.Black, 0.1).css(),

  DisabledGrey: BaseColor.Pewter,
  BorderGrey: lightenColor(BaseColor.GableGreen, 0.5).css(),
  BorderDisabled: lightenColor(BaseColor.Black, 0.1).css(),
};

export type ColorType = BaseColor;
