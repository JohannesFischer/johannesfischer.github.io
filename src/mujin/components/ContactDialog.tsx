import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

import { css } from "../../../styled-system/css";
import { CloseIcon } from "./CloseIcon";

interface ContactDialogProps {
  onClose: () => void;
}

const ContactDialog: React.FunctionComponent<ContactDialogProps> = ({
  onClose,
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    const handleCancel = (e: Event) => {
      e.preventDefault(); // stop browser closing dialog immediately
      onClose(); // parent sets open=false → AnimatePresence exits
    };
    dialog?.addEventListener("cancel", handleCancel);
    return () => dialog?.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  return (
    <motion.dialog
      animate={{ opacity: 1, y: 0 }}
      className={css({
        bg: "var(--color-background)",
        borderRadius: "lg",
        border: "none",
        boxShadow: "lg",
        blockSize: ["100vh", undefined, "fit-content"],
        inlineSize: ["100vw", undefined, "min(90vw, 600px)"],
        m: "auto",
        p: 0,
        "&::backdrop": {
          backdropFilter: "blur(2px)",
          opacity: 1,
          transition: "opacity, 1s easeIn",
          "@starting-style": {
            opacity: 0,
          },
        },
      })}
      exit={{ opacity: 0, y: -16 }}
      initial={{ opacity: 0, y: -16 }}
      key="modal"
      ref={ref}
    >
      <div
        className={css({
          p: 4,
        })}
      >
        <div
          className={css({
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          })}
        >
          <h2
            className={css({
              fontSize: "xl",
              fontWeight: "bold",
              color: "var(--color-body)",
              m: 0,
            })}
          >
            Contact me
          </h2>
          <button
            aria-label="Close dialog"
            className={css({
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-body)",
              fontSize: "xl",
              lineHeight: 1,
              p: 1,
            })}
            onClick={onClose}
            type="button"
          >
            <CloseIcon />
          </button>
        </div>
        <form method="dialog" onSubmit={onClose}>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 4,
            })}
          >
            <label
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 1,
              })}
            >
              <span
                className={css({ fontSize: "sm", color: "var(--color-body)" })}
              >
                Name
              </span>
              <input
                className={css({
                  border: "1px solid",
                  borderColor: "gray.300",
                  borderRadius: "sm",
                  p: 2,
                  fontSize: "md",
                })}
                name="name"
                required
                type="text"
              />
            </label>
            <label
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 1,
              })}
            >
              <span
                className={css({ fontSize: "sm", color: "var(--color-body)" })}
              >
                Email
              </span>
              <input
                className={css({
                  border: "1px solid",
                  borderColor: "gray.300",
                  borderRadius: "sm",
                  p: 2,
                  fontSize: "md",
                })}
                name="email"
                required
                type="email"
              />
            </label>
            <label
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: 1,
              })}
            >
              <span
                className={css({ fontSize: "sm", color: "var(--color-body)" })}
              >
                Message
              </span>
              <textarea
                className={css({
                  border: "1px solid",
                  borderColor: "gray.300",
                  borderRadius: "sm",
                  p: 2,
                  fontSize: "md",
                  minBlockSize: "120px",
                  resize: "vertical",
                })}
                name="message"
                required
              />
            </label>
            <button
              className={css({
                bg: "var(--color-primary)",
                border: "none",
                borderRadius: "sm",
                color: "var(--color-body-light)",
                cursor: "pointer",
                fontSize: "md",
                fontWeight: "bold",
                mt: 2,
                p: 3,
              })}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </motion.dialog>
  );
};

export default ContactDialog;
