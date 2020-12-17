import React from "react";
import { ControlProps } from "../../form";
import { Color } from "@sc-styles";

/**
 * <RadioButton /> Props
 */
type RadioButtonProps = ControlProps<boolean> & {
  /**
   * Children
   */
  children: string | React.ReactNode;
  /**
   * className
   */
  className?: string;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Checked
   */
  checked?: boolean;
  /**
   * Name
   */
  name: string;
  /**
   * Value
   */
  value: string;
  /**
   * Color
   */
  color?: string | Color | undefined;
  /**
   * onClick
   */
  onClick?: () => void;
};

export type { RadioButtonProps };
