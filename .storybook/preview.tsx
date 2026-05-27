/// <reference types="vite/client" />
import type { Preview } from "@storybook/react-vite";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { ReactRenderer } from "@storybook/react-vite";

import "../src/index.css";
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
    (Story) => (
      <div
        className={css({
          bg: "background",
          color: "body",
          //   minHeight: "dvh",
          p: 6,
        })}
      >
        {Story()}
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default preview;
