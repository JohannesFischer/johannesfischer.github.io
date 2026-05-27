import React from "react";

import { css } from "../../styled-system/css";
import { type ColorToken } from "../../styled-system/tokens";
import RotatingHeadline, {
  type RotatingHeadlineItem,
} from "../components/RotatingHeadline";
import Status from "../components/Status";

const headlines: Array<RotatingHeadlineItem> = [
  {
    gradient: ["orange.300", "orange.500"] as [ColorToken, ColorToken],
    text: "fast, accessible interfaces",
  },
  {
    gradient: ["red.300", "red.500"] as [ColorToken, ColorToken],
    text: "production-ready React components",
  },
  {
    gradient: ["indigo.300", "indigo.500"] as [ColorToken, ColorToken],
    text: "pixel-perfect UIs",
  },
  {
    gradient: ["cyan.300", "cyan.500"] as [ColorToken, ColorToken],
    text: "component-driven systems",
  },
  {
    gradient: ["emerald.300", "emerald.500"] as [ColorToken, ColorToken],
    text: "scalable design systems",
  },
  {
    gradient: ["rose.300", "rose.500"] as [ColorToken, ColorToken],
    text: "inclusive, accessible UX",
  },
  {
    gradient: ["green.300", "green.500"] as [ColorToken, ColorToken],
    text: "prototypes that validate ideas",
  },
  {
    gradient: ["fuchsia.300", "fuchsia.500"] as [ColorToken, ColorToken],
    text: "cross-browser polished UI",
  },
  {
    gradient: ["blue.300", "blue.500"] as [ColorToken, ColorToken],
    text: "developer-friendly components",
  },
];

const Hero: React.FunctionComponent = () => (
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
      Design-minded developer shipping <RotatingHeadline items={headlines} />
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
      I'm a frontend developer specializing in fast, accessible, and
      maintainable web interfaces. I turn designs into responsive,
      component-driven code, optimize performance, and focus on delightful
      interactions — all with attention to scalability.
    </p>
  </section>
);

export default Hero;
