import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";

export interface FlexboxComponentProps extends FlexboxProps {
  children: React.ReactNode;
  className?: string;
  styles?: CSSProperties;
}

const FlexboxStyled = styled.div(
  {
    display: "flex",
  },
  flexbox,
);

export const Flexbox: FC<FlexboxComponentProps> = ({ className, children, styles }: FlexboxComponentProps) => (
  <FlexboxStyled className={className} style={styles}>
    {children}
  </FlexboxStyled>
);
