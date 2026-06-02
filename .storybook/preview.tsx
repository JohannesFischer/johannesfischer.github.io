/// <reference types="vite/client" />
import type { Preview } from "@storybook/react-vite";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { ReactRenderer } from "@storybook/react-vite";

import "../src/index.css";
import { COLOR_SCHEMES } from "../src/const";
import ThemeContext from "../src/ThemeContext";
import { css } from "../styled-system/css";

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      attributeName: "data-color-mode",
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
    (Story, { globals: { theme } }) => (
      <ThemeContext value={theme || COLOR_SCHEMES.LIGHT}>
        <div
          className={css({
            bg: "background",
            color: "body",
            p: 6,
          })}
        >
          {Story()}
        </div>
      </ThemeContext>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default preview;
