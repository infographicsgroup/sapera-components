import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Color } from "../../theme/util";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
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
  size?: BUTTON_SIZES;
  type?: "button" | "reset" | "submit";
  buttonVariety?: BUTTON_VAREITY;
  isSecondary?: boolean;
  value?: string;
  onClick?: () => void;
}

/**
 * Button
 */

enum BUTTON_VAREITY {
  TEXT = "text",
  TEXT_WITH_ICON = "textWithIcon",
  ICON = "icon",
}

enum BUTTON_SIZES {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

// TODO: refer to the BUTTON_SIZES enum here (?)
const BUTTON_HEIGHTS = {
  large: 56,
  medium: 50,
  small: 44,
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* //TODO I know I'm not using the TS enum right here (the TS error: Type 'undefined' cannot be used as an index type.) but not sure about the right way */
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
    p.buttonVariety === BUTTON_VAREITY.ICON &&
    css`
      border-radius: 50%;
      width: ${BUTTON_HEIGHTS[p.size]}px;
      min-width: auto;
      padding: 0;
    `};

  ${(p) =>
    p.buttonVariety === BUTTON_VAREITY.TEXT_WITH_ICON &&
    css`
      padding: 0 30px;
      :nth-child(2) {
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
  ariaLabel,
  onClick,
  name,
  tabIndex,
  type = "button",
  buttonVariety = BUTTON_VAREITY.TEXT,
  size = BUTTON_SIZES.LARGE,
  isSecondary = false,
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute

  // only Icon buttons need aria-label, since there is no text. Aria-labeled-by won't work in this case since is must refer to an id of anotther element on the page which acts instead as a buttton label. However in our case thet label will either be inside of the uton (default) or in aria-label for icon buttons:
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
