import React, { FC } from "react";
import styled from "styled-components";
import { Row, Box } from "../../theme/custom-styled-components";
import { ColorType } from "../../theme/util";
import Circle from "./Circle";

export interface CirclePaginationProps {
  activeItem: number;
  data: any;
  bgColor?: ColorType;
  onItemClick: (index: any) => void;
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
    <Row mt={{ xxs: 3, lg: 5 }} className={className}>
      {data.map((item: any, index: number) => {
        return (
          <ButtonStyled
            as="button"
            mr={{ xxs: 5, lg: 7 }}
            aria-label={`carousel-page-${index}`}
            key={`pagination-element-${index}-${item.toString()}`}
            onClick={() => onItemClick(index)}
          >
            <Circle isActive={activeItem == index} bgColor={bgColor} />
          </ButtonStyled>
        );
      })}
    </Row>
  );
};
