import React from "react";
import { TickIcon } from "../Icon/Icons";
import { Column } from "../../styled";
import { CheckboxProps } from "./Checkbox.props";
import { CHECKMARK_CLASSNAME, CheckmarkStyled, ErrorText, InputStyled, LabelStyled } from "./Checkbox.style";

/**
 * <Checkbox />
 */
const Checkbox: React.FC<CheckboxProps> = ({
  id,
  children,
  className,
  onChange,
  checked,
  name,
  value,
  hasError = false,
  errorText = "Input not valid",
  required,
  disabled = false,
}) => (
  <Column className={className}>
    <LabelStyled htmlFor={id}>
      <InputStyled
        aria-invalid={hasError}
        aria-required={required}
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        required={required}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      <CheckmarkStyled className={CHECKMARK_CLASSNAME}>
        <TickIcon />
      </CheckmarkStyled>
      {children}
    </LabelStyled>
    {hasError && <ErrorText>{errorText}</ErrorText>}
  </Column>
);

export { Checkbox };
