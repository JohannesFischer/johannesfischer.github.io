import { type HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import React, { useRef } from "react";

import { buttonStyles } from "../styles/button";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconAfter?: React.ForwardRefExoticComponent<any>;
  variant?: "primary" | "secondary" | "tertiary";
}

interface AnimationHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled,
  iconAfter: IconAfter,
  variant = "primary",
  ...props
}) => {
  const iconRef = useRef<AnimationHandle>(null);

  return (
    <motion.button
      className={buttonStyles({
        disabled,
        variant,
      })}
      onHoverEnd={() => iconRef.current?.stopAnimation()}
      onHoverStart={() => iconRef.current?.startAnimation()}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span>{children}</span>
      {IconAfter && <IconAfter aria-hidden="true" ref={iconRef} />}
    </motion.button>
  );
};

export default Button;
