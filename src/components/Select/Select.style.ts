import styled from "styled-components";
import { colors } from "@styles";

const fonts = () => ({
  fontSize: "17px",
  fontWeight: "normal",
  color: colors.primary,
});

/**
 * <LabelStyled />
 */
const LabelStyled = styled.label`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
`;

export { LabelStyled, fonts };
