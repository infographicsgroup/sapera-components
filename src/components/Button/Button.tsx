import { dataAttributeProps, DataAttributeProps } from "@utils";
import React from "react";
import { colors } from "../../styles/colors";
import { ButtonProps } from "./Button.props";
import { StyledButton } from "./Button.style";

/**
 * <Button />
 */
const Button: React.FC<ButtonProps> = ({
  ariaExpanded,
  ariaPressed,
  ariaLabel,
  autoFocus,
  children,
  className,
  disabled = false,
  onClick,
  name,
  tabIndex,
  width = "auto",
  type = "button",
  icon,
  id,
  size = "large",
  iconFirst = false,
  isSecondary = false,
  bg = isSecondary ? "none" : colors.primary,
  value,
  ...props
}) => (
  <StyledButton
    aria-disabled={disabled}
    aria-expanded={ariaExpanded}
    aria-label={ariaLabel || undefined}
    aria-pressed={ariaPressed}
    autoFocus={autoFocus}
    bg={bg}
    className={className}
    disabledUI={disabled}
    iconFirst={iconFirst}
    id={id}
    isSecondary={isSecondary}
    name={name}
    size={size}
    tab-index={tabIndex}
    type={type}
    value={value}
    width={width}
    onClick={disabled ? () => null : onClick}
    {...dataAttributeProps(props as DataAttributeProps)}
  >
    <span>{children}</span>
    {icon && icon}
  </StyledButton>
);

export { Button };
