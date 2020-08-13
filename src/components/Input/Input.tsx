import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import { Color, ColorType } from "../../theme/util";
import { Row, Box, Spacer, Column } from "../../theme/custom-styled-components";
import { ErrorIcon } from "../Icon/Icons";

const INPUT_HEIGHT = 50;

// https://www.w3schools.com/tags/tag_input.asp
export interface InputProps {
  ariaPressed?: boolean | "mixed" | undefined;
  ariaLabel?: string | undefined;
  className?: string;
  placeholder?: string;
  type: "text" | "number" | "date" | "datetime-local" | "email" | "password" | "search" | "tel" | "url" | "week";
  required?: boolean;
  disabled?: boolean;
  name: string;
  value: string | number | undefined;
  label: string;
  bg?: string | ColorType | undefined;
  tabIndex?: string;
  maxLength?: number;
  pattern?: string;
  errorText?: string;
  icon?: React.ReactNode;
  hasError?: boolean;
  onInputChange: (value: any) => void;
}

interface LabelContainerProps extends InputProps {
  hasFocus: boolean;
}

const InputWrapper = styled(Column)``;

const StyledLabel = styled.label<{
  hasIcon?: string | number | true | undefined;
  disabled?: boolean;
  error?: boolean;
}>`
  font-family: sans-serif;
  z-index: 1;
  padding: 16px 5px 16px 0;
  font-size: 17px;
  color: ${(p) => (p.disabled ? Color.DisabledGrey : Color.TextPrimary)};

  ${(p) =>
    p.error &&
    css`
      color: ${Color.ErrorRed};
    `}
  /* TODO remove 'all', use 'top'*/
    transition: font-size 0.3s ease, position 0.3s ease;
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

  ${(p) =>
    p.hasFocus &&
    css`
      top: -${INPUT_HEIGHT / 4 - 3}px;
      padding-left: 5px;

      margin-left: 11px;
      background: ${Color.BackgroundMain};

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
  font-family: sans-serif;
  font-size: 17px;
  color: ${Color.ErrorRed};
  font-weight: normal;
`;

const StyledInput = styled.input<InputProps>`
  position: relative;
  height: ${INPUT_HEIGHT}px;
  width: 100%;
  padding: 16px;
  border: 2px solid ${Color.BorderGrey};
  border-radius: 7px;
  background: ${Color.BackgroundMain};
  font-size: 17px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};

  :disabled {
    border: 2px solid ${Color.DisabledGrey};
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
  icon,
  hasError = false,
  errorText = "Input not valid",
  bg = Color.Primary,
  value,
}: InputProps) => {
  const [hasFocus, setHasFocus] = useState<boolean>(true);

  // TODO - don't use disabled, similar to Button.tsx
  // 'disabled' removes button for screen readers, so for a11y it's best to visually make them disbaled and use aria-diabled instead - // aria-disabled={disabled}

  // https://a11y-101.com/development/aria-disabled

  const error = hasError && hasFocus;

  return (
    <InputWrapper position="relative">
      <LabelContainer disabled={disabled} hasFocus={hasFocus || value} hasIcon={icon || false}>
        <IconContainer alignItems="center" disabled={disabled}>
          {icon && <Box mr="8px">{icon}</Box>}
          <StyledLabel disabled={disabled} error={error} hasFocus={hasFocus || value} htmlFor={name}>
            {label}
          </StyledLabel>
        </IconContainer>
      </LabelContainer>
      <StyledInput
        aria-invalid={error}
        aria-required={required}
        autoFocus={error}
        bg={bg}
        className={className}
        disabled={disabled}
        errorText={errorText}
        id={name}
        maxLength={maxLength}
        name={name}
        pattern={pattern}
        required={required}
        tab-index={tabIndex}
        type={type}
        value={value}
        onBlur={() => setHasFocus(false)}
        onChange={(e) => onInputChange(e.target.value)}
        onFocus={() => setHasFocus(true)}
      />
      {error && (
        <Row alignItems="center" height={50} mr={5} position="absolute" right={0}>
          <ErrorIcon fill={Color.ErrorRed} height={25} width={25} />
        </Row>
      )}
      {error && (
        <>
          <Spacer mt={1} />
          <ErrorText>{errorText}</ErrorText>
        </>
      )}
    </InputWrapper>
  );
};
