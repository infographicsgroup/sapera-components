import React from "react";
import { ColorType } from "../../theme/util";

/**
 * <CirclePagination /> Props
 */
type CirclePaginationProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
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
