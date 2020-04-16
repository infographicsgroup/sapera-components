import React, { FC } from "react";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface ButtonProps {
  ariaExpanded?: boolean | undefined;
  ariaPressed?: boolean | "mixed" | undefined;
  autoFocus?: boolean;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  role: string;
  tabIndex?: string;
  type?: "button" | "reset" | "submit";
  value?: string;
  onClick?: () => void;
}

/**
 * Button
 */
export const Button: FC<ButtonProps> = ({
  ariaExpanded,
  ariaPressed,
  autoFocus,
  children,
  className,
  disabled = false,
  onClick,
  name,
  role,
  tabIndex,
  type = "button",
  value,
}: ButtonProps) => {
  // aria-label atrribute usage
  // developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
  const hasTextLabel = typeof children === "string";
  return (
    <button
      aria-expanded={ariaExpanded}
      aria-label={!hasTextLabel ? role : undefined}
      aria-labelledby={hasTextLabel ? role : undefined}
      aria-pressed={ariaPressed}
      autoFocus={autoFocus}
      className={className}
      disabled={disabled}
      name={name}
      role={role}
      tab-index={tabIndex}
      type={type}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
