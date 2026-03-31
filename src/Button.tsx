import * as React from "react";

import { cva } from "../styled-system/css";

export interface ButtonProps
  extends
    React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AriaAttributes {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
}

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
      },
      lg: {
        fontSize: "md",
        p: 2,
      },
    },
    variant: {
      primary: {
        bg: "primary",
        borderColor: "transparent",
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
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled = false,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={buttonStyles({
        disabled,
        size,
        variant,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
