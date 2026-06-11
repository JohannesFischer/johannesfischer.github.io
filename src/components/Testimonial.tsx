import { Quote } from "lucide-react";
import React from "react";

import { css } from "../../styled-system/css";

interface TestimonialProps {
  /** Full name of the person giving the testimonial. */
  name: string;
  /** The testimonial text, rendered as a blockquote. */
  quote: string;
  /** Job title or role of the person. */
  role: string;
  /** The source of the testimonial, if available.  */
  source?: { href?: string; title: string };
}

/**
 * Attributed quote block with a decorative quote icon, blockquote text, author name, and role.
 */
const Testimonial: React.FunctionComponent<TestimonialProps> = ({
  name,
  quote,
  role,
  source,
}) => {
  const sourceStyles = {
    placeSelf: "end",
    textStyle: "heading.h3",
  };

  return (
    <div
      className={css({
        borderInlineStart: "1px solid",
        borderColor: "primary",
        display: "flex",
        flexDir: "column",
        p: 4,
        rowGap: 2,
      })}
    >
      <Quote
        className={css({
          boxSize: "2rem",
          color: "primary/50",
          justifySelf: "end",
        })}
        fill="currentColor"
        strokeWidth="0"
      />
      <blockquote>
        <p
          className={css({
            fontFamily: "headline",
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
      {source &&
        (source.href ? (
          <a
            className={css(sourceStyles)}
            href={source.href}
            rel="external"
            target="_blank"
          >
            {source.title}
          </a>
        ) : (
          <p className={css(sourceStyles, { color: "textSecondary" })}>
            {source.title}
          </p>
        ))}
    </div>
  );
};

export default Testimonial;
