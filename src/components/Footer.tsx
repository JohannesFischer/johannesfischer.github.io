import { css } from "../../styled-system/css";
import { URLS } from "../const";

const linkHoverStyles = {
  color: "background",
  textDecoration: "none",
  // eslint-disable-next-line perfectionist/sort-objects
  _after: {
    height: "100%",
  },
};

/**
 * Site footer with name branding and external links to GitHub, LinkedIn, and the source repository.
 */
const Footer: React.FunctionComponent = () => (
  <footer
    className={css({
      alignItems: ["start", "center"],
      bg: "neutral",
      flexDir: ["column", "row"],
      display: "flex",
      justifyContent: "space-between",
      layerStyle: "navigation",
      rowGap: 2,
    })}
  >
    <p
      className={css({
        color: "primary",
        textTransform: "uppercase",
        textStyle: "heading",
      })}
    >
      Johannes_Fischer
    </p>
    <ul
      className={css({
        listStyle: "none",
        display: "flex",
        gap: 6,
        "& a": {
          color: "body",
          position: "relative",
          display: "inline-block",
          paddingInline: "0.15rem",
          textDecoration: "underline",
          transition: "color ease 0.3s",
          zIndex: 0,
          _motionReduce: { transition: "none" },
          _after: {
            bg: "body",
            bottom: 0,
            content: '""',
            height: 0,
            left: 0,
            position: "absolute",
            transition: "height",
            transitionDuration: "medium",
            width: "100%",
            zIndex: -1,
            _motionReduce: { transition: "none" },
          },
          _focus: linkHoverStyles,
          _hover: linkHoverStyles,
        },
      })}
    >
      <li>
        <a href={URLS.GITHUB_PROFILE} rel="external">
          github
        </a>
      </li>
      <li>
        <a href={URLS.LINKEDIN} rel="external">
          linkedin
        </a>
      </li>
      <li>
        <a href={URLS.GITHUB_SOURCE} rel="external">
          source
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
