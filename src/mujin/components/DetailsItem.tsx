import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

import { css } from "../../../styled-system/css";
import { DetailsIcon } from "./DetailsIcon";
import FadeUp from "./FadeUp";

const openStyles = {
  bgLinear: "to-b",
  gradientFrom: "rgba(255, 100, 16, 0)",
  gradientTo: "rgba(255, 100, 16, 0.2)",
};

const DetailsItem = ({
  children,
  onClick,
  open,
  summary,
}: {
  children: React.ReactNode;
  onClick: () => void;
  open: boolean;
  summary: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <details
      className={css({
        borderRadius: "sm",
        overflow: "hidden",
        "& p": {
          px: 4,
          mb: 4,
        },
        _open: openStyles,
      })}
      open={isMounted}
    >
      <summary
        className={css({
          cursor: "pointer",
          display: "flex",
          fontSize: "xl",
          fontWeight: "bold",
          justifyContent: "space-between",
          p: 4,
          _focus: open ? undefined : openStyles,
          _hover: open ? undefined : openStyles,
        })}
        onClick={(e) => {
          e.preventDefault();
          onClick();

          if (!open) {
            setIsMounted(true);
          }
        }}
      >
        {summary}
        <DetailsIcon open={open} />
      </summary>
      <AnimatePresence onExitComplete={() => setIsMounted(false)}>
        {open && (
          <motion.div
            animate={{ height: "auto" }}
            className={css({ overflow: "hidden" })}
            exit={{ height: 0 }}
            initial={{ height: 0 }}
            key={summary}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <FadeUp
              transition={{ delay: 0.15, duration: 0.25 }}
              viewport={{ once: false }}
            >
              {children}
            </FadeUp>
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
};

export default DetailsItem;
