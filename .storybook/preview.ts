import type { Preview } from "@storybook/react";
import "../src/theme.css";
import "../src/base.css";
import "../contrib/destyle.min.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
