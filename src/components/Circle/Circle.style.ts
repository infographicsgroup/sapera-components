import styled, { css } from "styled-components";
import { breakpoint } from "../../theme/util";
import { CircleProps } from "./Circle.props";

/**
 * <Dot />
 */
const Dot = styled.div<CircleProps>`
  width: ${(p) => p.diameter}px;
  height: ${(p) => p.diameter}px;
  margin: auto;
  background-color: ${(p) => p.color};
  border-radius: 50%;
`;

/**
 * <CircleStyled />
 */
const CircleStyled = styled.div<CircleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(p) => p.diameter}px;
  height: ${(p) => p.diameter}px;
  border-radius: 50%;

  ${breakpoint.lg`
    background-color: ${(p: CircleProps) => p.bgColor};
  `}

  ${(p) =>
    p.isActive &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${(p: CircleProps) => p.color};
    `}
`;

export { Dot, CircleStyled };