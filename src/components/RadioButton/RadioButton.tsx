import React, { FC } from "react";
import styled from "styled-components";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface RadioButtonProps {
  // ariaPressed?: boolean | "mixed" | undefined;
  // autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  // name?: string;
  // tabIndex?: string;
  // value?: string;
  onClick?: () => void;
}
const StyledRadioButton = styled.div`
  position: relative;
  margin: 0.5rem 0;

  label {
    + input {
      /* height: 40px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 40px; */
      position: relative;
      display: inline-block;
      cursor: pointer;
      margin-left: 20px; /* This will be adjusted */

      &::before {
        content: "";
        position: absolute;
        display: inline-block;
        left: -22px; /* This will be adjusted */
        width: 20px;
        height: 20px;
        background: $muted-red;
      }
    }
  }
  fieldset {
    border: none;
  }
`;

const Label = styled.label`
  /* :before {
    border: 2px solid;
    content: "";
    height: 40px;
    left: 0;
    position: absolute;
    top: 0;
    width: 40px;
  } */
`;

/**
 * Button
 */
export const RadioButton: FC<RadioButtonProps> = ({
  // ariaExpanded,
  // ariaPressed,
  // autoFocus,
  children,
  // className,
  // disabled = false,
  onClick,
  checked = "false",
}: // name,
// role,
// tabIndex,
// type = "button",
// value,
RadioButtonProps) => {
  return (
    <StyledRadioButton>
      {/* // aria-label for form elements */}
      {/* https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI */}

      {/* https://webaim.org/techniques/forms/advanced#arialabel */}
      <Label htmlFor="male" onClick={onClick}>
        <input
          aria-checked={checked}
          aria-label="name"
          name="gender"
          type="radio"
          value="male"
          // aria-pressed={ariaPressed}
          // autoFocus={autoFocus}
          // className={className}
          // disabled={disabled}
          // name={name}
          // role={role}
          // tab-index={tabIndex}
          // type={type}
          // value={value}
          onClick={onClick}
        />
        {children}
      </Label>
    </StyledRadioButton>
  );
};
