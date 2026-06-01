import React from "react";

import { css } from "../../styled-system/css";
import { type ButtonProps } from "./Button";

type ButtonContentProps = React.PropsWithChildren &
  Pick<ButtonProps, "iconAfter">;

/**
 * Internal layout wrapper for contents in `Button` and `ButtonLink`. Arranges label and optional trailing icon in a flex row.
 */
const ButtonContent: React.FunctionComponent<ButtonContentProps> = ({
  children,
  iconAfter,
}) => (
  <span
    className={css({ alignItems: "center", display: "inline-flex", gap: 2 })}
  >
    {children}
    {iconAfter}
  </span>
);

export default ButtonContent;
