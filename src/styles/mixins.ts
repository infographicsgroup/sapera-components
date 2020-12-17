import { css } from "styled-components";

/**
 * Flex props
 */
const flex = ({
  alignItems = "center",
  justifyContent = "flex-start",
}: {
  alignItems: "flex-start" | "flex-end" | "center";
  justifyContent: "flex-start" | "flex-end" | "center";
}) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export { flex };
