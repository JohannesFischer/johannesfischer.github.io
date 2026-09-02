import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

import jfLogoImg from "../../../assets/images/kicks/jf-logo.webp";
// import resumeFile from "../../../files/resume-johannes-fischer.pdf";
import { css } from "../../../styled-system/css";
import { circle } from "../../../styled-system/patterns";
import BarcodeGlitch from "./BarcodeGlitch";
// import { URLS } from "../../const";

const Footer: React.FunctionComponent = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <footer
      className={css({
        fontFamily: "var(--font-mono)",
        marginBlockStart: "8rem",
        overflowX: "hidden",
      })}
    >
      {/* <div
          className={css({
            background: "var(--color-accent)",
            display: "flex",
            flexDirection: "column",
            fontSize: "0.7rem",
            fontWeight: 600,
            gap: "0.3rem",
            justifyContent: "space-between",
            letterSpacing: "0.06em",
            padding: "1.25rem",
            textTransform: "uppercase",
            width: "200px",
      })}
        >
          <div
            className={css({ display: "flex", flexDirection: "column", gap: "0.3rem" })}
          >
            <span>JF-001</span>
            <span>REACT · TYPESCRIPT</span>
            <span>MADE IN BERLIN</span>
          </div>
          <div
            className={css({ display: "flex", flexDirection: "column", gap: "0.5rem" })}
          >
            <a
              href={URLS.LINKEDIN}
              rel="external noreferrer"
              className={css({ color: "inherit" })}
              target="_blank"
            >
              LinkedIn ↗
            </a>
            <a
              href={URLS.GITHUB_PROFILE}
              rel="external noreferrer"
              className={css({ color: "inherit" })}
              target="_blank"
            >
              GitHub ↗
            </a>
            <a href={resumeFile} className={css({ color: "inherit" })} target="_blank">
              Resume ↓
            </a>
          </div>
        </div>
      </div> */}

      <div
        className={css({
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        })}
        ref={containerRef}
      >
        <div
          className={circle({
            bg: "var(--color-accent)",
            size: "4rem",
            transform: "translate(-50%, 0)",
          })}
        ></div>
        <motion.div
          animate={{ x: isInView ? 0 : "110%" }}
          className={css({
            alignItems: "stretch",
            bg: "white",
            borderStartStartRadius: "2rem",
            borderEndStartRadius: "2rem",
            display: "flex",
            inlineSize: "80vw",
            justifyContent: "space-between",
            paddingInlineEnd: 12,
          })}
          initial={false}
          transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={circle({
              alignSelf: "center",
              bg: "var(--color-accent)",
              color: "var(--color-text-light)",
              fontSize: "var(--font-size-lg)",
              size: "3.3rem",
            })}
          >
            83
          </div>
          <div className={css({ alignSelf: "center", hideBelow: "md" })}>
            <img
              alt="JF Logo blatantly ripped off of the K7 Records Logo"
              className={css({ blockSize: "40px" })}
              src={jfLogoImg}
            />
          </div>
          <BarcodeGlitch />
          <div
            className={css({
              fontFamily: "var(--font-mono)",
              fontSize: "var(--font-size-sm)",
              display: "grid",
              gridTemplateRows: "repeat(3, 1fr)",
              hideBelow: "lg",
              inlineSize: "max-content",
              textTransform: "uppercase",
            })}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
              })}
            >
              <span>P + C 2026</span>
              <span>JF-001</span>
            </div>
            <div>A division of JF Music</div>
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
              })}
            >
              <span>K7452D</span>
              <span>Made in Japan</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className={css({
          color: "var(--color-text-muted)",
          display: "flex",
          fontSize: "var(--font-size-sm)",
          gap: "10rem",
          letterSpacing: "0.04em",
          lineHeight: 1.7,
          marginBlock: "var(--spacing-12)",
          marginInlineStart: "15vw",
        })}
      >
        <p>Hersteller / Manufacturer:</p>
        <div>
          <p>Johannes Fischer</p>
          <p>
            <a href="https://johannesfischer.github.io/" target="_blank">
              johannesfischer.github.io
            </a>
          </p>
          <p>Built with React · Vite · Panda CSS · Motion · Love</p>
          <p>Fonts: Bebas Neue · IBM Plex Mono (Google Fonts)</p>
          <p className={css({ marginBlockStart: "1rem" })}>
            <a
              href="https://github.com/JohannesFischer/johannesfischer.github.io/tree/main/src/kicks"
              target="_blank"
            >
              view page source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
