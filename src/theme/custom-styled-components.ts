import styled from "styled-components";
// Styled-System Reference Table
// https://github.com/styled-system/styled-system/blob/master/docs/table.md
import { background, border, color, flexbox, grid, layout, position, shadow, space, typography } from "styled-system";
import { BoxProps, ColumnProps, GridComponentProps, SpacerProps } from "./custom-styled-props";

export const Box = styled.div<BoxProps>(
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

export const Column = styled.div<ColumnProps>(
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

export const Row = styled(Column)`
  flex-direction: row;
`;

export const Grid = styled(Box)<GridComponentProps>(
  {
    display: "grid",
  },
  grid,
  layout,
);

// https://styled-system.com/guides/spacing
export const Spacer = styled.div<SpacerProps>(space, layout);
