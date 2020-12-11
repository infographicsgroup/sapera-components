import { ControlProps } from "../../form";
import { Color } from "@sc-styles";

/**
 * <Circle /> Props
 */
type CircleProps = ControlProps<boolean> & {
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
  color?: Color;
  /**
   * Is active
   */
  isActive?: boolean;
  /**
   * Background color
   */
  bgColor?: Color | string;
};

export { CircleProps };
