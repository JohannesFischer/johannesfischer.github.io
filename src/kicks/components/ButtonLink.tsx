import { type HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";
import React, { useRef } from "react";

import { buttonStyles } from "../styles/button";
import { type ButtonProps } from "./Button";

export type ButtonLinkProps = HTMLMotionProps<"a"> &
  Pick<ButtonProps, "children" | "iconAfter" | "variant">;

interface AnimationHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = ({
  children,
  iconAfter: IconAfter,
  variant = "primary",
  ...props
}) => {
  const iconRef = useRef<AnimationHandle>(null);

  return (
    <motion.a
      className={buttonStyles({ variant })}
      onHoverEnd={() => iconRef.current?.stopAnimation()}
      onHoverStart={() => iconRef.current?.startAnimation()}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span>{children}</span>
      {IconAfter && <IconAfter aria-hidden="true" ref={iconRef} />}
    </motion.a>
  );
};

export default ButtonLink;
