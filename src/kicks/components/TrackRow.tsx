import { motion } from "motion/react";
import React from "react";

import { css } from "../../../styled-system/css";

export interface TrackRowProps {
  credits?: string;
  index: number;
  subtitle?: string;
  title: string;
}

const TrackRow: React.FunctionComponent<TrackRowProps> = ({
  credits,
  index,
  subtitle,
  title,
}) => (
  <motion.div
    className={css({
      display: "grid",
      gap: "var(--spacing-2) var(--spacing-4)",
      gridTemplateColumns: ["auto 1fr 1fr", "1fr 1fr 2fr"],
      gridTemplateRows: "auto auto",
      paddingBlock: "1.25rem",
      transition: "background 0.15s",
    })}
    initial={{ opacity: 0, y: 10 }}
    transition={{ delay: index * 0.05 + 0.1, duration: 0.35, ease: "easeOut" }}
    viewport={{ margin: "-40px", once: true }}
    whileHover={{ backgroundColor: "rgba(240,160,48,0.07)" }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {/* Side indicator */}
    <div
      className={css({
        alignItems: "flex-start",
        background: "var(--color-accent)",
        color: "var(--color-text-light)",
        boxSize: "2rem",
        display: "flex",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--font-size-xs)",
        fontWeight: 600,
        justifyContent: "flex-end",
        justifySelf: "center",
        letterSpacing: "0.04em",
        lineHeight: 1,
        padding: "0.2rem",
        userSelect: "none",
      })}
    >
      {String(index + 1)}
    </div>

    <div
      style={{
        alignItems: "baseline",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.25rem 1.5rem",
        gridColumnEnd: subtitle ? "auto" : "span 2",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          letterSpacing: "0.04em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </span>
    </div>
    {subtitle && (
      <span
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.8rem",
          letterSpacing: "0.02em",
        }}
      >
        {subtitle}
      </span>
    )}
    {credits && (
      <p
        className={css({
          fontSize: "var(--font-size-sm)",
          gridColumnEnd: "span 2",
          gridColumnStart: 2,
          gridRow: 2,
          letterSpacing: "0.02em",
          lineHeight: 1.55,
          paddingInlineStart: "var(--spacing-4)",
        })}
      >
        {credits}
      </p>
    )}
  </motion.div>
);

export default TrackRow;
