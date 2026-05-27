import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useContext } from "react";

import { css } from "../../styled-system/css";
import { COLOR_SCHEMES } from "../const";
import ThemeContext from "../ThemeContext";
import Button from "./Button";

type HeaderProps = {
  /** Called when the user clicks the light/dark theme toggle button. */
  onThemeChange: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * Site header with name branding and a theme toggle button that switches between light and dark modes.
 */
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
      <Button
        aria-label={
          theme === COLOR_SCHEMES.LIGHT
            ? "Switch to dark mode"
            : "Switch to light mode"
        }
        onClick={onThemeChange}
        variant="tertiary"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {theme === COLOR_SCHEMES.LIGHT ? (
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              initial={{ opacity: 0, y: "100%" }}
              key="sun"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Sun />
            </motion.span>
          ) : (
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              initial={{ opacity: 0, y: "-100%" }}
              key="moon"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Moon />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </header>
  );
};

export default Header;
