import React, { FC } from "react";
import styled, { css } from "styled-components";

const RADIO_BUTTON_WIDTH = 24;
// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface RadioButtonProps {
  // ariaPressed?: boolean | "mixed" | undefined;
  // autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  name: string;
  value: string;
  // name?: string;
  // tabIndex?: string;
  onClick?: () => void;
}
const ButtonWrapper = styled.div<RadioButtonProps>`
  position: relative;
  position: relative;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.176;
  min-height: ${RADIO_BUTTON_WIDTH}px;
  margin: 1rem 0;

  input {
    margin-right: ${RADIO_BUTTON_WIDTH}px;
    margin-left: 0;
  }

  input[type="radio"] {
    opacity: 0;

    + label {
      position: relative;
      display: inline-block;
      cursor: ${(p) => (p.disabled ? "default" : "pointer")};

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        left: -${RADIO_BUTTON_WIDTH + 12}px;
        border-radius: 50%;
        border: 2px solid black;
        width: ${RADIO_BUTTON_WIDTH}px;
        height: ${RADIO_BUTTON_WIDTH}px;
        top: -3px;
      }

      &::after {
        content: "";
        position: absolute;
        display: inline-block;
        left: -20px;
        top: 4px;
        border-radius: 50%;
        width: ${RADIO_BUTTON_WIDTH / 2}px;
        height: ${RADIO_BUTTON_WIDTH / 2}px;
      }
    }

    ${(p) =>
      p.checked &&
      css`
        + label::after {
          background: red;
        }
      `}
    &:checked {
      + label::after {
        background: red;
      }
    }

    &:focus {
      + label::before {
        box-shadow: 0 0px 8px red;
      }
    }

    label {
      margin-left: 20px;
    }
  }

  fieldset {
    border: none;
  }
`;

/**
 * Button
 */
export const RadioButton: FC<RadioButtonProps> = ({
  // ariaExpanded,
  // ariaPressed,
  // autoFocus,
  children,
  // className,
  name,
  onClick,
  disabled = false,
  checked = false,
  // name,
  // role,
  // tabIndex,
  // type = "button",
  value,
}: RadioButtonProps) => {
  return (
    <ButtonWrapper checked={checked} disabled={disabled}>
      {/* // aria-label for form elements */}
      {/* https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI */}

      {/* https://webaim.org/techniques/forms/advanced#arialabel */}
      <input
        aria-checked={checked}
        aria-label={name}
        disabled={disabled}
        name={name}
        type="radio"
        // aria-pressed={ariaPressed}
        // autoFocus={autoFocus}
        // className={className}
        value={value}
        // checked={}
        // name={name}
        // role={role}
        // tab-index={tabIndex}
        // type={type}
        // value={value}
        // onClick={disabled ? () => null : onClick}
      />
      <label htmlFor={value} onClick={disabled ? () => null : onClick}>
        {children}
      </label>
    </ButtonWrapper>
  );
};
