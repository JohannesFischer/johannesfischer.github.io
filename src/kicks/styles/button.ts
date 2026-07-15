/* eslint-disable perfectionist/sort-objects */
import { cva } from "../../../styled-system/css";

export const buttonStyles = cva({
  base: {
    alignItems: "center",
    display: "inline-flex",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--font-size-sm)",
    fontWeight: 600,
    gap: 2,
    letterSpacing: "0.1em",
    paddingBlock: 3,
    paddingInline: 6,
    textAlign: "start",
    textTransform: "uppercase",
    "& svg": { boxSize: ".65rem" },
  },
  variants: {
    disabled: {
      ["true"]: {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
    variant: {
      primary: {
        background: "var(--color-text)",
        color: "var(--color-text-light)",
      },
      secondary: {
        background: "var(--color-accent)",
        color: "var(--color-text)",
      },
      tertiary: {
        border: "1px solid var(--color-text)",
        color: "var(--color-text)",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
