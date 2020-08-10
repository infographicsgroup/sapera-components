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

export interface SpacerProps extends SpaceProps, LayoutProps {}

export interface GridComponentProps extends GridProps, LayoutProps, PositionProps {}
