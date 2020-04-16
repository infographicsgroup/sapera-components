import React, { ReactNode } from "react";

export default {
  title: "Welcome",
};

export const ToStorybook = (): ReactNode => (
  <div>
    Welcome! Read the <a href="https://github.com/infographicsgroup/sapera-components">README</a>.
  </div>
);

ToStorybook.story = {
  name: "to Storybook",
};
