"use client";

import type { HTMLAttributes } from "react";

import { motion, useAnimation } from "motion/react";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export interface DetailsIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DetailsIconProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  size?: number;
}

const DetailsIcon = forwardRef<DetailsIconHandle, DetailsIconProps>(
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
        <motion.svg
          animate={controls}
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transition={{ damping: 15, stiffness: 100, type: "spring" }}
          variants={{
            animate: {
              rotate: 180,
            },
            normal: {
              rotate: 0,
            },
          }}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12h14" />
          <motion.path
            d="M12 5v14"
            transition={{ duration: 0.15 }}
            variants={{ animate: { opacity: 0 }, normal: { opacity: 1 } }}
          />
        </motion.svg>
      </div>
    );
  },
);

DetailsIcon.displayName = "DetailsIcon";

export { DetailsIcon };
