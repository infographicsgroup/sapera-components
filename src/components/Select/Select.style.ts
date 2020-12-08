import styled from "styled-components";
import { Color, lightenColor } from "../../theme/util";
import { DisabledUIProps } from "./Select.props";

const fonts = () => ({
  fontSize: "17px",
  fontWeight: "normal",
  color: Color.Primary,
});

/**
 * <LabelStyled />
 */
const LabelStyled = styled.label`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${Color.Primary};
`;

/**
 * <SelectNativeStyled />
 */
const SelectNativeStyled = styled.select<DisabledUIProps>`
  width: 100%;
  padding: 19px 25px;
  font-family: monospace;
  font-size: 14px;
  font-weight: normal;
  color: ${(p) => (p.hasDisabledUI ? Color.TextDisabled : Color.Primary)};
  background-color: ${(p) => (p.hasDisabledUI ? Color.BackgroundDisabled : "none")};
  border: 2px solid ${(p) => (p.hasDisabledUI ? Color.BorderDisabled : Color.Primary)};
  border-radius: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0;
    border: 2px solid ${lightenColor(Color.Primary, 0.7).css()};
  }
`;

export { LabelStyled, SelectNativeStyled, fonts };
