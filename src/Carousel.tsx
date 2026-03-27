import * as React from "react";

import { css } from "../styled-system/css";
import { flex, scrollable } from "../styled-system/patterns";

const Carousel: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      className={css(
        flex.raw({}),
        scrollable.raw({ direction: "vertical", hideScrollbar: true }),
        {
          scrollSnapType: "x mandatory",
          "& > div": {
            scrollSnapAlign: "start",
            width: [
              "calc(100vw - token(spacing.4) * 2)",
              "calc(50vw - token(spacing.4) * 2)",
            ],
            flexShrink: 0,
          },
        },
      )}
    >
      {children}
    </div>
  );
};
export default Carousel;
