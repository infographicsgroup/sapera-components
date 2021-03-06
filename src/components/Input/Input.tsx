import React, { Fragment, useState } from "react";
import { colors } from "../../styles";
import { Row, Box, Column } from "../../styled";
import { ErrorIcon, CheckIcon } from "../Icon/Icons";
import { InputProps } from "./Input.props";
import { ERROR_TEXT_HEIGHT, ErrorText, IconContainer, LabelContainer, StyledInput, StyledLabel } from "./Input.style";

/**
 * <Input />
 */
const Input: React.FC<InputProps> = ({
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
}) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
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
        onChange={(e: any) => onInputChange(e.target.value)}
        onFocus={() => setHasFocus(true)}
      />
      {hasError && (
        <Row alignItems="center" height={50} mr={5} position="absolute" right={0}>
          <ErrorIcon fill={colors.error} height={25} width={25} />
        </Row>
      )}
      {isValid && (
        <Row alignItems="center" height={50} mr={5} position="absolute" right={0}>
          <CheckIcon fill={colors.secondary.green} height={25} width={25} />
        </Row>
      )}
      {hasError && (
        <Fragment>
          <ErrorText>{errorText}</ErrorText>
        </Fragment>
      )}
    </Column>
  );
};

export { Input };
