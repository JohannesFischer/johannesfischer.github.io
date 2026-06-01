import React from "react";

import { css } from "../../styled-system/css";

interface CareerItemProps extends React.PropsWithChildren {
  /** Company name displayed alongside the date range. */
  company?: string;
  /** Employment end date string (e.g. `"2024"`). */
  endDate?: string;
  /** Job title. */
  role: string;
  /** Employment start date string (e.g. `"2022"`). */
  startDate?: string;
}

/**
 * Work history entry showing role, company, date range, and a free-form description as children.
 * Company and dates are only rendered when all three props are provided.
 */
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
    <div>{children}</div>
  </div>
);

export default CareerItem;
