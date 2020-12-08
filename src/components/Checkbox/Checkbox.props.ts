import React from "react";

/**
 * <Checkbox /> Props
 */
type CheckboxProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  /**
   * className
   */
  className?: string;
  /**
   * Children
   */
  children: string | React.ReactNode | Element;
  /**
   * Checked
   */
  checked?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Id
   */
  id: string;
  /**
   * Name
   */
  name: string;
  /**
   * Value
   */
  value: string;
  /**
   * Has error
   */
  hasError?: boolean;
  /**
   * Required
   */
  required?: boolean;
  /**
   * Error text
   */
  errorText?: string;
  /**
   * onChange
   */
  onChange: (value: any) => void;
};

export { CheckboxProps };
