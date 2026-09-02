import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

import resumeFile from "../../../files/resume-johannes-fischer.pdf";
import { css } from "../../../styled-system/css";
import { CloseIcon } from "../../components/CloseIcon";
import { URLS } from "../../const";
import useFocusFirst from "../../hooks/useFocusFirst";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowUpRightIcon } from "./ArrowUpRightIcon";
import ButtonLink from "./ButtonLink";

interface ContactDialogProps {
  onClose: () => void;
}

const ContactDialog: React.FunctionComponent<ContactDialogProps> = ({
  onClose,
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const triggerEl = useRef(document.activeElement as HTMLElement | null);

  useFocusFirst(ref);

  useEffect(() => {
    const trigger = triggerEl.current;
    ref.current?.showModal();

    return () => {
      trigger?.focus();
    };
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
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        fontFamily: "var(--font-mono)",
        inlineSize: "min(92vw, 480px)",
        margin: "auto",
        padding: 0,
      })}
      exit={{ opacity: 0, y: 12 }}
      initial={{ opacity: 0, y: 12 }}
      key="kicks-dialog"
      ref={ref}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Amber header bar */}
      <div
        className={css({
          alignItems: "center",
          background: "var(--color-accent)",
          display: "flex",
          justifyContent: "space-between",
          padding: "0.6rem 1rem",
        })}
      >
        <span
          className={css({
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          })}
        >
          Get in touch · JF-001
        </span>
        <button
          aria-label="Close dialog"
          className={css({
            p: 2,
            "& svg": { boxSize: "1rem" },
          })}
          onClick={onClose}
        >
          <CloseIcon aria-hidden="true" />
        </button>
      </div>

      <div className={css({ padding: "1.75rem" })}>
        <h2
          className={css({
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            letterSpacing: "0.04em",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          })}
        >
          NEXT CHALLENGE
        </h2>
        <p
          className={css({
            color: "var(--color-text-muted)",
            fontSize: "0.8rem",
            lineHeight: 1.65,
            marginBottom: "2rem",
          })}
        >
          Interested in my experience? Download my resume or connect on
          LinkedIn.
        </p>

        <div
          className={css({
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            paddingTop: "1.25rem",
          })}
        >
          <ButtonLink
            download
            href={resumeFile}
            iconAfter={ArrowDownIcon}
            variant="secondary"
          >
            Resume (PDF)
          </ButtonLink>
          <ButtonLink
            href={URLS.LINKEDIN}
            iconAfter={ArrowUpRightIcon}
            rel="external"
            target="_blank"
            variant="tertiary"
          >
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </motion.dialog>
  );
};

export default ContactDialog;
