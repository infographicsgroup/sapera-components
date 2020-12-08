import { ColorType } from "../../theme/util";
import { ControlProps } from "../../form";

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
