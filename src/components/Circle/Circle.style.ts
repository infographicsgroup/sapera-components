import styled, { css } from "styled-components";
import { breakpoint } from "@sc-styles";
import { CircleProps } from "./Circle.props";

/**
 * <Dot />
 */
const Dot = styled.div<CircleProps>`
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  margin: auto;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

/**
 * <CircleStyled />
 */
const CircleStyled = styled.div<CircleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  border-radius: 50%;

  ${breakpoint.lg`
    background-color: ${(p: CircleProps) => p.bgColor};
  `}

  ${({ isActive }) =>
    isActive &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${({ color }: CircleProps) => color};
    `}
`;

export { Dot, CircleStyled };
