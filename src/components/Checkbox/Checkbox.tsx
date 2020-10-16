import React, { FC } from "react";
import styled from "styled-components";
import { TickIcon } from "../Icon/Icons";
import { Color } from "../../theme/util";
import { Column } from "../../theme/custom-styled-components";

const LABEL_SIZE = 24;
const CHECKMARK_CLASSNAME = "checkmark";

const LabelStyled = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-family: monospace;
  padding-left: ${LABEL_SIZE + 10}px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

/* Hide the browser's default checkbox */
const InputStyled = styled.input`
  position: absolute;
  z-index: 2;
  // top: -5px;
  left: -2px;
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
  z-index: 1;
  top: 0;
  left: 0;
  width: ${LABEL_SIZE}px;
  height: ${LABEL_SIZE}px;
  display: flex;
  align-items: center;
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
  children: string | React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  name: string;
  value: string;
  id?: string;
  onChange: (value: any) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  children,
  className,
  onChange,
  checked,
  name,
  value,
  id,
  disabled = false,
}: CheckboxProps) => {
  return (
    <Column className={className}>
      <LabelStyled htmlFor={name}>
        <InputStyled
          checked={checked}
          disabled={disabled}
          id={id || name}
          name={name}
          type="checkbox"
          value={value}
          onChange={onChange}
        />
        <CheckmarkStyled className={CHECKMARK_CLASSNAME}>
          <TickIcon />
        </CheckmarkStyled>
        {children}
      </LabelStyled>
    </Column>
  );
};
