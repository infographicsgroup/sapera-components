import React, { FC } from "react";
import styled from "styled-components";
import { Color, ColorType } from "../../theme/util";

const RADIO_BUTTON_WIDTH = 24;

export interface RadioButtonProps {
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  name: string;
  value: string;
  color?: string | ColorType;
  onClick?: () => void;
}
const ButtonWrapper = styled.div<{ color?: string; disabled?: boolean }>`
  position: relative;
  position: relative;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.176;
  min-height: ${RADIO_BUTTON_WIDTH}px;
  margin: 1rem 0;

  input {
    opacity: 0;
    visibility: visible;
    position: absolute;
    margin-left: 0;

    &:focus {
      + label::before {
        outline: rgb(59, 153, 252) auto 5px;
      }
    }

    + label {
      position: relative;
      display: flex;
      align-items: center;
      -webkit-box-orient: horizontal;

      cursor: ${(p) => (p.disabled ? "default" : "pointer")};

      &::before {
        content: "";
        margin-right: 15px;
        border-radius: 50%;
        border: 2px solid ${(p) => (p.disabled ? "#949F9F" : p.color)};
        width: ${RADIO_BUTTON_WIDTH}px;
        height: ${RADIO_BUTTON_WIDTH}px;
        box-sizing: border-box;
      }

      &::after {
        content: "";
        position: absolute;
        top: ${RADIO_BUTTON_WIDTH / 4}px;
        left: ${RADIO_BUTTON_WIDTH / 4}px;
        border-radius: 50%;
        width: ${RADIO_BUTTON_WIDTH / 2}px;
        height: ${RADIO_BUTTON_WIDTH / 2}px;
        box-sizing: border-box;
      }
    }

    &:checked {
      + label::after {
        background: ${(p) => p.color};
      }
    }

    label {
      margin-left: 20px;
    }
  }
`;

/**
 * Button
 */
export const RadioButton: FC<RadioButtonProps> = ({
  children,
  className,
  name,
  onClick,
  disabled = false,
  checked,
  color = Color.Primary,
  value,
}: RadioButtonProps) => {
  return (
    <ButtonWrapper className={className} color={color} disabled={disabled}>
      {/* // aria-label for form elements */}
      {/* https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI */}

      {/* https://webaim.org/techniques/forms/advanced#arialabel */}

      {/* // input checked property vs. attribute
      https://github.com/facebook/react/issues/6321 */}

      <input
        aria-checked={checked}
        aria-label={name}
        checked={checked}
        disabled={disabled}
        name={name}
        type="radio"
        value={value}
        onChange={onClick}
      />
      <label htmlFor={value} onClick={disabled ? () => null : onClick}>
        {children}
      </label>
    </ButtonWrapper>
  );
};
