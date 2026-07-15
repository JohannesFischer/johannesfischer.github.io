import {
  AnimatePresence,
  motion,
  MotionConfig,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import React, { useCallback, useState } from "react";

import "./index.css";
import "./theme.css";
import ceweLogo from "../../assets/images/cewe-logo.svg";
import indeedLogo from "../../assets/images/indeed-logo.svg";
import launchPlanningImg from "../../assets/images/launch-planning.webp";
import rakutenLogo from "../../assets/images/rakuten-logo.svg";
import warehouseImg from "../../assets/images/web-dev-warehouse.webp";
import { css } from "../../styled-system/css";
import { SECTION_IDS } from "../const";
import { ArrowUpRightIcon } from "./components/ArrowUpRightIcon";
import Button from "./components/Button";
import ContactDialog from "./components/ContactDialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SideHeader from "./components/SideHeader";
import TrackRow from "./components/TrackRow";

const sideATracks = [
  {
    credits:
      "I profile before I optimise and reach for browser APIs before abstractions. At Indeed and Rakuten, performance regressions had direct business impact — I treat it as a feature, not a fix.",
    title: "Performance-first Engineering",
  },
  {
    credits:
      "Typed, reusable component libraries with clear APIs. Consistency across a large codebase reduces onboarding friction and keeps the UI predictable and maintainable.",
    title: "Component Systems That Scale",
  },
  {
    credits:
      "From CSS transitions to SVG path animations, I implement motion that communicates system state. Relevant for any UI where operators must find information at a glance.",
    title: "Animation & Visual Engineering",
  },
  {
    credits:
      "A solid lint setup, tests that catch regressions before they ship, and code review used as a teaching tool — not a gate. I enjoy mentoring junior engineers.",
    title: "Code Quality & Team Growth",
  },
];

const sideBTracks = [
  {
    credits:
      "Led frontend delivery on high-traffic job search features serving millions globally. Built accessible React components and drove performance improvements with direct revenue impact.",
    subtitle: "Senior Frontend Engineer · 2020–2023",
    title: "Indeed",
  },
  {
    credits:
      "Built customer-facing e-commerce UIs at scale. Delivered component libraries used across multiple product teams. Mentored junior engineers and drove design system adoption.",
    subtitle: "Frontend Engineer · 2017–2020",
    title: "Rakuten",
  },
  {
    credits:
      "Developed interactive web applications for Europe's largest photo service. Worked closely with designers to create polished, accessible interfaces from Figma to production.",
    subtitle: "Frontend Developer · 2015–2017",
    title: "CEWE",
  },
];

const logos = [
  { alt: "Rakuten", src: rakutenLogo },
  { alt: "Indeed", src: indeedLogo },
  { alt: "CEWE", src: ceweLogo },
];

const App: React.FunctionComponent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={css({
          bg: "var(--color-bg)",
          color: "var(--color-text)",
          fontFamily: "var(--font-mono)",
        })}
      >
        <Header
          onContactClick={() => setDialogOpen(true)}
          scrolled={scrolled}
        />
        <Hero onCTAClick={() => setDialogOpen(true)} />

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: ["1fr 1rem", "2fr .65fr", "2fr 1fr"],
          })}
        >
          <div>
            <section
              className={css({
                paddingBlock: "clamp(4rem, 8vw, 7rem)",
                paddingInline: "clamp(1.5rem, 5vw, 4rem)",
              })}
              id="skills"
            >
              <div
                className={css({
                  marginInline: "auto",
                  maxWidth: "var(--max-w)",
                })}
              >
                <SideHeader
                  label="SKILLS"
                  subtitle="4 Tracks · Frontend Engineering"
                />
                {sideATracks.map((track, i) => (
                  <TrackRow
                    credits={track.credits}
                    index={i}
                    key={track.title}
                    title={track.title}
                  />
                ))}
              </div>
            </section>

            <section
              className={css({
                background: "var(--color-bg-alt)",
                borderBlock: "1px solid var(--color-border)",
                paddingBlock: "clamp(4rem, 8vw, 7rem)",
                paddingInline: "clamp(1.5rem, 5vw, 4rem)",
              })}
              id="experience"
            >
              <div
                className={css({
                  marginInline: "auto",
                  maxWidth: "var(--max-w)",
                })}
              >
                <SideHeader
                  label="EXPERIENCE"
                  subtitle="3 Tracks · Career History"
                />
                {sideBTracks.map((track, i) => (
                  <TrackRow
                    credits={track.credits}
                    index={i}
                    key={track.title}
                    subtitle={track.subtitle}
                    title={track.title}
                  />
                ))}
              </div>
            </section>
          </div>
          <div className={css({ bg: "var(--color-accent-dark)" })}></div>
        </div>

        <section
          className={css({
            paddingBlock: "clamp(4rem, 8vw, 7rem)",
            paddingInline: "clamp(1.5rem, 5vw, 4rem)",
          })}
        >
          <div
            className={css({ marginInline: "auto", maxWidth: "var(--max-w)" })}
          >
            <motion.div
              className={css({ marginBottom: "2.5rem" })}
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p
                className={css({
                  color: "var(--color-text-muted)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                })}
              >
                Liner Notes
              </p>
              <h2
                className={css({
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  letterSpacing: "0.06em",
                })}
              >
                WHAT I BRING TO YOUR TEAM
              </h2>
            </motion.div>

            <div
              className={css({
                display: "grid",
                gap: "1.5rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              })}
            >
              {[
                {
                  highlights: ["Profiling", "Bundle analysis", "Browser APIs"],
                  img: warehouseImg,
                  text: "At Indeed and Rakuten I shipped high-traffic UIs where performance regressions had direct business impact. I profile before I optimise.",
                  title: "VAST UX EXPERTISE",
                },
                {
                  highlights: ["Figma", "Component design", "Design feedback"],
                  img: launchPlanningImg,
                  text: "I stay involved across the full delivery cycle — design handoffs, component design, performance budgets, and release pipelines.",
                  title: "FIGMA TO PRODUCTION",
                },
              ].map(({ highlights, img, text, title }, i) => (
                <motion.div
                  className={css({ position: "relative" })}
                  initial={{ opacity: 0, y: 20 }}
                  key={title}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={css({
                      height: "220px",
                      marginBottom: "1rem",
                      overflow: "hidden",
                      position: "relative",
                    })}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      className={css({
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                      })}
                      src={img}
                    />
                    <div
                      className={css({
                        background: "var(--color-accent)",
                        bottom: 0,
                        height: "40px",
                        position: "absolute",
                        right: 0,
                        width: "40px",
                      })}
                    />
                  </div>

                  <h3
                    className={css({
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      letterSpacing: "0.06em",
                      marginBottom: "0.5rem",
                    })}
                  >
                    {title}
                  </h3>
                  <p
                    className={css({
                      color: "var(--color-text-muted)",
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                    })}
                  >
                    {text}
                  </p>
                  <ul
                    className={css({
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                    })}
                  >
                    {highlights.map((h) => (
                      <li
                        className={css({
                          background: "var(--color-bg-alt)",
                          border: "1px solid var(--color-border)",
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          paddingBlock: "0.25rem",
                          paddingInline: "0.6rem",
                          textTransform: "uppercase",
                        })}
                        key={h}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={css({
            background: "var(--color-bg-alt)",
            borderBlock: "1px solid var(--color-border)",
            paddingBlock: "clamp(3rem, 6vw, 5rem)",
            paddingInline: "clamp(1.5rem, 5vw, 4rem)",
          })}
        >
          <div
            className={css({ marginInline: "auto", maxWidth: "var(--max-w)" })}
          >
            <p
              className={css({
                color: "var(--color-text-muted)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                marginBottom: "2rem",
                textTransform: "uppercase",
              })}
            >
              Licensed courtesy of
            </p>
            <div
              className={css({
                alignItems: "center",
                display: "flex",
                flexWrap: "wrap",
                gap: "3rem",
              })}
            >
              {logos.map(({ alt, src }, i) => (
                <motion.img
                  alt={alt}
                  className={css({ height: "2rem", objectFit: "contain" })}
                  initial={{ opacity: 0 }}
                  key={alt}
                  loading="lazy"
                  src={src}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1 }}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className={css({ paddingInline: "clamp(1.5rem, 5vw, 4rem)" })}
          id={SECTION_IDS.TALK}
        >
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "1fr auto",
              marginInline: "auto",
              maxWidth: "var(--max-w)",
            })}
          >
            <motion.div
              className={css({
                borderBottom: "1px solid var(--color-border)",
                borderRight: "1px solid var(--color-border)",
                paddingBlock: "clamp(3rem, 6vw, 5rem)",
                paddingRight: "3rem",
              })}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p
                className={css({
                  color: "var(--color-text-muted)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                })}
              >
                Order / Contact
              </p>
              <h2
                className={css({
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                })}
              >
                LET'S TALK
                <br />
                ABOUT THE ROLE
              </h2>
              <p
                className={css({
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  maxWidth: "50ch",
                })}
              >
                I'd love to discuss how my experience with React, TypeScript,
                and performance optimisation can contribute to your team and
                product.
              </p>
              <Button
                iconAfter={ArrowUpRightIcon}
                onClick={() => setDialogOpen(true)}
              >
                Get in touch
              </Button>
            </motion.div>

            {/* Right: amber sidebar block — mirrors back cover right column */}
            <motion.div
              className={css({
                background: "var(--color-accent)",
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
                fontSize: "0.68rem",
                fontWeight: 600,
                gap: "0.4rem",
                justifyContent: "flex-end",
                letterSpacing: "0.08em",
                padding: "2rem 1.5rem",
                textTransform: "uppercase",
                width: "180px",
              })}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <span>B + G 2026</span>
              <span>JOHANNES FISCHER</span>
              <span>SENIOR FRONTEND</span>
              <span>ENGINEER</span>
              <span className={css({ marginTop: "0.75rem" })}>
                YOKOHAMA, JAPAN
              </span>
              <span>REACT · TYPESCRIPT</span>
              <span className={css({ marginTop: "0.75rem", opacity: 0.65 })}>
                JF-001
              </span>
            </motion.div>
          </div>
        </section>

        <Footer />

        <AnimatePresence>
          {dialogOpen && <ContactDialog onClose={handleDialogClose} />}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default App;
