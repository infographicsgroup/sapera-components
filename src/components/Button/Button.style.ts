import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.props";
import { colors } from "../../styles/colors";

const BUTTON_HEIGHTS = {
  large: 56,
  medium: 50,
  small: 44,
};

const BUTTON_PADDING = {
  large: "0 48",
  medium: "0 48",
  small: "0 25",
};

/**
 * <StyledButton />
 */
const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: ${(p) => p.width};
  height: ${(p) => (p.size ? BUTTON_HEIGHTS[p.size] + "px" : BUTTON_HEIGHTS.large + "px")};
  padding: ${(p) => (p.size ? BUTTON_PADDING[p.size] + "px" : BUTTON_PADDING.large + "px")};
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1px;
  color: ${colors.text.inverted};
  background: ${(p) => (p.disabledUI ? colors.disabled : p.bg)};
  border: none;
  border-radius: 28px;

  cursor: ${(p) => (p.disabledUI ? "default" : "pointer")};

  svg {
    margin: 0 0 0 10px;
  }

  svg,
  path {
    fill: ${colors.text.inverted};
  }

  ${(p) =>
    p.isSecondary &&
    css`
      color: ${colors.primary};
      background: ${p.bg};
      border: 2px solid ${colors.primary};
      svg,
      path {
        fill: ${colors.primary};
      }
    `}

  ${(p) =>
    p.iconFirst &&
    css`
      flex-direction: row-reverse;
      svg {
        margin: 0 10px 0 0;
      }
    `}
`;

export { StyledButton };
