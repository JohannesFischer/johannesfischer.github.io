/// <reference types="vite/client" />
import type { Preview } from "@storybook/react-vite";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { ReactRenderer } from "@storybook/react-vite";

import "../src/index.css";
// import ThemeContext from "../src/ThemeContext";

const preview: Preview = {
  decorators: [
    //   (Story) => <ThemeContext value="light">{Story()}</ThemeContext>
    //   (Story) => <div data-color-mode="light">{Story()}</div>
    withThemeByDataAttribute<ReactRenderer>({
      attributeName: "data-color-mode",
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
