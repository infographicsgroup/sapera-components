import { variant } from "./Text.style";
import styled from "styled-components";
import { color, typography } from "styled-system";
import { colors } from "@sc-styles";
import { TextProps } from "@components/Text/Text.props";

/**
 * <Text />
 */
const Text = styled.div<TextProps>(variant, color, typography, { color: colors.primary });

export { Text };
