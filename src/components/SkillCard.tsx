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
      columnGap: 4,
      display: "flex",
      flexDir: ["row", "column"],
      flexWrap: ["wrap", "column"],
      rowGap: 4,
      "& svg": {
        color: "primary/80",
        height: "2rem",
        width: "2rem",
      },
    })}
  >
    {icon}
    <span className={css({ marginBlockEnd: [0, 2], textStyle: "heading" })}>
      {title}
    </span>
    <span
      className={css({
        flexBasis: ["100%", "auto"],
        fontSize: "sm",
        textTransform: "uppercase",
      })}
    >
      {children}
    </span>
  </div>
);

export default SkillCard;
