import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";

export type { FlexboxProps };
export const Flexbox = styled.div<FlexboxProps>(
  {
    display: "flex",
  },
  flexbox,
);
