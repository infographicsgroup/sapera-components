import React, { FC } from "react";
import styled from "styled-components";
import { Grid, Box } from "../../styled";
import { Color } from "../../styles/colors";
import Circle from "./Circle";

export interface CirclePaginationProps {
  activeItem: number;
  // eslint-disable-next-line
  data: any;
  bgColor?: Color;
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
}: CirclePaginationProps) => (
  <Grid className={className} display="inline-grid" gridAutoFlow="column" gridGap={50} justifyContent="flex-start">
    {/* eslint-disable-next-line */}
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
