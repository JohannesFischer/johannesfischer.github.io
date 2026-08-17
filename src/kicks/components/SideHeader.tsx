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
      display: "flex",
      gap: "1.5rem",
      justifyContent: "space-between",
      paddingBottom: "0.75rem",
    })}
    initial={{ opacity: 0, x: -24 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, x: 0 }}
  >
    <div style={{ alignItems: "flex-end", display: "flex", gap: "1rem" }}>
      <div
        className={css({
          alignItems: "center",
          background: "var(--color-accent)",
          fontFamily: "var(--font-display)",
          height: "2.5rem",
          justifyContent: "center",
          width: "2.5rem",
          _before: {},
        })}
      >
        {""}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          letterSpacing: "0.06em",
          lineHeight: 1,
        }}
      >
        {label}
      </h2>
    </div>
    {subtitle && (
      <span
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          paddingBottom: "0.2rem",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {subtitle}
      </span>
    )}
  </motion.div>
);

export default SideHeader;
