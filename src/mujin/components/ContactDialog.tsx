import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

import resumeFile from "../../../files/resume-johannes-fischer.pdf";
import { css } from "../../../styled-system/css";
import { CloseIcon } from "../../components/CloseIcon";
import { URLS } from "../../const";

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
      e.preventDefault();
      onClose();
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
        blockSize: "fit-content",
        inlineSize: ["100vw", undefined, "min(90vw, 600px)"],
        m: "auto",
        p: 0,
        _backdrop: {
          backdropFilter: "blur(2px)",
          opacity: 1,
          transition: "opacity, .5s ease-in",
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
          <h4
            className={css({
              fontWeight: "bold",
              color: "var(--color-body)",
              m: 0,
            })}
          >
            I'm looking for the next challenge
          </h4>
          <button
            aria-label="Close dialog"
            className={css({
              alignSelf: "flex-start",
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
            <CloseIcon aria-hidden="true" />
          </button>
        </div>
        <p className={css({ color: "var(--color-body)", mt: 2, mb: 6 })}>
          Want to learn more about my experience? Check out my resume or connect
          with me on LinkedIn.
        </p>
        <div className={css({ display: "flex", gap: 4, flexWrap: "wrap" })}>
          <a
            className={css({
              bg: "var(--color-primary)",
              borderRadius: "sm",
              color: "var(--color-body-light)",
              fontWeight: "bold",
              px: 5,
              py: 3,
              textDecoration: "none",
              _hover: { opacity: 0.9 },
            })}
            download
            href={resumeFile}
          >
            Resume
          </a>
          <a
            className={css({
              border: "2px solid",
              borderColor: "var(--color-primary)",
              borderRadius: "sm",
              color: "var(--color-primary)",
              fontWeight: "bold",
              px: 5,
              py: 3,
              textDecoration: "none",
              _hover: {
                bg: "var(--color-primary)",
                color: "var(--color-body-light)",
              },
              transition: "all .2s ease",
            })}
            href={URLS.LINKEDIN}
            rel="external noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.dialog>
  );
};

export default ContactDialog;
