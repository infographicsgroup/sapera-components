import React from "react";
import { ColorType } from "../../theme/util";

/**
 * <Circle /> Props
 */
type CircleProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  /**
   * className
   */
  className?: string;
  /**
   * Diameter
   */
  diameter?: number;
  /**
   * Color
   */
  color?: ColorType;
  /**
   * Is active
   */
  isActive?: boolean;
  /**
   * Background color
   */
  bgColor?: ColorType | string;
};

export { CircleProps };
