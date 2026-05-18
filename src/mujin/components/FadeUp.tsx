import { type HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

type FadeUpProps<T extends keyof HTMLElementTagNameMap = "div"> =
  HTMLMotionProps<T> & {
    as?: T;
  };

function FadeUp<T extends keyof HTMLElementTagNameMap = "div">({
  as,
  children,
  transition,
  ...props
}: FadeUpProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = motion[as ?? "div"] as React.ComponentType<any>;

  return (
    <Component
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut", ...transition }}
      variants={fadeUp}
      viewport={{ once: true }}
      whileInView="visible"
      {...props}
    >
      {children}
    </Component>
  );
}

export default FadeUp;
