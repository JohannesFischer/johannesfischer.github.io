import { motion } from "motion/react";
import React from "react";

import { css } from "../../../styled-system/css";

interface SideHeaderProps {
  label: string;
  subtitle?: string;
}

const SideHeader: React.FunctionComponent<SideHeaderProps> = ({
  label,
  subtitle,
}) => (
  <motion.div
    className={css({
      alignItems: "flex-end",
      blockSize: "4rem",
      display: "flex",
      gap: "1.5rem",
      justifyContent: "space-between",
      paddingBlockEnd: "0.75rem",
      paddingInlineEnd: "1rem",
    })}
    initial={{ opacity: 0, x: -24 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, x: 0 }}
  >
    <div
      className={css({
        alignItems: "flex-end",
        display: "flex",
        position: "relative",
      })}
    >
      <motion.div
        className={css({
          alignItems: "center",
          background: "var(--color-accent)",
          fontFamily: "var(--font-display)",
          height: "2.5rem",
          justifyContent: "center",
          left: 0,
          position: "absolute",
          width: "clamp(1.5rem, 5vw, 4rem)",
          _before: {},
        })}
        initial={{ width: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileInView={{ width: "clamp(1.5rem, 5vw, 4rem)" }}
      >
        {""}
      </motion.div>
      <h2
        className={css({
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          inlineSize: "max-content",
          left: "calc(clamp(1.5rem, 5vw, 4rem) + 1rem)",
          letterSpacing: "0.06em",
          lineHeight: 1,
          position: "absolute",
          textTransform: "uppercase",
        })}
      >
        {label}
      </h2>
    </div>
    {subtitle && (
      <span
        className={css({
          color: "var(--color-text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          paddingBottom: "0.2rem",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        })}
      >
        {subtitle}
      </span>
    )}
  </motion.div>
);

export default SideHeader;
