import { motion } from "motion/react";
import React from "react";

// import tabletCodeImg from "../../../assets/images/tablet-code.webp";
import uiElements from "../../../assets/images/kicks/ui-elements.svg";
import { css } from "../../../styled-system/css";
import { ArrowUpRightIcon } from "../components/ArrowUpRightIcon";
import Button from "../components/Button";

const Hero: React.FunctionComponent<{ onCTAClick: () => void }> = ({
  onCTAClick,
}) => (
  <section
    className={css({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "100svh",
      paddingTop: "var(--header-height)",
    })}
  >
    {/* Left — text panel */}
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBlock: "clamp(3rem, 8vw, 6rem)",
        paddingInline: "clamp(1.5rem, 5vw, 4rem)",
      })}
    >
      {/* Name block — amber wipe reveal */}
      <div>
        <div
          className={css({
            display: "inline-block",
            marginBottom: "1.5rem",
            overflow: "hidden",
            position: "relative",
          })}
        >
          <motion.div
            animate={{ scaleX: 1 }}
            className={css({
              background: "var(--color-accent)",
              bottom: 0,
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
              transformOrigin: "left",
              zIndex: 1,
            })}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.h1
            animate={{ opacity: 1 }}
            className={css({
              color: "var(--color-text-light)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.025em",
              lineHeight: 0.75,
              paddingBlockStart: "0.25em",
              paddingInline: "0.15em",
              position: "relative",
              whiteSpace: "nowrap",
              zIndex: 2,
            })}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            JOHANNES FISCHER
          </motion.h1>
        </div>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className={css({
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            marginBottom: "3rem",
            textTransform: "uppercase",
          })}
          initial={{ opacity: 0, y: 8 }}
          transition={{ delay: 0.85, duration: 0.4 }}
        >
          Senior Frontend Engineer
        </motion.p>

        {/* Catalog info block */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={css({
            borderLeft: "3px solid var(--color-accent)",
            display: "flex",
            flexDirection: "column",
            gap: "0.35rem",
            maxWidth: "360px",
            paddingLeft: "1rem",
          })}
          initial={{ opacity: 0, y: 12 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          {[
            ["Catalog", "JF-001 / 2026"],
            ["Location", "Yokohama, Japan"],
            ["Format", "React · TypeScript · Motion"],
            ["Status", "Available for hire"],
          ].map(([key, val]) => (
            <div
              className={css({
                alignItems: "baseline",
                display: "flex",
                gap: "1rem",
              })}
              key={key}
            >
              <span
                className={css({
                  color: "var(--color-text-muted)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  minWidth: "5rem",
                  textTransform: "uppercase",
                })}
              >
                {key}
              </span>
              <span
                className={css({
                  fontSize: "0.8rem",
                  letterSpacing: "0.02em",
                })}
              >
                {val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA row */}
      <motion.div
        animate={{ opacity: 1 }}
        className={css({
          alignItems: "flex-end",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1.5rem",
        })}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        <div>
          <p
            className={css({
              color: "var(--color-text-muted)",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            })}
          >
            K7452D · 4062548130522
          </p>
          <p
            className={css({
              color: "var(--color-text-muted)",
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            })}
          >
            © 2026 Johannes Fischer
          </p>
        </div>
        <Button iconAfter={ArrowUpRightIcon} onClick={onCTAClick}>
          Get in touch
        </Button>
      </motion.div>
    </div>

    {/* Right — image */}
    <motion.div
      animate={{ opacity: 1 }}
      className={css({
        overflow: "hidden",
        position: "relative",
      })}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      {/* Amber corner block — mirrors DJ-Kicks bottom-right element */}
      <div
        className={css({
          background: "var(--color-accent)",
          bottom: 0,
          height: "80px",
          position: "absolute",
          right: 0,
          width: "80px",
          zIndex: 2,
        })}
      />
      <object
        className={css({
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        })}
        data={uiElements}
        id="animated-svg"
        type="image/svg+xml"
      >
        <img alt="Placeholder" src={uiElements} />
      </object>
    </motion.div>
  </section>
);

export default Hero;
