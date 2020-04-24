import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Color } from "../../theme/util";

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
  tabIndex?: string;
  size?: "large" | "medium" | "small";
  type?: "button" | "reset" | "submit";
  buttonVariety?: "text" | "textWithIcon" | "icon";
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
  height: ${(p) => BUTTON_HEIGHTS[p.size] + "px"};
  border-radius: 28px;
  color: ${Color.TextInverted};
  background: ${Color.Primary};
  border: none;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;
  padding: 0 60px;
  cursor: ${(p) => !p.disabled && "pointer"};

  svg,
  path {
    fill: ${Color.TextInverted};
  }

  ${(p) =>
    p.isSecondary &&
    css`
      color: ${Color.Primary};
      background: ${Color.BackgroundMain};
      border: 1.25px solid ${Color.Primary};
      svg,
      path {
        fill: ${Color.Primary};
      }
    `}

  ${(p) =>
    p.buttonVariety === "icon" &&
    css`
      border-radius: 50%;
      width: ${BUTTON_HEIGHTS[p.size]}px;
      min-width: auto;
      padding: 0;
    `};

  ${(p) =>
    p.buttonVariety === "textWithIcon" &&
    css`
      padding: 0 30px;
      /* This will only work for both buttons with text first and images first if text is wrapped in an html tag within the button */
      * {
        :first-child {
          padding-right: 20px;
        }
      }
    `};
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
  buttonVariety = "text",
  size = "large",
  isSecondary = false,
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute

  // only Icon buttons will use aria-label, since others have descriptive text. Aria-labeled-by won't work here since it must refer to an id of another element on the page instead of the buttton text
  // https://dequeuniversity.com/rules/axe/3.5/button-name?application=axeAPI

  return (
    <StyledButton
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel || undefined}
      aria-pressed={ariaPressed}
      autoFocus={autoFocus}
      buttonVariety={buttonVariety}
      className={className}
      disabled={disabled}
      isSecondary={isSecondary}
      name={name}
      size={size}
      tab-index={tabIndex}
      type={type}
      value={value}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
