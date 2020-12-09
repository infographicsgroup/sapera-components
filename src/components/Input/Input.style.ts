import styled, { css } from "styled-components";
import { colors } from "@styles";
import { LabelContainerProps, StyledInputProps, StyledLabelProps } from "./Input.props";
import { Row } from "@styled";

const ERROR_TEXT_HEIGHT = 22;

/**
 * <StyledLabel />
 */
const StyledLabel = styled.label<StyledLabelProps>`
  font-family: sans-serif;
  z-index: 1;
  padding: 16px 5px 16px 0;
  font-size: 17px;
  color: ${colors.text.primary};

  ${({ hasError }) =>
    hasError &&
    css`
      color: ${colors.error};
    `}
  /* TODO remove 'all', animate only 'fontsize' and 'top'*/
    transition: font-size 0.3s ease;
`;

/**
 * <LabelContainer />
 */
const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  flex-direction: row;
  pointer-events: none;
  position: absolute;
  align-items: center;
  z-index: 6;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  padding-left: 16px;

  ${(props) =>
    props.hasFocus &&
    css`
      top: ${(p: { size: number }) => `-${p.size / 4 - 3}px`};
      padding-left: 5px;
      margin-left: 11px;
      background: ${colors.background.main};
      height: 16px;

      ${StyledLabel} {
        font-size: 14px;
        padding-left: 0;
        padding-top: 0;
        padding-bottom: 0;
      }

      svg {
        background: ${colors.background.main};
        transform: scale(0.85);
        transition: transform 0.3s ease;
      }
    `};
`;

/**
 * <ErrorText />
 */
const ErrorText = styled.h1`
  position: absolute;
  bottom: 0;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: ${colors.error};
`;

/**
 * <StyledInput />
 */
const StyledInput = styled.input<StyledInputProps>`
  position: relative;
  height: ${({ size }) => `${size}px`};
  width: 100%;
  padding: 16px;
  border: 2px solid ${colors.primary};
  border-radius: 7px;
  background: ${colors.background.main};
  font-size: 17px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  :disabled {
    border: 2px solid ${colors.border.disabled};
    background: ${colors.background.disabled};
  }
`;

/**
 * <IconContainer />
 */
const IconContainer = styled(Row)<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled &&
    css`
      svg * {
        fill: ${colors.disabled};
      }
    `}
`;

export { StyledLabel, LabelContainer, ErrorText, StyledInput, IconContainer, ERROR_TEXT_HEIGHT };
