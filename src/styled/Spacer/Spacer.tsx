import styled from "styled-components";
import { layout, space } from "styled-system";
import { SpacerProps } from "./Spacer.props";

/**
 * <Spacer />
 */
const Spacer = styled.div<SpacerProps>(space, layout);

export { Spacer };
