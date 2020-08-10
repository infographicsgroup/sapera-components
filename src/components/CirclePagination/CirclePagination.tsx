import React, { FC } from "react";
import styled from "styled-components";
import { Grid, Box } from "../../theme/custom-styled-components";
import { ColorType } from "../../theme/util";
import Circle from "./Circle";

export interface CirclePaginationProps {
  activeItem: number;
  data: any;
  bgColor?: ColorType;
  onItemClick: (index: number) => void;
  className?: string;
}

const ButtonStyled = styled(Box)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const CirclePagination: FC<CirclePaginationProps> = ({
  onItemClick,
  data,
  bgColor,
  activeItem,
  className,
}: CirclePaginationProps) => {
  return (
    <Grid
      className={className}
      display="inline-grid"
      gridAutoFlow="column"
      gridGap={{ xxs: 60, lg: 120 }}
      justifyContent="flex-start"
    >
      {data.map((item: any, index: number) => {
        return (
          <ButtonStyled
            aria-label={`carousel-page-${index}`}
            as="button"
            key={`pagination-element-${index}-${item}`}
            onClick={() => onItemClick(index)}
          >
            <Circle bgColor={bgColor} isActive={activeItem === index} />
          </ButtonStyled>
        );
      })}
    </Grid>
  );
};
