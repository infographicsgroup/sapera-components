import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Color, ColorType } from "../../theme/util";

// https://www.w3schools.com/tags/tag_button.asp
export interface ButtonProps {
  ariaExpanded?: boolean | undefined;
  ariaPressed?: boolean | "mixed" | undefined;
  ariaLabel?: string | undefined;
  autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  bg?: string | ColorType | undefined;
  iconFirst?: boolean;
  tabIndex?: string;
  size?: "large" | "medium" | "small";
  type?: "button" | "reset" | "submit";
  icon?: React.ReactNode;
  isSecondary?: boolean;
  value?: string;
  onClick?: () => void;
}

/**
 * Button
 */

const BUTTON_HEIGHTS = {
  large: 56,
  medium: 50,
  small: 44,
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 190px;
  height: ${(p) => (p.size ? BUTTON_HEIGHTS[p.size] + "px" : BUTTON_HEIGHTS.large + "px")};
  border-radius: 28px;
  color: ${Color.TextInverted};
  background: ${(p) => p.bg};
  border: none;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;
  padding: 0 20px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};

  svg {
    padding: 0 0 0 10px;
  }

  svg,
  path {
    fill: ${Color.TextInverted};
  }

  ${(p) =>
    p.isSecondary &&
    css`
      color: ${Color.Primary};
      background: ${(p) => p.bg};
      border: 1.25px solid ${Color.Primary};
      svg,
      path {
        fill: ${Color.Primary};
      }
    `}

  ${(p) =>
    p.iconFirst &&
    css`
      flex-direction: row-reverse;
      svg {
        padding: 0 10px 0 0;
      }
    `}
`;

export const Button: FC<ButtonProps> = ({
  ariaExpanded,
  ariaPressed,
  autoFocus,
  children,
  className,
  disabled = false,
  ariaLabel,
  onClick,
  name,
  tabIndex,
  type = "button",
  icon,
  size = "large",
  iconFirst = false,
  isSecondary = false,
  bg = isSecondary ? Color.BackgroundMain : Color.Primary,
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  return (
    <StyledButton
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel || undefined}
      aria-pressed={ariaPressed}
      autoFocus={autoFocus}
      bg={bg}
      className={className}
      disabled={disabled}
      iconFirst={iconFirst}
      isSecondary={isSecondary}
      name={name}
      size={size}
      tab-index={tabIndex}
      type={type}
      value={value}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && icon}
    </StyledButton>
  );
};
