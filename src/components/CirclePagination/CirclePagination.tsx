import React from "react";
import { Grid } from "@styled";
import { CirclePaginationProps } from "./CirclePagination.props";
import { ButtonStyled } from "./CirclePagination.style";
import { Circle } from "../Circle";

/**
 * <CirclePagination />
 */
const CirclePagination: React.FC<CirclePaginationProps> = ({ onItemClick, data, bgColor, activeItem, className }) => (
  <Grid className={className} display="inline-grid" gridAutoFlow="column" gridGap={50} justifyContent="flex-start">
    {data.map((item: any, index: number) => (
      <ButtonStyled
        aria-label={`carousel-page-${index}`}
        as="button"
        key={`pagination-element-${index}-${item}`}
        onClick={() => onItemClick(index)}
      >
        <Circle bgColor={bgColor} isActive={activeItem === index} />
      </ButtonStyled>
    ))}
  </Grid>
);

export { CirclePagination };
