import { motion } from "motion/react";
import React, { useState } from "react";

import logoColorImg from "../../../assets/images/jfischer-logo-color.png";
import logoWhiteImg from "../../../assets/images/jfischer-logo-white.png";
import { css } from "../../../styled-system/css";
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";

const Header: React.FunctionComponent<{ solidBg?: boolean }> = ({
  solidBg,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={css({
          alignContent: "center",
          bg: solidBg
            ? "var(--color-background)"
            : ["var(--color-background)", undefined, "transparent"],
          blockSize: "var(--header-height)",
          boxShadow: solidBg ? "sm" : "unset",
          color: ["gray.800", undefined, "white"],
          display: "flex",
          justifyContent: "space-between",
          left: 0,
          px: 4,
          position: "fixed",
          top: 0,
          transition: "background-color .3s",
          width: "100%",
          zIndex: 20,
        })}
      >
        <div>
          <motion.img
            alt=""
            animate={{ height: open ? "40px" : "60px" }}
            className={css({
              maxBlockSize: "var(--header-height)",
              ...(solidBg
                ? {
                    display: "none",
                  }
                : {
                    hideBelow: "md",
                  }),
            })}
            initial={{ height: "60px" }}
            src={logoWhiteImg}
          />
          <img
            alt=""
            className={css({
              maxBlockSize: "calc(var(--header-height) - var(--spacing-2))",
              ...(!solidBg && {
                hideFrom: "md",
              }),
            })}
            src={logoColorImg}
          />
        </div>
        <button
          aria-controls="hamburger-menu"
          className={css({
            color: solidBg
              ? "var(--color-body)"
              : ["var(--color-body)", undefined, "white"],
            transition: "color .5s",
          })}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
      </header>
      <motion.div animate={open ? "visible" : "hidden"}>
        {open && <Menu />}
      </motion.div>
    </>
  );
};

export default Header;
