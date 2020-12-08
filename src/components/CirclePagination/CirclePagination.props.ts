import { ColorType } from "../../theme/util";
import { ControlProps } from "../../form";

/**
 * <CirclePagination /> Props
 */
type CirclePaginationProps = ControlProps<boolean> & {
  /**
   * Active Item
   */
  activeItem: number;
  /**
   * Data
   */
  data: any;
  /**
   * Background color
   */
  bgColor?: ColorType;
  /**
   * onItemClick
   */
  onItemClick: (index: number) => void;
  /**
   * className
   */
  className?: string;
};

export { CirclePaginationProps };
