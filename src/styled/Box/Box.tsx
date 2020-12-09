import styled from "styled-components";
import { width, background, border, color, flexbox, layout, position, shadow, space, typography } from "styled-system";
import { BoxProps } from "./Box.props";

/**
 * <Box />
 */
const Box = styled.div<BoxProps>(
  width,
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
);

export { Box };
