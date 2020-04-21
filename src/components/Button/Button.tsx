import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Color } from "../../theme/util";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface ButtonProps {
  ariaExpanded?: boolean | undefined;
  ariaPressed?: boolean | "mixed" | undefined;
  autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  role: string;
  tabIndex?: string;
  size?: BUTTON_SIZES;
  type?: "button" | "reset" | "submit";
  buttonVariety?: "text" | "textWithIcon" | "icon";
  isSecondary?: boolean;
  value?: string;
  hasTextLabel?: boolean;
  onClick?: () => void;
}

/**
 * Button
 */

export enum BUTTON_SIZES {
  lg = "lg",
  md = "md",
  sm = "sm",
}

// TODO: use TypeScript here not sure how
const BUTTON_HEIGHTS = {
  lg: 56,
  md: 50,
  sm: 44,
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

  svg * {
    fill: ${Color.TextInverted};
  }

  ${(p) =>
    p.isSecondary &&
    css`
      color: ${Color.Primary};
      background: ${Color.BackgroundMain};
      border: 1.25px solid ${Color.Primary};
      svg * {
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
      img,
      svg {
        padding-right: 20px;
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
  onClick,
  name,
  role,
  tabIndex,
  type = "button",
  buttonVariety = "text",
  size = "lg",
  isSecondary = false,
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute

  // TODO: this doesn't work if text is wrapped or if there is a text + icon
  const hasTextLabel = typeof children === "string";

  console.log("value", value);
  console.log("children", children);

  return (
    <StyledButton
      aria-expanded={ariaExpanded}
      aria-label={!hasTextLabel ? role : undefined}
      aria-labelledby={hasTextLabel ? role : undefined}
      aria-pressed={ariaPressed}
      autoFocus={autoFocus}
      buttonVariety={buttonVariety}
      className={className}
      disabled={disabled}
      hasTextLabel={hasTextLabel}
      isSecondary={isSecondary}
      name={name}
      role={role}
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
