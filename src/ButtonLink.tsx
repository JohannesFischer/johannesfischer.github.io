import * as React from "react";

import { css } from "../styled-system/css";

interface ButtonLinkProps
  extends
    React.PropsWithChildren,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = ({
  children,
  size = "md",
  variant = "primary",
  ...props
}) => {
  return (
    <a
      {...props}
      className={css({
        background: variant === "primary" ? "primary" : "buttonSecondary",
        border: "1px solid",
        borderColor: variant === "primary" ? "transparent" : "border",
        color: variant === "primary" ? "neutral" : "primary",
        fontSize: size === "md" ? "sm" : "md",
        fontWeight: "bold",
        letterSpacing: 2,
        padding: size === "md" ? 1 : 2,
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
    </a>
  );
};

export default ButtonLink;
