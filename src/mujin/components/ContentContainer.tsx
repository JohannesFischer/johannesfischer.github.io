import type { SystemStyleObject } from "../../../styled-system/types";

import { css } from "../../../styled-system/css";

const ContentContainer = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: SystemStyleObject;
}) => {
  return (
    <div
      className={css({
        ...(styles && css.raw(styles)),
        maxInlineSize: "var(--sizes-breakpoint-xl)",
        marginInline: "auto",
      })}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
