import React from "react";
import { ControlProps } from "../../form/control";

/**
 * <Input /> Props
 */
type InputProps<V = string | number> = ControlProps<V> & {
  /**
   * Aria pressed
   */
  ariaPressed?: boolean | "mixed" | undefined;
  /**
   * Aria label
   */
  ariaLabel?: string | undefined;
  /**
   * className
   */
  className?: string;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * Width
   */
  width?: string | number;
  /**
   * Type
   */
  type:
    | "color"
    | "hidden"
    | "image"
    | "file"
    | "month"
    | "range"
    | "search"
    | "week"
    | "text"
    | "number"
    | "date"
    | "datetime-local"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "week";
  /**
   * Required
   */
  required?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Name
   */
  name: string;
  /**
   * Value
   * TODO: remove any
   * value: string | string[] | undefined | number;
   */
  value: any;
  /**
   * Label
   */
  label: string;
  /**
   * Tab index
   */
  tabIndex?: string;
  /**
   * Max length
   */
  maxLength?: number;
  /**
   * Pattern
   */
  pattern?: string;
  /**
   * Error text
   */
  errorText?: string;
  /**
   * Icon
   */
  icon?: React.ReactNode;
  /**
   * Size
   */
  size?: "large" | "medium";
  /**
   * Has error
   */
  hasError?: boolean;
  /**
   * Is valid
   */
  isValid?: boolean;
  /**
   * onInputChange
   */
  onInputChange: (value: string | number) => void;
};

/**
 * <StyledInput /> Props
 */
type StyledInputProps<V = string | number> = ControlProps<V> & {
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Size
   */
  size: number;
};

/**
 * <StyledLabel /> Props
 */
type StyledLabelProps = ControlProps<string> & {
  /**
   * Has icon
   */
  hasIcon?: string | number | true | undefined;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Has error
   */
  hasError?: boolean;
  /**
   * Has focus
   */
  hasFocus: boolean;
};

/**
 * <LabelContainer /> Props
 */
type LabelContainerProps = ControlProps<string> & {
  /**
   * Has focus
   */
  hasFocus: boolean;
  /**
   * Disabled
   */
  disabled: boolean;
  /**
   * Size
   */
  size: number;
};

export { InputProps, StyledInputProps, StyledLabelProps, LabelContainerProps };
