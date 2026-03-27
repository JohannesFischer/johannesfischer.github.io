import * as React from "react";

import { css } from "../styled-system/css";

export interface ButtonProps
  extends
    React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AriaAttributes {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled = false,
  size = "md",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={css({
        background: variant === "primary" ? "primary" : "buttonSecondary",
        border: "1px solid",
        borderColor: variant === "primary" ? "transparent" : "border",
        color: variant === "primary" ? "neutral" : "primary",
        fontSize: size === "md" ? "sm" : "md",
        fontWeight: "bold",
        letterSpacing: 2,
        opacity: disabled ? 0.5 : 1,
        padding: size === "md" ? 1 : 2,
        pointerEvents: disabled ? "none" : "initial",
        textTransform: "uppercase",
        transition: "all",
        transitionDuration: "slow",
        _hover:
          variant === "primary"
            ? {
                background: "neutral",
                borderColor: "primary",
                color: "primary",
              }
            : {
                borderColor: "primary/50",
              },
      })}
    >
      {children}
    </button>
  );
};

export default Button;
