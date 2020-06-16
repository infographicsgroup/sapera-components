import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  GridProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  VariantArgs,
} from "styled-system";

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface ColumnProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    GridProps {}

export interface HeadingProps extends VariantArgs, ColorProps {
  size: string;
}

export interface TextProps extends VariantArgs, ColorProps, TypographyProps {
  size: string;
}

export interface SpacerProps extends SpaceProps, LayoutProps {}

export type BackgroundImageProps = BackgroundProps;

export interface GridComponentProps extends GridProps, LayoutProps, PositionProps {}
