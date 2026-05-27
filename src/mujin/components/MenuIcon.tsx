"use client";

import type { Variants } from "motion/react";
import type { HTMLAttributes } from "react";

import { motion, useAnimation } from "motion/react";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export interface MenuIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MenuIconProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  size?: number;
}

const LINE_VARIANTS: Variants = {
  animate: (custom: number) => ({
    opacity: custom === 2 ? 0 : 1,
    rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
    transition: {
      damping: 20,
      stiffness: 260,
      type: "spring",
    },
    y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
  }),
  normal: {
    opacity: 1,
    rotate: 0,
    y: 0,
  },
};

const MenuIcon = forwardRef<MenuIconHandle, MenuIconProps>(
  ({ open, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    useEffect(() => {
      if (open) {
        controls.start("animate");
      } else {
        controls.start("normal");
      }
    }, [controls, open]);

    return (
      <div {...props}>
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            animate={controls}
            custom={1}
            variants={LINE_VARIANTS}
            x1="4"
            x2="20"
            y1="6"
            y2="6"
          />
          <motion.line
            animate={controls}
            custom={2}
            variants={LINE_VARIANTS}
            x1="4"
            x2="20"
            y1="12"
            y2="12"
          />
          <motion.line
            animate={controls}
            custom={3}
            variants={LINE_VARIANTS}
            x1="4"
            x2="20"
            y1="18"
            y2="18"
          />
        </svg>
      </div>
    );
  },
);

MenuIcon.displayName = "MenuIcon";

export default MenuIcon;
