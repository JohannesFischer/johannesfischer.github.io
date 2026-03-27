import * as React from "react";

import { css } from "../styled-system/css";
import { square } from "../styled-system/patterns";

const Status: React.FunctionComponent = () => (
  <div
    className={css({
      alignItems: "center",
      backgroundColor: "gray.800/40",
      border: "1px solid",
      borderColor: "border",
      display: "flex",
      fontSize: "sm",
      gap: 2,
      padding: 2,
      width: "fit-content",
    })}
  >
    <div
      className={square({
        background: "green",
        size: ".75em",
      })}
    ></div>
    <span>Status: Available for new opportunities</span>
  </div>
);

export default Status;
