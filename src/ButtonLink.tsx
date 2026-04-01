import * as React from "react";

import { type ButtonProps } from "./Button";
import { buttonStyles } from "./styles/button";

type ButtonLinkProps = React.PropsWithChildren &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<ButtonProps, "size" | "variant">;

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = ({
  children,
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
    {children}
  </a>
);

export default ButtonLink;
