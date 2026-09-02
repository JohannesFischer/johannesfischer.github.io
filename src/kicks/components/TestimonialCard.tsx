import { Quote } from "lucide-react";
import React from "react";

import { css } from "../../../styled-system/css";

interface TestimonialCardProps {
  name: string;
  quote: string;
  role: string;
  source?: { href?: string; title: string };
}

const TestimonialCard: React.FunctionComponent<TestimonialCardProps> = ({
  name,
  quote,
  role,
  source,
}) => (
  <div
    className={css({
      borderInlineStart: "1px solid var(--color-accent)",
      display: "flex",
      flexDir: "column",
      padding: "1.5rem",
      rowGap: "0.75rem",
    })}
  >
    <Quote
      className={css({
        color: "var(--color-accent)",
        height: "1.75rem",
        justifySelf: "flex-end",
        width: "1.75rem",
      })}
      fill="currentColor"
      strokeWidth="0"
    />
    <blockquote>
      <p
        className={css({
          fontSize: "0.85rem",
          lineHeight: 1.7,
        })}
      >
        "{quote}"
      </p>
    </blockquote>
    <div>
      <p
        className={css({
          fontFamily: "var(--font-display)",
          fontSize: "1rem",
          letterSpacing: "0.04em",
        })}
      >
        {name}
      </p>
      <p
        className={css({
          color: "var(--color-text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        })}
      >
        {role}
      </p>
    </div>
    {source &&
      (source.href ? (
        <a
          className={css({
            color: "var(--color-text-muted)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            marginBlockStart: "auto",
            textTransform: "uppercase",
            _hover: { color: "var(--color-accent)" },
          })}
          href={source.href}
          rel="external noopener noreferrer"
          target="_blank"
        >
          {source.title}
        </a>
      ) : (
        <p
          className={css({
            color: "var(--color-text-muted)",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            marginBlockStart: "auto",
            textTransform: "uppercase",
          })}
        >
          {source.title}
        </p>
      ))}
  </div>
);

export default TestimonialCard;
