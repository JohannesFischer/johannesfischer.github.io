import React from "react";

import { css } from "../../styled-system/css";

interface SkillCardProps extends React.PropsWithChildren {
  /** Icon rendered above the title. */
  icon: React.ReactNode;
  /** Skill category heading. */
  title: string;
}

/**
 * Card displaying a skill category with an icon, title, and list of specific skills as children.
 */
const SkillCard: React.FunctionComponent<SkillCardProps> = ({
  children,
  icon,
  title,
}) => (
  <div
    className={css({
      display: "flex",
      flexDir: "column",
      "& svg": {
        color: "primary/80",
        marginBlockEnd: 4,
        height: "2rem",
        width: "2rem",
      },
    })}
  >
    {icon}
    <span className={css({ marginBlockEnd: 6, textStyle: "heading" })}>
      {title}
    </span>
    <span className={css({ fontSize: "sm", textTransform: "uppercase" })}>
      {children}
    </span>
  </div>
);

export default SkillCard;
