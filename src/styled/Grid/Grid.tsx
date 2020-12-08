import styled from "styled-components";
import { grid, layout } from "styled-system";
import { Box } from "../Box";
import { GridComponentProps } from "./Grid.props";

/**
 * <Grid />
 */
const Grid = styled(Box)<GridComponentProps>({ display: "grid" }, grid, layout);

export { Grid };
