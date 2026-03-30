// import React, { useContext } from "react";
// import { Moon, Sun } from "lucide-react";

import { css } from "../styled-system/css";
import { URLS } from "./const";
// import ThemeContext from "./ThemeContext";
import ButtonLink from "./ButtonLink";

const Header: React.FunctionComponent = () => {
  // const theme = useContext(ThemeContext);

  return (
    <header
      className={css({
        alignItems: "center",
        borderBlockEnd: "1px solid",
        borderColor: "border",
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
      <ButtonLink href={URLS.RESUME} target="_blank">
        Resume
      </ButtonLink>
      {/*{theme === COLOR_SCHEMES.LIGHT ? <Sun /> : <Moon />}*/}
    </header>
  );
};

export default Header;
