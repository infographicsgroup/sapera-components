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
  // name?: string;
  // tabIndex?: string;
  // value?: string;
  onClick?: () => void;
}

const Label = styled.label`
  input {
  }
`;

const StyledRadioButton = styled.input`
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
}: // name,
// role,
// tabIndex,
// type = "button",
// value,
RadioButtonProps) => {
  return (
    <>
      {/* // aria-label for form elements */}
      {/* https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI */}

      {/* https://webaim.org/techniques/forms/advanced#arialabel */}

      <Label htmlFor="male">
        <StyledRadioButton
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
    </>
  );
};
