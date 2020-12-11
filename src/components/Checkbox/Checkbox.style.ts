import styled from "styled-components";
import { colors } from "@sc-styles";

const LABEL_SIZE = 24;
const CHECKMARK_CLASSNAME = "checkmark";

/**
 * <LabelStyled />
 */
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

/**
 * <ErrorText />
 */
const ErrorText = styled.h1`
  margin-top: 8px;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: ${colors.error};
`;

/**
 * <InputStyled />
 * Hide the browser's default checkbox
 */
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
    background-color: ${colors.primary};
    svg {
      opacity: 1;
    }
  }

  &:disabled ~ .${CHECKMARK_CLASSNAME} {
    border: 2px solid ${colors.border.disabled};
  }
`;

/**
 * <CheckmarkStyled />
 */
const CheckmarkStyled = styled.span`
  position: absolute;
  left: 0;
  top: -4px;
  display: flex;
  align-items: center;
  width: ${LABEL_SIZE}px;
  height: ${LABEL_SIZE}px;
  z-index: 1;
  border: 2px solid ${colors.primary};
  border-radius: 5px;

  svg {
    width: 100%;
    opacity: 0;
  }
`;

export { LabelStyled, InputStyled, ErrorText, CheckmarkStyled, CHECKMARK_CLASSNAME };
