import type { Preview } from "@storybook/preact"
import register from "../src/web-components";
import "../src/style";

register();

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
