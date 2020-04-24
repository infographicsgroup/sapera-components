import React, { FC } from "react";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface RadioButtonProps {
  // ariaExpanded?: boolean | undefined;
  // ariaPressed?: boolean | "mixed" | undefined;
  // autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  // name?: string;
  // role: string;
  // tabIndex?: string;
  // type?: "button" | "reset" | "submit";
  // value?: string;
  onClick?: () => void;
}

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

      <label htmlFor="male">
        <input
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
      </label>
    </>
  );
};
