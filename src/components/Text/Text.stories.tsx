import React from "react";
import { Text } from "./Text";
import { withA11y } from "@storybook/addon-a11y";
import { Column } from "@styled";

/**
 * <Header />
 */
const Texts: React.FC = () => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Column width="60%">
      <Text variant="h1">The quick brown fox jumps over the lazy dog</Text>
      <br />
      <br />
      <Text variant="h2">The quick brown fox jumps over the lazy dog</Text>
      <br />
      <br />
      <Text variant="h3">The quick brown fox jumps over the lazy dog</Text>
      <br />
      <br />
      <Text variant="h4">The quick brown fox jumps over the lazy dog</Text>
      <br />
      <br />
      <Text variant="subtitleLarge">The quick brown fox jumps over the lazy dog</Text>
      <br />
      <br />
      <Text variant="paragraphLarge">
        What does quality Customer Experience look like to your business? What steps are you taking to deliver
        exceptional Customer Experience? How will you unify your teams to pursue better experiences that lead to
        increased customer loyalty and sustainable business value?
      </Text>
      <br />
      <br />
      <Text variant="subtitleNormal">Listen to full episodes on</Text>
      <br />
      <br />
      <Text variant="paragraphNormal">
        What does quality Customer Experience look like to your business? What steps are you taking to deliver
        exceptional Customer Experience? How will you unify your teams to pursue better experiences that lead to
        increased customer loyalty and sustainable business value?
      </Text>
      <br />
      <Text variant="paragraphNormal">Button</Text>
      <br />
      <br />
      <Text variant="link">Text Link/Form</Text>
      <br /> <br />
      <Text variant="label">Label</Text>
    </Column>
  </div>
);

export { Texts };

export default {
  title: "Text",
  component: Texts,
  decorators: [withA11y],
};
