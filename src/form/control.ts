import { ReactNode } from "react";

/**
 * Formik
 */
type ControlProps<V = string> = {
  /**
   * Html id
   */
  id?: string;
  /**
   * Control value
   */
  label?: ReactNode;
  /**
   * Root classname
   */
  className?: string;
  /***
   * Is form control disabled
   */
  disabled?: boolean;
  /**
   * Field error
   */
  error?: ReactNode;
  /**
   * Is control touched
   */
  touched?: boolean;
  /**
   * Is has error
   */
  isError?: boolean;
  /**
   * Placeholder
   */
  placeholder?: React.ReactNode;
  /**
   * Is Field required
   */
  required?: boolean;
  /**
   * Change handler
   */
  onChange?: (value: V) => void;
  /**
   * Handle touch
   */
  onTouch?: () => void;
  /**
   * Control tabindex
   */
  tabIndex?: number;
};

export type { ControlProps };
