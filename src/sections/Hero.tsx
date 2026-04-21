import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { css } from "../../styled-system/css";
import { type ColorToken, token } from "../../styled-system/tokens";
import Status from "../components/Status";

const headlines: Array<{ gradient: [ColorToken, ColorToken]; text: string }> = [
  {
    gradient: ["orange.300", "orange.500"],
    text: "fast, accessible interfaces",
  },
  {
    gradient: ["red.300", "red.500"],
    text: "production-ready React components",
  },
  { gradient: ["indigo.300", "indigo.500"], text: "pixel-perfect UIs" },
  { gradient: ["cyan.300", "cyan.500"], text: "component-driven systems" },
  { gradient: ["emerald.300", "emerald.500"], text: "scalable design systems" },
  { gradient: ["rose.300", "rose.500"], text: "inclusive, accessible UX" },
  {
    gradient: ["green.300", "green.500"],
    text: "prototypes that validate ideas",
  },
  //   { gradient: ["teal.300", "teal.500"], text: "high-conversion landing pages" },
  {
    gradient: ["fuchsia.300", "fuchsia.500"],
    text: "cross-browser polished UI",
  },
  {
    gradient: ["blue.300", "blue.500"],
    text: "developer-friendly components",
  },
];

const Hero: React.FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [gradientFrom, gradientTo] = headlines[currentIndex].gradient;
  const gradientStyle = {
    "--from": token(`colors.${gradientFrom}`),
    "--to": token(`colors.${gradientTo}`),
  } as React.CSSProperties;

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((id) => (id === headlines.length - 1 ? 0 : id + 1)),
      2500,
    );

    return () => clearInterval(id);
  }, []);

  return (
    <section className={css({ layerStyle: "section" })}>
      <Status />
      <h1
        className={css({
          blockSize: [160, "auto"],
          fontSize: ["4xl", undefined, "5xl"],
          marginBlockStart: 4,
          textStyle: "heading.h1",
        })}
      >
        Design-minded developer shipping{" "}
        <span className={css({ display: "block", position: "relative" })}>
          <AnimatePresence initial={false}>
            <span className={css({ opacity: 0 })}>
              {headlines[currentIndex].text}
            </span>
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              className={css({
                backgroundClip: "text",
                bg: "linear-gradient(to bottom right, var(--from), var(--to))",
                bottom: -4,
                color: "transparent",
                display: "block",
                position: "absolute",
                top: 0,
                _motionReduce: { transition: "none" },
              })}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: "-100%" }}
              key={currentIndex}
              style={gradientStyle}
            >
              {headlines[currentIndex].text}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
      <p
        className={css({
          borderInlineStart: "1px solid",
          borderColor: "primary",
          maxWidth: ["initial", undefined, "60vw"],
          paddingBlock: 4,
          paddingInlineStart: 6,
          textWrap: "pretty",
        })}
      >
        I’m a frontend developer specializing in fast, accessible, and
        maintainable web interfaces. I turn designs into responsive,
        component-driven code, optimize performance, and focus on satisfying
        user interactions — all with attention to accessibility and scalability.
      </p>
    </section>
  );
};

export default Hero;
