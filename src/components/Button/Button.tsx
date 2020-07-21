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
  width?: string;
}

interface StyledButtonProps extends ButtonProps {
  disabledUI?: boolean;
}

/**
 * Button
 */

const BUTTON_HEIGHTS = {
  large: 56,
  medium: 50,
  small: 44,
};

const BUTTON_PADDING = {
  large: "0 35",
  medium: "0 30",
  small: "0 25",
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: ${(p) => p.width};
  height: ${(p) => (p.size ? BUTTON_HEIGHTS[p.size] + "px" : BUTTON_HEIGHTS.large + "px")};
  padding: ${(p) => (p.size ? BUTTON_PADDING[p.size] + "px" : BUTTON_PADDING.large + "px")};
  border-radius: 28px;
  color: ${Color.TextInverted};
  background: ${(p) => (p.disabledUI ? Color.DisabledGrey : p.bg)};
  border: none;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;

  cursor: ${(p) => (p.disabledUI ? "default" : "pointer")};

  svg {
    margin: 0 0 0 10px;
  }

  svg,
  path {
    fill: ${Color.TextInverted};
  }

  ${(p) =>
    p.isSecondary &&
    css`
      color: ${Color.Primary};
      background: ${p.bg};
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
        margin: 0 10px 0 0;
      }
    `}
`;

export const ButtonComponent: FC<ButtonProps> = ({
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
  width = "auto",
  type = "button",
  icon,
  size = "large",
  iconFirst = false,
  isSecondary = false,
  bg = isSecondary ? "none" : Color.Primary,
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute

  // 'disabled' removes button for screen readers, so for a11y it's best to visually make them disbaled and use aria-diabled instead
  // https://a11y-101.com/development/aria-disabled

  return (
    <StyledButton
      as="button"
      aria-disabled={disabled}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel || undefined}
      aria-pressed={ariaPressed}
      autoFocus={autoFocus}
      bg={bg}
      className={className}
      disabledUI={disabled}
      iconFirst={iconFirst}
      isSecondary={isSecondary}
      name={name}
      size={size}
      tab-index={tabIndex}
      type={type}
      value={value}
      width={width}
      onClick={disabled ? () => null : onClick}
    >
      <span>{children}</span>
      {icon && icon}
    </StyledButton>
  );
};
