import { css } from "../../styled-system/css";

interface HeadingGroupProps {
  /** Main section heading rendered as h3. */
  heading: string;
  /** Superscript label rendered as h2 with a `//` prefix. */
  headingSup: string;
}

/**
 * Two-level section heading: a small labeled superscript above a larger primary heading.
 */
const HeadingGroup: React.FunctionComponent<HeadingGroupProps> = ({
  heading,
  headingSup,
}) => (
  <div
    className={css({
      display: "flex",
      flexDir: "column",
      marginBlockEnd: 12,
      rowGap: 2,
    })}
  >
    <h2
      className={css({
        textStyle: "heading.h3",
        _before: { content: '"// "' },
      })}
    >
      {headingSup}
    </h2>
    <h3 className={css({ textStyle: "heading.h2" })}>{heading}</h3>
  </div>
);

export default HeadingGroup;
