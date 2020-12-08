import React from "react";
import { Color } from "../../theme/util";
import dataAttributeProps, { DataAttributePropsType } from "../../utils/dataAttributeProps";
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
  bg = isSecondary ? "none" : Color.Primary,
  value,
  ...props
}: ButtonProps) => (
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
    {...dataAttributeProps(props as DataAttributePropsType)}
  >
    <span>{children}</span>
    {icon && icon}
  </StyledButton>
);

export { Button };
