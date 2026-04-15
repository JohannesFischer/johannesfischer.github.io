import { css } from "../styled-system/css";

interface SkillCardProps extends React.PropsWithChildren {
  icon: React.ReactNode;
  title: string;
}

const SkillCard: React.FunctionComponent<SkillCardProps> = ({
  icon,
  title,
  children,
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
