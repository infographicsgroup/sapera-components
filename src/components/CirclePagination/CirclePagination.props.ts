import { Color } from "@sc-styles";
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
  bgColor?: Color;
  /**
   * onItemClick
   */
  onItemClick: (index: number) => void;
  /**
   * className
   */
  className?: string;
};

export type { CirclePaginationProps };
