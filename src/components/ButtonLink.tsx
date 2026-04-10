import * as React from "react";

import { buttonStyles } from "../styles/button";

import ButtonContent from "./ButtonContent";
import { type ButtonProps } from "./Button";

type ButtonLinkProps = React.PropsWithChildren &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<ButtonProps, "iconAfter" | "size" | "variant">;

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = ({
  children,
  iconAfter,
  size,
  variant,
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
