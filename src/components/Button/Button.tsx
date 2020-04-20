import React, { FC } from "react";
import styled from "styled-components";
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  background,
  border,
  color,
  flexbox,
  layout,
  shadow,
  borderRadius,
  width,
  height,
  space,
  typography,
} from "styled-system";
import { Color, ColorType } from "../../theme/util";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface ButtonProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  isSecondary?: boolean;
  buttonStyle?: "text" | "textWithIcon" | "icon";
  size?: "small" | "medium" | "large";
  ariaExpanded?: boolean | undefined;
  ariaPressed?: boolean | "mixed" | undefined;
  autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  role: string;
  tabIndex?: string;
  type?: "button" | "reset" | "submit";
  value?: string;
  onClick?: () => void;
  bg?: ColorType;
}

/**
 * Button
 */

const StyledButton = styled.button<FlexboxProps>(
  {
    display: "flex",
  },
  flexbox,
  typography,
  borderRadius,
  space,
  layout,
  height,
  width,
  color,
  background,
  border,
  shadow,
);

const buttonHeights = {
  large: 56,
  medium: 50,
  small: 44,
};

export const Button: FC<ButtonProps> = ({
  ariaExpanded,
  ariaPressed,
  autoFocus,
  children,
  className,
  disabled = false,
  onClick,
  name,
  role,
  tabIndex,
  type = "button",
  buttonStyle = "text",
  size = "large",
  isSecondary = false,
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  const hasTextLabel = typeof children === "string";

  return (
    <StyledButton
      alignItems={"center"}
      aria-expanded={ariaExpanded}
      aria-label={!hasTextLabel ? role : undefined}
      aria-labelledby={hasTextLabel ? role : undefined}
      aria-pressed={ariaPressed}
      autoFocus={autoFocus}
      bg={isSecondary ? Color.BackgroundMain : Color.Primary}
      border={isSecondary ? `1.25px solid ${Color.Primary}` : "none"}
      borderRadius={buttonStyle === "icon" ? "50%" : 28}
      buttonStyle={buttonStyle}
      className={className}
      color={isSecondary ? Color.Primary : Color.TextInverted}
      disabled={disabled}
      fontSize={16}
      height={buttonHeights[size]}
      isSecondary={isSecondary}
      justifyContent={"center"}
      minWidth={buttonStyle === "icon" ? buttonHeights[size] : 190}
      name={name}
      role={role}
      size={size}
      tab-index={tabIndex}
      type={type}
      value={value}
      font
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
