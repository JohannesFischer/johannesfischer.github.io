import { css } from "../../styled-system/css";

interface CareerItemProps extends React.PropsWithChildren {
  company?: string;
  endDate?: string;
  role: string;
  startDate?: string;
}

const CareerItem: React.FunctionComponent<CareerItemProps> = ({
  children,
  company,
  endDate,
  role,
  startDate,
}) => (
  <div>
    <div
      className={css({
        alignItems: ["start", undefined, undefined, "center"],
        display: "flex",
        flexDir: ["column", undefined, undefined, "row"],
        gap: 2,
        justifyContent: "space-between",
        marginBlockEnd: 4,
      })}
    >
      <h4 className={css({ textStyle: "heading.h4" })}>{role}</h4>
      {company && startDate && endDate && (
        <p
          className={css({
            color: "textSecondary",
            textStyle: "heading.h3",
          })}
        >{`${startDate} – ${endDate} // ${company}`}</p>
      )}
    </div>
    <div className={css({ color: "" })}>{children}</div>
  </div>
);

export default CareerItem;
