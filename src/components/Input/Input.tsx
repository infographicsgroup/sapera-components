import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import { Color, ColorType } from "../../theme/util";
import { Row, Box } from "../../theme/custom-styled-components";

// https://www.w3schools.com/tags/tag_button.asp
export interface InputProps {
  ariaPressed?: boolean | "mixed" | undefined;
  ariaLabel?: string | undefined;
  autoFocus?: boolean;
  // children: string | React.ReactNode;
  className?: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "datetime-local" | "email" | "password" | "search" | "tel" | "url" | "week";
  required?: boolean;
  disabled?: boolean;
  name: string;
  value?: string;
  label: string;
  bg?: string | ColorType | undefined;
  tabIndex?: string;
  errorText?: string;
  size?: "large" | "medium";
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

const INPUT_HEIGHTS = {
  large: 50,
  medium: 45,
};

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const StyledLabel = styled.label<{}>`
  font-family: sans-serif;
  z-index: 1;
  padding: 15px;
  font-size: 17px;
  color: ${Color.TextPrimary};
  /* TODO remove 'all', use 'top'*/
  transition: font-size 0.3s ease, position 0.3s ease;
  /* letter-spacing: 1px; */
`;

const LabelContainer = styled(Row)<{ hasFocus?: boolean }>`
  ${(p) =>
    p.hasFocus &&
    css`
      top: ${(p: any) => (p.size ? -INPUT_HEIGHTS[p.size] / 1 + "px" : -INPUT_HEIGHTS.large / 2 + "px")};
      padding: 0;
      ${StyledLabel} {
        background: ${Color.BackgroundMain};
        font-size: 14px;
        line-height: 8px;
      }

      svg {
        background: ${Color.BackgroundMain};
      }
    `}
`;

const StyledInput = styled.input<InputProps>`
  height: ${(p: InputProps) => (p.size ? INPUT_HEIGHTS[p.size] + "px" : INPUT_HEIGHTS.large + "px")};
  width: 100%;
  padding: 15px;
  border: 2px solid ${Color.BorderGrey};
  border-radius: 7px;
  background: ${Color.BackgroundMain};
  font-size: 17px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
`;

export const Input: FC<InputProps> = ({
  autoFocus,
  className,
  disabled = false,
  label,
  onClick,
  name,
  tabIndex,
  type = "text",
  required,
  icon,
  iconRight,
  size = "large",
  errorText = "Error default text",
  bg = Color.Primary,
  value,
}: InputProps) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number | string | undefined>();

  const isEmpty = inputValue;

  return (
    <InputWrapper>
      <StyledInput
        autoFocus={autoFocus}
        bg={bg}
        className={className}
        disabled={disabled}
        errorText={errorText}
        id={name}
        name={name}
        required={required}
        size={size}
        tab-index={tabIndex}
        type={type}
        // value={value}
        onBlur={() => setHasFocus(false)}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={onClick}
        onFocus={() => setHasFocus(true)}
      />
      <LabelContainer
        alignItems="center"
        hasFocus={hasFocus || inputValue}
        position="absolute"
        style={{ pointerEvents: "none" }}
        // width="100%"
      >
        <Row alignItems="center">
          {icon && <Box pl="15px">{icon}</Box>}
          <StyledLabel htmlFor={name} onClick={disabled ? () => null : onClick}>
            {label}
          </StyledLabel>
        </Row>
        {iconRight && <Box pr="15px">{iconRight}</Box>}
      </LabelContainer>
    </InputWrapper>
  );
};
