import React, { FC } from "react";
import styled from "styled-components";
import { Row } from "../../theme/custom-styled-components";
import { ColorType } from "../../theme/util";
import Circle from "./Circle";
import { Button } from "../Button/Button";

export interface CirclePaginationProps {
  activeItem: number;
  data: any;
  bgColor?: ColorType;
  onItemClick: (index: any) => void;
  className?: string;
}

const ButtonStyled = styled(Button)`
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
            mr={{ xxs: 3, lg: 5 }}
            height="auto"
            ariaLabel={`carousel-page-${index}`}
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
