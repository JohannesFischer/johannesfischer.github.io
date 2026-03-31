import * as React from "react";

import { css } from "../styled-system/css";
import { square } from "../styled-system/patterns";

const Status: React.FunctionComponent = () => (
  <div
    className={css({
      alignItems: "center",
      bg: "backgroundLight",
      border: "1px solid",
      borderColor: "border",
      display: "flex",
      fontSize: "sm",
      gap: 2,
      p: 2,
      width: "fit-content",
    })}
  >
    <div
      className={square({
        background: "green",
        size: "3",
      })}
    ></div>
    <span>Status: Available for job opportunities</span>
  </div>
);

export default Status;
