import React from "react";

import { buttonStyles } from "../styles/button";
import { type ButtonProps } from "./Button";
import ButtonContent from "./ButtonContent";

type ButtonLinkProps = React.PropsWithChildren &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<ButtonProps, "iconAfter" | "size" | "variant">;

/**
 * Anchor element styled identically to `Button`. Use when the action navigates rather than triggers behaviour.
 */
const ButtonLink: React.FunctionComponent<ButtonLinkProps> = ({
  children,
  iconAfter,
  size = "md",
  variant = "primary",
  ...props
}) => (
  <a
    {...props}
    className={buttonStyles({
      size,
      variant,
    })}
  >
    <ButtonContent iconAfter={iconAfter}>{children}</ButtonContent>
  </a>
);

export default ButtonLink;
