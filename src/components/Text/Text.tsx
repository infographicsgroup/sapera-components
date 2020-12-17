import { TextProps } from "@components/Text/Text.props";
import { colors } from "../../styles";
import styled from "styled-components";
import { color, typography } from "styled-system";
import { variant } from "./Text.style";

/**
 * <Text />
 */
const Text = styled.div<TextProps>(variant, color, typography, { color: colors.primary });

export { Text };
