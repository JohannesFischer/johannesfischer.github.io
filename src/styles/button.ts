/* eslint-disable perfectionist/sort-objects */
import { cva } from "../../styled-system/css";

export const buttonStyles = cva({
  base: {
    border: "1px solid",
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
    transition: "all",
    transitionDuration: "slow",
  },
  variants: {
    disabled: {
      ["true"]: {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },
    size: {
      md: {
        fontSize: "sm",
        p: 1,
        "& svg": {
          boxSize: ".9rem",
        },
      },
      lg: {
        fontSize: "md",
        p: 2,
        "& svg": {
          boxSize: "1.15rem",
        },
      },
    },
    variant: {
      primary: {
        bg: "primary",
        color: "neutral",
        _hover: {
          background: "neutral",
          borderColor: "primary",
          color: "primary",
        },
      },
      secondary: {
        bg: "neutral",
        borderColor: "border",
        color: "primary",
        _hover: {
          borderColor: "primary/50",
        },
      },
      tertiary: {
        bg: "transparent",
        borderColor: "transparent",
        color: "primary",
        _focus: {
          borderColor: "primary",
        },
        _hover: {
          borderColor: "primary",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
