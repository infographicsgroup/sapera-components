import React, { FC } from "react";
import styled from "styled-components";
import { TickIcon } from "../Icon/Icons";
import { Color } from "../../theme/util";

const LABEL_SIZE = 24;
const CHECKMARK_CLASSNAME = "checkmark";

const LabelStyled = styled.label`
  position: relative;
  font-family: monospace;
  padding-left: ${LABEL_SIZE + 10}px;
  cursor: pointer;
`;

/* Hide the browser's default checkbox */
const InputStyled = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

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
  id: string;
  onClick?: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  children,
  className,
  onClick,
  checked,
  disabled = false,
}: CheckboxProps) => {
  return (
    <LabelStyled className={className} htmlFor={id} onClick={onClick}>
      <InputStyled checked={checked} disabled={disabled} id={id} type="checkbox" />
      <CheckmarkStyled className={CHECKMARK_CLASSNAME}>
        <TickIcon />
      </CheckmarkStyled>
      {children}
    </LabelStyled>
  );
};
