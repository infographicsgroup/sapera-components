import { ColorProps, TypographyProps, VariantArgs } from "styled-system";

/**
 * TextProps
 */
type TextProps = VariantArgs &
  ColorProps &
  TypographyProps & {
    variant: TextVariant;
  };

/**
 * TextVariant
 */
type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitleLarge"
  | "subtitleNormal"
  | "paragraphLarge"
  | "paragraphNormal"
  | "button"
  | "link"
  | "label";

export { TextProps, TextVariant };
