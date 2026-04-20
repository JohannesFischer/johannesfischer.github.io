import { Moon, Sun } from "lucide-react";
import React, { useContext } from "react";

import { css } from "../../styled-system/css";
import { COLOR_SCHEMES } from "../const";
import ThemeContext from "../ThemeContext";
import Button from "./Button";

type HeaderProps = {
  onThemeChange: React.MouseEventHandler<HTMLButtonElement>;
};

const Header: React.FunctionComponent<HeaderProps> = ({ onThemeChange }) => {
  const theme = useContext(ThemeContext);

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
      <Button onClick={onThemeChange} variant="tertiary">
        {theme === COLOR_SCHEMES.LIGHT ? <Sun /> : <Moon />}
      </Button>
    </header>
  );
};

export default Header;
