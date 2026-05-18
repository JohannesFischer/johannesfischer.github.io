import { motion } from "motion/react";
import React from "react";

import { css } from "../../../styled-system/css";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const slideIn = {
  hidden: { opacity: 0.25, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};

const Menu: React.FunctionComponent = () => {
  useLockBodyScroll();

  return (
    <motion.div
      className={css({
        bg: "var(--color-background)",
        left: 0,
        minBlockSize: "calc(100vh - var(--header-height))",
        p: 4,
        position: "fixed",
        top: "var(--header-height)",
        width: "100%",
        zIndex: "var(--z-indices-menu)",
      })}
      initial="hidden"
      transition={{ duration: 0.25, ease: "easeOut" }}
      variants={slideIn}
    >
      <nav id="hamburger-menu">
        <ul>
          <li>
            <a href="#one">Section 1</a>
          </li>
          <li>
            <a href="#two">Section 2</a>
          </li>
          <li>
            <a href="#three">Section 3</a>
          </li>
          <li>
            <a href="#four">Section 4</a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};
export default Menu;
