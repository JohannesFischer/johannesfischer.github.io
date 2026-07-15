import { motion } from "motion/react";
import React from "react";

import { css } from "../../../styled-system/css";
import { URLS } from "../../const";

const Header: React.FunctionComponent<{
  onContactClick: () => void;
  scrolled: boolean;
}> = ({ onContactClick, scrolled }) => (
  <motion.header
    animate={{
      backgroundColor: scrolled
        ? "rgba(242,239,228,0.95)"
        : "rgba(242,239,228,0)",
      borderBottomColor: scrolled ? "var(--color-border)" : "transparent",
    }}
    className={css({
      alignItems: "center",
      borderBottom: "1px solid transparent",
      display: "flex",
      height: "var(--header-height)",
      justifyContent: "space-between",
      left: 0,
      paddingInline: "clamp(1rem, 4vw, 3rem)",
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: "var(--z-header)",
    })}
    initial={false}
    transition={{ duration: 0.25 }}
  >
    <span
      className={css({
        fontFamily: "var(--font-mono)",
        fontSize: "0.75rem",
        fontWeight: 500,
        letterSpacing: "0.06em",
      })}
    >
      JF-001
    </span>

    <nav
      className={css({
        alignItems: "center",
        display: "flex",
        gap: "2rem",
      })}
    >
      {(
        [
          ["#skills", "Side A"],
          ["#experience", "Side B"],
          ["#talk", "Contact"],
        ] as const
      ).map(([href, label]) => (
        <a
          className={css({
            color: "var(--color-text-muted)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            transition: "color 0.15s",
          })}
          href={href}
          key={label}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.color = "var(--color-text)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.color =
              "var(--color-text-muted)";
          }}
        >
          {label}
        </a>
      ))}
      <motion.button
        className={css({
          background: "var(--color-accent)",
          color: "var(--color-text)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          paddingBlock: "0.4rem",
          paddingInline: "1rem",
          textTransform: "uppercase",
        })}
        onClick={onContactClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Hire
      </motion.button>
    </nav>

    <a
      className={css({
        color: "var(--color-text-muted)",
        display: "none",
        fontSize: "0.7rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      })}
      href={URLS.LINKEDIN}
      rel="external noreferrer"
      target="_blank"
    >
      LinkedIn ↗
    </a>
  </motion.header>
);

export default Header;
