import type { Preview } from "@storybook/preact"
import register from "../src/custom-elements";
import "../src/theme.css";
import "../src/base.css";
import "./style.css";

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
