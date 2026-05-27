import { motion } from "motion/react";
import React, { useEffect } from "react";

import { css } from "../../../styled-system/css";
import { SECTION_IDS } from "../../const";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const slideIn = {
  hidden: { opacity: 0.25, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};

const Menu: React.FunctionComponent<{ onClose: () => void; open: boolean }> = ({
  onClose,
  open,
}) => {
  useLockBodyScroll(open);

  useEffect(() => {
    const closeMenu = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      globalThis.addEventListener("keydown", closeMenu);
    }

    return () => globalThis.removeEventListener("keydown", closeMenu);
  }, [onClose, open]);

  return (
    <motion.div
      animate={open ? "visible" : "hidden"}
      className={css({
        bg: "var(--color-background)",
        left: 0,
        minBlockSize: "calc(100vh - var(--header-height))",
        p: 4,
        position: "fixed",
        top: "var(--header-height)",
        width: "100%",
        zIndex: "var(--z-indices-menu)",
        "& li": {
          mb: 6,
        },
      })}
      initial="hidden"
      transition={{ duration: 0.25, ease: "easeOut" }}
      variants={slideIn}
    >
      <nav id="hamburger-menu">
        <ul>
          <li>
            <a href={`#${SECTION_IDS.ROLE}`} onClick={onClose}>
              My role at Mujin
            </a>
          </li>
          <li>
            <a href={`#${SECTION_IDS.APPROACH}`} onClick={onClose}>
              My approach to frontend engineering
            </a>
          </li>
          <li>
            <a href={`#${SECTION_IDS.TEAM}`} onClick={onClose}>
              What I bring to your team
            </a>
          </li>
          <li>
            <a href={`#${SECTION_IDS.TALK}`} onClick={onClose}>
              Let's talk about the role
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};
export default Menu;
