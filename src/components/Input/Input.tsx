import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Color, ColorType } from "../../theme/util";
import { Row } from "../../theme/custom-styled-components";

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
  value: string;
  label: string;
  bg?: string | ColorType | undefined;
  tabIndex?: string;
  size?: "large" | "medium";
  icon?: React.ReactNode;
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

  /* svg {
    position: absolute;
    right: 0;
  } */
`;
const StyledLabel = styled.label`
  font-family: sans-serif;
  /* position: absolute; */
  z-index: 1;
  padding: 10px;
  pointer-events: none;
  font-size: 17px;
  color: ${Color.TextPrimary};
  transition: font-size 0.3s ease;
`;

const StyledInput = styled.input<InputProps>`
  height: ${(p: InputProps) => (p.size ? INPUT_HEIGHTS[p.size] + "px" : INPUT_HEIGHTS.large + "px")};
  width: 100%;
  padding: 10px;
  border: thin solid ${Color.BorderGrey};
  border-radius: 7px;
  background: ${Color.BackgroundMain};
  font-size: 17px;

  &:focus {
    ${StyledLabel} {
      font-size: 12px;
      color: orange;
    }
  }

  /* padding: 20px 10px; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 190px;

  color: ${Color.TextInverted};
  background: ${(p) => p.bg};
  border: none;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: normal;
  padding: 0 20px;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};

  svg {
    margin: 0 10px 0 0;
  }
] */
`;

export const Input: FC<InputProps> = ({
  autoFocus,
  children,
  className,
  disabled = false,
  label,
  onClick,
  name,
  tabIndex,
  type = "text",
  required,
  icon,
  size = "large",
  bg = Color.Primary,
  value,
}: InputProps) => {
  return (
    <InputWrapper>
      <Row alignItems="center" position="absolute">
        <StyledLabel htmlFor={name} onClick={disabled ? () => null : onClick}>
          {label}
        </StyledLabel>
        {icon && icon}
      </Row>

      <StyledInput
        autoFocus={autoFocus}
        bg={bg}
        className={className}
        disabled={disabled}
        id={name}
        name={name}
        required={required}
        size={size}
        tab-index={tabIndex}
        type={type}
        // value={value}
        onClick={onClick}
      />
      {/* <span>{children}</span> */}
      {/* {iconRight && iconRight} */}
    </InputWrapper>
  );
};
