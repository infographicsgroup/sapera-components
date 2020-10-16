import React, { FC } from "react";
import styled from "styled-components";
import { TickIcon } from "../Icon/Icons";
import { Column } from "../../theme/custom-styled-components";
import { Color } from "../../theme/util";

const LABEL_SIZE = 24;
const CHECKMARK_CLASSNAME = "checkmark";

const LabelStyled = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: ${LABEL_SIZE + 16}px;
  font-family: monospace;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

const ErrorText = styled.h1`
  margin-top: 16px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: ${Color.ErrorRed};
`;

/* Hide the browser's default checkbox */
const InputStyled = styled.input`
  position: absolute;
  z-index: 2;
  top: -5px;
  left: -5px;
  opacity: 0;
  width: ${LABEL_SIZE + 3}px;
  height: ${LABEL_SIZE + 3}px;
  cursor: pointer;

  &:checked ~ .${CHECKMARK_CLASSNAME} {
    background-color: ${Color.Primary};
    svg {
      opacity: 1;
    }
  }

  &:disabled ~ .${CHECKMARK_CLASSNAME} {
    border: 2px solid ${Color.BorderDisabled};
  }
`;

const CheckmarkStyled = styled.span`
  position: absolute;
  left: 0;
  top: -4px;
  display: flex;
  align-items: center;
  width: ${LABEL_SIZE}px;
  height: ${LABEL_SIZE}px;
  z-index: 1;
  background-color: ${Color.BackgroundMain};
  border: 2px solid ${Color.Primary};
  border-radius: 5px;

  svg {
    width: 100%;
    opacity: 0;
  }
`;

export interface CheckboxProps {
  className?: string;
  children: string | React.ReactNode | Element;
  checked?: boolean;
  disabled?: boolean;
  id: string;
  name: string;
  value: string;
  hasError?: boolean;
  required?: boolean;
  errorText?: string;
  onChange: (value: any) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
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
}: CheckboxProps) => {
  return (
    <Column>
      <LabelStyled className={className} htmlFor={id}>
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
};
