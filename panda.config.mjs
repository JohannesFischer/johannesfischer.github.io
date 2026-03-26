import { defineConfig, defineLayerStyles } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  globalCss: {
    html: {
      "--global-font-body": "Inter, Arial, Helvetica, sans-serif",
    },
  },
  theme: {
    extend: {
      layerStyles: defineLayerStyles({
        navigation: {
          description: "header & footer styles",
          value: {
            paddingInline: 6,
            paddingBlock: 8,
          },
        },
        section: {
          description: "section styles",
          value: {
            paddingInline: 6,
            paddingBlock: 16,
          },
        },
      }),
      textStyles: {
        heading: {
          DEFAULT: {
            value: {
              fontFamily: "Space Grotesk",
              fontWeight: "bold",
              fontSize: "2xl",
              color: "headline",
              lineHeight: "1.2",
            },
          },
          h1: {
            value: {
              textStyle: "heading",
              fontSize: "7xl",
              lineHeight: "1.1",
              marginBlockEnd: 8,
            },
          },
          h2: {
            value: {
              textStyle: "heading",
              fontSize: "4xl",
              lineHeight: "1.15",
            },
          },
          h3: {
            value: {
              textStyle: "heading",
              color: "primary",
              fontSize: "xs",
              letterSpacing: 4,
              textTransform: "uppercase",
            },
          },
          h4: {
            value: {
              textStyle: "heading",
              fontSize: "3xl",
              lineHeight: "1.1",
            },
          },
        },
      },
      tokens: {
        colors: {
          primary: { value: "#f59e0b" },
          secondary: { value: "#986f3b" },
          neutral: { value: "#0f172a" },
          border: { value: "#20232e" },
          headline: { value: "#dae2fd" },
          textSecondary: { value: "#9e8c79" },
          buttonSecondary: { value: "#171f33" },
        },
      },
      semanticTokens: {
        colors: {
          background: {
            value: {
              _light: "#eaedff",
              _dark: "#0b1326",
            },
          },
          backgroundLight: {
            value: {
              _light: "#fff",
              _dark: "#131b2e",
            },
          },
          body: {
            value: {
              _light: "#0b1326",
              _dark: "#d8c3ad",
            },
          },
        },
      },
    },
  },
  outdir: "styled-system",
});
