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
    <Row className={className} mt={{ xxs: 3, lg: 5 }}>
      {data.map((item: any, index: number) => {
        return (
          <ButtonStyled
            aria-label={`carousel-page-${index}`}
            as="button"
            key={`pagination-element-${index}-${item.toString()}`}
            mr={{ xxs: 5, lg: 7 }}
            onClick={() => onItemClick(index)}
          >
            <Circle bgColor={bgColor} isActive={activeItem === index} />
          </ButtonStyled>
        );
      })}
    </Row>
  );
};
