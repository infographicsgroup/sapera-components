import styled, { css } from "styled-components";
import { Color } from "../../theme/util";
import { LabelContainerProps, StyledInputProps, StyledLabelProps } from "./Input.props";
import { Row } from "../../styled/Row";

const ERROR_TEXT_HEIGHT = 22;

/**
 * <StyledLabel />
 */
const StyledLabel = styled.label<StyledLabelProps>`
  padding: 16px 5px 16px 0;
  font-family: sans-serif;
  font-size: 17px;
  color: ${Color.TextPrimary};
  z-index: 1;

  ${(p) =>
    p.hasError &&
    css`
      color: ${Color.ErrorRed};
    `}
  /* TODO remove 'all', animate only 'fontsize' and 'top'*/
    transition: font-size 0.3s ease;
`;

/**
 * <LabelContainer />
 */
const LabelContainer = styled.div<LabelContainerProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  pointer-events: none;
  padding-left: 16px;
  z-index: 6;
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};

  ${(props) =>
    props.hasFocus &&
    css`
      top: ${(p: { size: number }) => `-${p.size / 4 - 3}px`};
      height: 16px;
      padding-left: 5px;
      margin-left: 11px;
      background: ${Color.BackgroundMain};

      ${StyledLabel} {
        padding-top: 0;
        padding-left: 0;
        padding-bottom: 0;
        font-size: 14px;
      }

      svg {
        background: ${Color.BackgroundMain};
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
  color: ${Color.ErrorRed};
`;

/**
 * <StyledInput />
 */
const StyledInput = styled.input<StyledInputProps>`
  position: relative;
  height: ${(p) => `${p.size}px`};
  width: 100%;
  padding: 16px;
  font-size: 17px;
  background: ${Color.BackgroundMain};
  border: 2px solid ${Color.Primary};
  border-radius: 7px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};

  :disabled {
    border: 2px solid ${Color.BorderDisabled};
    background: ${Color.BackgroundDisabled};
  }
`;

/**
 * <IconContainer />
 */
const IconContainer = styled(Row)<{ disabled?: boolean }>`
  ${(p) =>
    p.disabled &&
    css`
      svg * {
        fill: ${Color.DisabledGrey};
      }
    `}
`;

export { StyledLabel, LabelContainer, ErrorText, StyledInput, IconContainer, ERROR_TEXT_HEIGHT };
