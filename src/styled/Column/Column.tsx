import { ColumnProps } from "./Column.props";
import styled from "styled-components";
import { background, border, color, flexbox, layout, position, space, grid } from "styled-system";

/**
 * <Column />
 */
const Column = styled.div<ColumnProps>(
  {
    display: "flex",
    flexDirection: "column",
  },
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  grid,
);

export { Column };
