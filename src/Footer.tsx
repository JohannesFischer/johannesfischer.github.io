import * as React from "react";

import { css } from "../styled-system/css";
import { URLS } from "./const";

const Footer: React.FunctionComponent = () => (
  <footer
    className={css({
      alignItems: "center",
      backgroundColor: "neutral",
      display: "flex",
      justifyContent: "space-between",
      layerStyle: "navigation",
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
          color: "secondary",
          _hover: {
            color: "primary",
            textDecoration: "underline",
            transition: "color",
            transitionDuration: "slow",
          },
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
          LinkedIn
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
