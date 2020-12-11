import React from "react";
import { colors } from "@sc-styles";
import { RadioButtonProps } from "./RadioButton.props";
import { ButtonWrapper } from "./RadioButton.style";

/**
 * Radio Button
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  className,
  name,
  onClick,
  disabled = false,
  checked,
  color = colors.primary,
  value,
}) => (
  <ButtonWrapper className={className} color={color} disabled={disabled}>
    <input
      aria-checked={checked}
      aria-label={name}
      checked={checked}
      disabled={disabled}
      id={`radio-button-${value}`}
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

export { RadioButton };
