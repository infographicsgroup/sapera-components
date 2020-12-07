import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import { Color } from "../../theme/util";
import { Row, Box, Column } from "../../styled";
import { ErrorIcon, CheckIcon } from "../Icon/Icons";
import { InputProps, StyledLabelProps, StyledInputProps, LabelContainerProps } from "./InputTypes";

const ERROR_TEXT_HEIGHT = 22;

const StyledLabel = styled.label<StyledLabelProps>`
  font-family: sans-serif;
  z-index: 1;
  padding: 16px 5px 16px 0;
  font-size: 17px;
  color: ${Color.TextPrimary};

  ${(p) =>
    p.hasError &&
    css`
      color: ${Color.ErrorRed};
    `}
  /* TODO remove 'all', animate only 'fontsize' and 'top'*/
    transition: font-size 0.3s ease;
`;

const LabelContainer = styled.div<LabelContainerProps>`
  display: flex;
  flex-direction: row;
  pointer-events: none;
  position: absolute;
  align-items: center;
  z-index: 6;
  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};
  padding-left: 16px;

  ${(props) =>
    props.hasFocus &&
    css`
      top: ${(p: { size: number }) => `-${p.size / 4 - 3}px`};
      padding-left: 5px;
      margin-left: 11px;
      background: ${Color.BackgroundMain};
      height: 16px;

      ${StyledLabel} {
        font-size: 14px;
        padding-left: 0;
        padding-top: 0;
        padding-bottom: 0;
      }

      svg {
        background: ${Color.BackgroundMain};
        transform: scale(0.85);
        transition: transform 0.3s ease;
      }
    `};
`;

const ErrorText = styled.h1`
  position: absolute;
  bottom: 0;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: ${Color.ErrorRed};
`;

const StyledInput = styled.input<StyledInputProps>`
  position: relative;
  height: ${(p) => `${p.size}px`};
  width: 100%;
  padding: 16px;
  border: 2px solid ${Color.Primary};
  border-radius: 7px;
  background: ${Color.BackgroundMain};
  font-size: 17px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};

  :disabled {
    border: 2px solid ${Color.BorderDisabled};
    background: ${Color.BackgroundDisabled};
  }
`;

const IconContainer = styled(Row)<{ disabled?: boolean }>`
  ${(p) =>
    p.disabled &&
    css`
      svg * {
        fill: ${Color.DisabledGrey};
      }
    `}
`;

// Pass accurate input type
// https://www.w3.org/WAI/tutorials/forms/validation/#validating-common-input

export const Input: FC<InputProps> = ({
  className,
  disabled = false,
  label,
  onInputChange,
  name,
  tabIndex,
  type = "text",
  required,
  maxLength,
  pattern,
  size = "large",
  width = 300,
  icon,
  hasError = false,
  isValid = false,
  errorText = "Input not valid",
  value,
}: InputProps) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  // TODO - don't use disabled, similar to Button.tsx
  // 'disabled' removes element for screen readers, so for a11y it's best to visually make them disbaled and use aria-diabled instead - // aria-disabled={disabled}
  // https://a11y-101.com/development/aria-disabled

  const SIZE_NUMBER = size === "medium" ? 50 : 56;

  return (
    <Column className={className} minHeight={SIZE_NUMBER + ERROR_TEXT_HEIGHT} position="relative" width={width}>
      <LabelContainer disabled={disabled} hasFocus={hasFocus || value} size={SIZE_NUMBER}>
        <IconContainer alignItems="center" disabled={disabled}>
          {icon && <Box mr="8px">{icon}</Box>}
          <StyledLabel disabled={disabled} hasError={hasError} hasFocus={hasFocus || value} htmlFor={name}>
            {label}
            {required && "*"}
          </StyledLabel>
        </IconContainer>
      </LabelContainer>
      <StyledInput
        aria-invalid={hasError}
        aria-required={required}
        autoFocus={hasError}
        disabled={disabled}
        id={name}
        maxLength={maxLength}
        name={name}
        pattern={pattern}
        required={required}
        size={SIZE_NUMBER}
        tab-index={tabIndex}
        type={type}
        value={value}
        onBlur={() => setHasFocus(false)}
        onChange={(e) => onInputChange(e.target.value)}
        onFocus={() => setHasFocus(true)}
      />
      {hasError && (
        <Row alignItems="center" height={50} mr={5} position="absolute" right={0}>
          <ErrorIcon fill={Color.ErrorRed} height={25} width={25} />
        </Row>
      )}
      {isValid && (
        <Row alignItems="center" height={50} mr={5} position="absolute" right={0} >
          <CheckIcon fill={Color.SecondaryGreen} height={25} width={25} />
        </Row>
      )}
      {hasError && (
        <>
          <ErrorText>{errorText}</ErrorText>
        </>
      )}
    </Column>
  );
};
