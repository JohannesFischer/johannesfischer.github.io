import { hover, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { css } from "../../../styled-system/css";

export interface ButtonProps
  extends
    React.AriaAttributes,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  const [hoverState, setHoverState] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    return hover(ref.current, () => {
      setHoverState(true);
      console.log("hover");

      return () => setHoverState(false);
    });
  }, []);

  return (
    <button
      type="button"
      {...props}
      className={css({
        bg: "var(--color-primary)",
        blockSize: "50px",
        border: 0,
        borderStartStartRadius: "sm",
        borderEndStartRadius: "sm",
        color: "var(--color-body-light)",
        cursor: "pointer",
        p: 0,
        px: 6,
        position: "relative",
        "& svg": {
          top: 0,
          position: "absolute",
          width: "35px",
          zIndex: 1,
        },
      })}
      ref={ref}
    >
      {children}
      <svg
        aria-hidden="true"
        className={css({
          right: "-20px",
        })}
        fill="var(--color-primary)"
        height="100%"
        preserveAspectRatio="none"
        width="100%"
      >
        <path
          d="M 33.405 24.086 C 33.699 24.66 33.699 25.34 33.405 25.914 L 21.589 48.914 C 21.246 49.581 20.559 50 19.81 50 L 0 50 L 0 0 L 19.81 0 C 20.559 0 21.246 0.419 21.589 1.086 Z"
          fill="var(--color-primary)"
        ></path>
      </svg>
      <svg
        aria-hidden="true"
        className={css({
          right: "-45px",
        })}
        fill="var(--color-primary)"
        height="100%"
        preserveAspectRatio="none"
        width="100%"
      >
        <path
          d="M 33.209 24.09 C 33.501 24.662 33.501 25.338 33.209 25.91 L 21.463 48.91 C 21.121 49.579 20.433 50 19.682 50 L 1.634 50 C 0.887 50 0.403 49.211 0.743 48.545 L 12.304 25.91 C 12.596 25.338 12.596 24.662 12.304 24.09 L 0.743 1.455 C 0.403 0.789 0.887 0 1.634 0 L 19.682 0 C 20.433 0 21.121 0.421 21.463 1.09 Z"
          fill="var(--color-primary)"
        ></path>
      </svg>
      <motion.svg
        animate={{ right: hoverState ? "-70px" : "-45px" }}
        aria-hidden="true"
        className={css({
          position: "static",
          top: "unset",
        })}
        fill="var(--color-primary)"
        height="100%"
        preserveAspectRatio="none"
        width="100%"
      >
        <path
          d="M 33.209 24.09 C 33.501 24.662 33.501 25.338 33.209 25.91 L 21.463 48.91 C 21.121 49.579 20.433 50 19.682 50 L 1.634 50 C 0.887 50 0.403 49.211 0.743 48.545 L 12.304 25.91 C 12.596 25.338 12.596 24.662 12.304 24.09 L 0.743 1.455 C 0.403 0.789 0.887 0 1.634 0 L 19.682 0 C 20.433 0 21.121 0.421 21.463 1.09 Z"
          fill="var(--color-primary)"
        ></path>
      </motion.svg>
    </button>
  );
};

export default Button;
