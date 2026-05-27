import React, { useEffect, useState } from "react";

import { css } from "../../styled-system/css";
import { type ColorToken, token } from "../../styled-system/tokens";

export interface RotatingHeadlineItem {
  gradient: [ColorToken, ColorToken];
  text: string;
}

interface RotatingHeadlineProps {
  /**
   * Milliseconds between each rotation.
   * @default 2500
   */
  interval?: number;
  /** Items to cycle through. */
  items: RotatingHeadlineItem[];
}

/**
 * Inline block that cycles through text items with a two-stop gradient colour and a slide-down animation on each change.
 */
const RotatingHeadline: React.FunctionComponent<RotatingHeadlineProps> = ({
  interval = 2500,
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gradientFrom, gradientTo] = items[currentIndex].gradient;
  const gradientStyle = {
    "--from": token(`colors.${gradientFrom}`),
    "--to": token(`colors.${gradientTo}`),
  } as React.CSSProperties;

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1)),
      interval,
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={css({ display: "block", position: "relative" })}>
      <span className={css({ opacity: 0 })}>{items[currentIndex].text}</span>
      <span
        className={css({
          animationDuration: "medium",
          animationFillMode: "forwards",
          animationName: "slideDown",
          animationTimingFunction: "ease-out",
          backgroundClip: "text",
          bg: "linear-gradient(to bottom right, var(--from), var(--to))",
          bottom: -4,
          color: "transparent",
          display: "block",
          position: "absolute",
          top: 0,
          _motionReduce: { animationName: "none", opacity: "1" },
        })}
        data-placement="top"
        key={`headline-${currentIndex}`}
        style={gradientStyle}
      >
        {items[currentIndex].text}
      </span>
    </span>
  );
};

export default RotatingHeadline;
