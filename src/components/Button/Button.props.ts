import React from "react";
import { ColorType } from "../../styles/colors";

/**
 * <Button /> Props
 */
type ButtonProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  /**
   * Id
   */
  id?: string;
  /**
   * Type
   */
  type?: "button" | "reset" | "submit";
  /**
   * ClassName
   */
  className?: string;
  /**
   * Value
   */
  value?: string;
  /**
   * onClick
   */
  onClick?: () => void;
  /**
   * Aria expanded
   */
  ariaExpanded?: boolean | undefined;
  /**
   * Aria pressed
   */
  ariaPressed?: boolean | "mixed" | undefined;
  /**
   * Aria label
   */
  ariaLabel?: string | undefined;
  /**
   * Auto focus
   */
  autoFocus?: boolean;
  /**
   * Children
   */
  children: string | React.ReactNode;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Name
   */
  name?: string;
  /**
   * Background
   */
  bg?: string | ColorType | undefined;
  /**
   * Width
   */
  width?: string;
  /**
   * Icon first
   */
  iconFirst?: boolean;
  /**
   * Tab index
   */
  tabIndex?: string;
  /**
   * Size
   */
  size?: "large" | "medium" | "small";
  /**
   * Icon
   */
  icon?: React.ReactNode;
  /**
   * Is secondary
   */
  isSecondary?: boolean;
  /**
   * Disabled UI
   */
  disabledUI?: boolean;
  /**
   * Button props
   */
  props?: unknown;
};

export { ButtonProps };
