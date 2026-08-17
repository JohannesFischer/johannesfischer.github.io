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
import { URLS } from "../const";
import { ArrowUpRightIcon } from "./components/ArrowUpRightIcon";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import ContactDialog from "./components/ContactDialog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideHeader from "./components/SideHeader";
import TestimonialCard from "./components/TestimonialCard";
import TrackRow from "./components/TrackRow";
import Hero from "./sections/Hero";

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

const testimonials = [
  {
    name: "Akira S.",
    quote:
      "Whether he was leading the engineering efforts for the Indeed Apply team or optimizing workflows for our large-scale libraries, Johannes consistently balanced high technical standards with a deep understanding of UX. He is a rare engineer who can manage both infrastructure and design at scale, and I highly recommend him for any senior engineering or leadership role.",
    role: "Staff Software Engineer, Indeed",
    source: { href: URLS.LINKEDIN, title: "LinkedIn" },
  },
  {
    name: "Corey C.",
    quote:
      "Designing elegant experiences for enterprise applications is not easy, especially when the subject matter involves high-density data visualization & other business analytics, but Johannes excelled here and even went above and beyond the responsibilities normally expected from his role to deliver a high-quality experience to a vital customer base. Any company looking for a knowledgeable, dedicated colleague that's also a pleasure to work with would be fortunate to have Johannes as part of the team.",
    role: "UX Director, Indeed",
    source: { href: URLS.LINKEDIN, title: "LinkedIn" },
  },
  {
    name: "Pete W.",
    quote:
      "Johannes is nothing short of a god when it comes to his development knowledge and delivery here at Indeed. He was responsible for planning, architecture, and delivery the most heavily used [internal a11y] utility [...] and for the crucial storybook add-on.",
    role: "Accessibility Engineer, Indeed",
    source: { title: "Internal peer review" },
  },
  {
    name: "Todd O.",
    quote:
      "Johannes extensive FE experience is a major asset to the Representation team and [internal component library]. He's one of our best FE resources. He's always on top of code reviews and gives thorough and well thought out feedback.",
    role: "Senior UX Developer, Indeed",
    source: { title: "Internal peer review" },
  },
  {
    name: "Thomas S.",
    quote:
      "Johannes has a ton of Frontend expertise and is always sharing that knowledge in MR in helpful tips. He has been a huge help in building out the [internal component library].",
    role: "Software Engineer I, Indeed",
    source: { title: "Internal peer review" },
  },
  {
    name: "Scott C.",
    quote:
      "Participating in mentorship with Johannes has continued to be a fruitful experience over this semester. In our weekly meetings he continually finds meaningful subject matter for us to discuss and work through together. [...] This has helped me stay motivated and gives me purpose.",
    role: "Content Aggregation Engineer, Indeed",
    source: { title: "Internal peer review" },
  },
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
            <section id="skills">
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
                <div
                  className={css({
                    paddingBlock: "clamp(4rem, 8vw, 7rem)",
                    paddingInline: "clamp(1.5rem, 5vw, 4rem)",
                  })}
                >
                  {sideATracks.map((track, i) => (
                    <TrackRow
                      credits={track.credits}
                      index={i}
                      key={track.title}
                      title={track.title}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section
              className={css({
                background: "var(--color-bg-alt)",
                borderBlock: "1px solid var(--color-border)",
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
                <div
                  className={css({
                    paddingBlock: "clamp(4rem, 8vw, 7rem)",
                    paddingInline: "clamp(1.5rem, 5vw, 4rem)",
                  })}
                >
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
              className={css({ marginBlockEnd: "2.5rem" })}
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
                  marginBlockEnd: "0.5rem",
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
                      marginBlockEnd: "1rem",
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
                      marginBlockEnd: "0.5rem",
                    })}
                  >
                    {title}
                  </h3>
                  <p
                    className={css({
                      color: "var(--color-text-muted)",
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                      marginBlockEnd: "1rem",
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
            paddingBlock: "clamp(4rem, 8vw, 7rem)",
            paddingInline: "clamp(1.5rem, 5vw, 4rem)",
          })}
          id="showcase"
        >
          <div
            className={css({ marginInline: "auto", maxWidth: "var(--max-w)" })}
          >
            <SideHeader
              label="B-SIDES"
              subtitle="2 Tracks · Further Listening"
            />

            <div
              className={css({
                display: "grid",
                gap: "1.5rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                marginBlockStart: "clamp(2rem, 4vw, 3rem)",
              })}
            >
              {[
                {
                  href: "/mujin/",
                  tag: "CASE STUDY",
                  text: "A landing page built to apply for a frontend engineering role at a robotics company. I cloned their business site and rewrote the content to be about me, as a way to show how I'd approach their frontend: real-time UI patterns, motion, and a component system from scratch.",
                  title: "MUJIN PITCH SITE",
                },
                {
                  href: "/storybook/",
                  tag: "COMPONENT LIBRARY",
                  text: "Isolated, documented components from this site and the Mujin pitch, browsable and testable outside the page they live on.",
                  title: "STORYBOOK",
                },
              ].map(({ href, tag, text, title }, i) => (
                <motion.a
                  className={css({
                    background: "var(--color-bg-alt)",
                    border: "1px solid var(--color-border)",
                    display: "block",
                    padding: "1.5rem",
                    transition: "border-color 0.15s",
                    _hover: {
                      borderColor: "var(--color-accent)",
                    },
                  })}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  key={title}
                  rel="noopener noreferrer"
                  target="_blank"
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p
                    className={css({
                      color: "var(--color-text-muted)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      marginBlockEnd: "0.5rem",
                      textTransform: "uppercase",
                    })}
                  >
                    {tag}
                  </p>
                  <div
                    className={css({
                      alignItems: "center",
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "space-between",
                      marginBlockEnd: "0.5rem",
                    })}
                  >
                    <h3
                      className={css({
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        letterSpacing: "0.06em",
                      })}
                    >
                      {title}
                    </h3>
                    <ArrowUpRightIcon size={20} />
                  </div>
                  <p
                    className={css({
                      color: "var(--color-text-muted)",
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                    })}
                  >
                    {text}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section
          className={css({
            paddingBlock: "clamp(4rem, 8vw, 7rem)",
            paddingInline: "clamp(1.5rem, 5vw, 4rem)",
          })}
          id="reviews"
        >
          <div
            className={css({ marginInline: "auto", maxWidth: "var(--max-w)" })}
          >
            <SideHeader label="REVIEWS" subtitle="6 Tracks · Peer Feedback" />

            <div
              className={css({ marginBlockStart: "clamp(2rem, 4vw, 3rem)" })}
            >
              <Carousel>
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.name}
                    name={testimonial.name}
                    quote={testimonial.quote}
                    role={testimonial.role}
                    source={testimonial.source}
                  />
                ))}
              </Carousel>
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
                marginBlockEnd: "2rem",
                textTransform: "uppercase",
              })}
            >
              Worked for market leaders
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
                  className={css({ height: "3rem", objectFit: "contain" })}
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
                paddingInlineEnd: "3rem",
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
                  marginBlockEnd: "0.75rem",
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
                  marginBlockEnd: "1.5rem",
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
                  marginBlockEnd: "2rem",
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
              <span className={css({ marginBlockStart: "0.75rem" })}>
                YOKOHAMA, JAPAN
              </span>
              <span>REACT · TYPESCRIPT</span>
              <span
                className={css({ marginBlockStart: "0.75rem", opacity: 0.65 })}
              >
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
