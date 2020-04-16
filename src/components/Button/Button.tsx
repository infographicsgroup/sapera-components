import React, { FC } from "react";

// https://www.w3schools.com/tags/tag_button.asp
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
export interface ButtonProps {
  ariaExpanded?: boolean | undefined;
  ariaPressed?: boolean | "mixed" | undefined;
  autoFocus?: boolean;
  children: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  role?: string;
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
  role = children,
  tabIndex,
  type = "button",
  value,
}: ButtonProps) => (
  <button
    aria-expanded={ariaExpanded}
    aria-labelledby={children}
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
