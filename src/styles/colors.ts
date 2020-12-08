import chroma from "chroma-js";

/**
 * Unique names generated from http://chir.ag/projects/name-that-color
 */
enum Color {
  Amethyst = "#B566CC",
  EcruWhite = "#F8F6EC",
  Coral = "#FF884D",
  Dandelion = "#FFDD61",
  DodgerBlue = "#4DA3FF",
  Emerald = "#56D680",
  GableGreen = "#19323C",
  Persimmon = "#FF5C57",
  RobinsEggBlue = "#00C7BE",
  Pewter = "#949F9F",
  White = "#FFFFFF",
  Black = "#000000",
  Valencia = "#D43A3A",
}

/**
 * Get rgba
 */
const rgba = (color: Color, alpha: number) => chroma(color).alpha(alpha).css();

/**
 * App colors
 */
const colors = {
  primary: Color.GableGreen,
  inverted: Color.White,
  error: Color.Valencia,
  disabled: Color.Pewter,

  secondary: {
    blue: Color.DodgerBlue,
    green: Color.Emerald,
    orange: Color.Coral,
    purple: Color.Amethyst,
    red: Color.Persimmon,
    teal: Color.RobinsEggBlue,
    yellow: Color.Dandelion,
  },

  text: {
    primary: Color.GableGreen,
    inverted: Color.EcruWhite,
    disabled: rgba(Color.Black, 0.6),
  },

  background: {
    main: Color.EcruWhite,
    disabled: rgba(Color.Black, 0.1),
  },

  border: {
    disabled: rgba(Color.Black, 0.1),
  },
};

export { colors, rgba, Color };
