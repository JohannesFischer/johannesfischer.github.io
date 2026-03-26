import * as React from "react";

import { css } from "../styled-system/css";

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
      className={css({
        background: "green",
        width: ".75em",
        height: ".75em",
      })}
    ></div>
    <span>Status: Available for new opportunities</span>
  </div>
);

export default Status;
