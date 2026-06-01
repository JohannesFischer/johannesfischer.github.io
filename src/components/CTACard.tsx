import React from "react";

import { css } from "../../styled-system/css";

interface CTACardProps extends React.PropsWithChildren {
  /** Supporting copy rendered below the heading. */
  description: string;
  /** Primary heading. */
  heading: string;
}

/**
 * Highlighted call-to-action panel with a heading, description, and a slot for action buttons.
 */
const CTACard: React.FunctionComponent<CTACardProps> = ({
  children,
  description,
  heading,
}) => (
  <div
    className={css({
      bg: "background",
      borderBlockStart: "2px solid",
      borderColor: "primary",
      display: "flex",
      flexDir: "column",
      p: 6,
      rowGap: 4,
    })}
  >
    <h4 className={css({ textStyle: "heading" })}>{heading}</h4>
    <p>{description}</p>
    <div
      className={css({
        display: "flex",
        gap: 4,
        marginBlockStart: 4,
      })}
    >
      {children}
    </div>
  </div>
);

export default CTACard;
