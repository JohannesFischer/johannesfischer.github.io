import * as React from "react";

import { buttonStyles } from "./styles/button.ts";

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
