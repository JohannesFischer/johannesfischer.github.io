import * as React from "react";
import { Quote } from "lucide-react";

import { css } from "../styled-system/css";

interface HeadingGroupProps {
  name: string;
  quote: string;
  role: string;
}

const Testimonial: React.FunctionComponent<HeadingGroupProps> = ({
  name,
  quote,
  role,
}) => (
  <div
    className={css({
      borderInlineStart: "1px solid",
      borderColor: "primary",
      display: "flex",
      flexDir: "column",
      padding: 4,
      rowGap: 2,
    })}
  >
    <Quote
      fill="currentColor"
      strokeWidth="0"
      className={css({
        boxSize: "2rem",
        color: "body/40",
        justifySelf: "end",
      })}
    />
    <blockquote>
      <p
        className={css({
          fontFamily: "Space Grotesk",
          fontSize: "lg",
          color: "headline",
          marginBlockEnd: 4,
        })}
      >
        "{quote}"
      </p>
    </blockquote>
    <p className={css({ color: "headline", fontWeight: "bold" })}>{name}</p>
    <p className={css({ textStyle: "heading.h3" })}>{role}</p>
  </div>
);

export default Testimonial;
