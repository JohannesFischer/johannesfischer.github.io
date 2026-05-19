import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useRef, useState } from "react";

import "./index.css";
import "./theme.css";
import ceweLogo from "../../assets/images/cewe-logo.svg";
import indeedLogo from "../../assets/images/indeed-logo.svg";
import launchPlanningImg from "../../assets/images/launch-planning.png";
import rakutenLogo from "../../assets/images/rakuten-logo.svg";
import bgVideoPoster from "../../assets/images/robot.jpg";
import tabletCodeImg from "../../assets/images/tablet-code.png";
import warehouseImg from "../../assets/images/web-dev-warehouse.png";
import webDevImg from "../../assets/images/webdev.png";
import bgVideo from "../../files/robot.mp4";
import { css } from "../../styled-system/css";
import Button from "./components/Button";
import ContactDialog from "./components/ContactDialog";
import ContentContainer from "./components/ContentContainer";
import DetailsItem from "./components/DetailsItem";
import FadeUp from "./components/FadeUp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Headline from "./components/Headline";
import ImageCard from "./components/ImageCard";

const App: React.FunctionComponent = () => {
  const [openDetailsItem, setOpenDetailsItem] = useState(-1);
  const [heroPast, setHeroPast] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardScrollProgress } = useScroll({
    offset: ["start end", "center end"],
    target: cardRef,
  });
  const { scrollY } = useScroll();
  const scale = useTransform(cardScrollProgress, [0, 1], [0.9, 1]);
  const prefersReducedMotion = globalThis.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  const handleOpenDetailsItem = (index: typeof openDetailsItem) => {
    let nextIndex = index;

    if (index === openDetailsItem) {
      nextIndex = -1;
    }

    setOpenDetailsItem(nextIndex);
  };

  useMotionValueEvent(scrollY, "change", (value) => {
    setHeroPast(value >= window.innerHeight);
  });

  const handleHeroButtonClick = () => {
    document.getElementById("Role")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={css({
        "& section + section": {
          paddingBlock: 12,
        },
      })}
    >
      <Header solidBg={heroPast} />
      <section
        className={css({
          position: "relative",
          blockSize: "100vh",
        })}
      >
        <div
          className={css({
            alignContent: "center",
            bg: "rgba(26,26,26,.45)",
            color: "var(--color-body-light)",
            display: "flex",
            flexDir: "column",
            gap: 12,
            minBlockSize: "100vh",
            placeContent: "center",
            position: "absolute",
            px: 4,
            width: "100%",
            zIndex: "var(--z-indices-overlay)",
          })}
        >
          <ContentContainer>
            <div>
              <FadeUp
                as="h1"
                className={css({
                  fontSize: "4xl",
                  fontWeight: "bold",
                  letterSpacing: "-0.02em",
                })}
              >
                Crafting interfaces that move the world
              </FadeUp>
              <FadeUp as="h2" transition={{ delay: 0.15 }}>
                <span className={css({ fontSize: "2xl" })}>
                  How I'd contribute to Mujin as a Senior Frontend Engineer
                </span>
              </FadeUp>
            </div>
            <FadeUp transition={{ delay: 0.3 }}>
              <Button onClick={() => handleHeroButtonClick()}>
                Learn more
              </Button>
            </FadeUp>
          </ContentContainer>
        </div>
        <div
          className={css({
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minBlockSize: "100vh",
            overflow: "hidden",
          })}
        >
          <video
            autoPlay={!prefersReducedMotion.matches}
            className={css({
              position: "absolute",
              inset: 0,
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
            })}
            loop={true}
            muted={true}
            poster={bgVideoPoster}
            src={bgVideo}
          />
        </div>
      </section>
      <section id="Role">
        <ContentContainer
          styles={{
            display: "grid",
            gap: 8,
            gridTemplateColumns: ["1fr", "1fr 1fr"],
            p: 4,
          }}
        >
          <div>
            <Headline level="h2">My role at Mujin</Headline>
            <p>
              I'm a senior frontend engineer specialising in React and
              TypeScript, with a track record of building accessible,
              component-driven UIs for complex domains. I'd love to join Mujin's
              Frontend System Team to improve MujinOS's real-time controller UI,
              raising the bar on responsiveness, animation fidelity, and
              maintainability while mentoring junior engineers along the way.
            </p>
          </div>
          <div
            className={css({
              borderRadius: "lg",
              minBlockSize: ["200px", 0],
              overflow: "hidden",
            })}
          >
            <img
              alt="A hand points out bad code on a tablet computer"
              className={css({
                display: "block",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                width: "100%",
              })}
              src={tabletCodeImg}
            />
          </div>
        </ContentContainer>
      </section>
      <section className={css({ bg: "var(--color-background)" })}>
        <ContentContainer>
          <motion.div
            className={css({
              bgLinear: "to-b",
              boxShadow: "xl",
              borderColor: "gray.200",
              borderRadius: 14,
              borderWidth: "1px",
              gradientFrom: "var(--color-background)",
              gradientTo: "var(--color-background-gray)",
              maxInlineSize: "calc(100vw - var(--spacing-2))",
              mx: 2,
              py: 12,
              px: 2,
            })}
            ref={cardRef}
            style={{ scale }}
          >
            <div className={css({ mb: 6, textAlign: "center" })}>
              <Headline align="center" level="h2">
                My approach to frontend engineering
              </Headline>
              <p>
                Good frontend work means bridging complex logic and the people
                who operate it. I focus on accessibility, consistency, and
                clarity, so operators can trust the interface and developers can
                maintain it.
              </p>
            </div>
            <div
              className={css({
                display: "grid",
                gap: 6,
                gridTemplateColumns: ["", "1fr 1fr"],
              })}
            >
              <div>
                <img
                  alt=""
                  className={css({
                    objectFit: "cover",
                    objectPosition: "center",
                  })}
                  src={webDevImg}
                />
              </div>
              <div
                className={css({
                  display: "flex",
                  flexDir: "column",
                  justifyContent: "space-between",
                })}
              >
                <div>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(0)}
                    open={openDetailsItem === 0}
                    summary="Performance-first engineering"
                  >
                    <p>
                      I profile, analyse bundle size, and reach for browser APIs
                      before abstractions. Satisfying UIs can't afford jank, I
                      treat performance as a feature, not a fix.
                    </p>
                  </DetailsItem>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(1)}
                    open={openDetailsItem === 1}
                    summary="Component systems that scale"
                  >
                    <p>
                      I build reusable, typed component libraries with clear
                      APIs. Consistency across a large codebase reduces
                      onboarding friction and keeps the UI predicatable and
                      maintainable.
                    </p>
                  </DetailsItem>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(2)}
                    open={openDetailsItem === 2}
                    summary="Animation & visual engineering"
                  >
                    <p>
                      From CSS transitions to SVG path animations, I implement
                      motion that communicates system state, not just
                      decoration. Relevant for a UI where users must find
                      information at a glance.
                    </p>
                  </DetailsItem>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(3)}
                    open={openDetailsItem === 3}
                    summary="Code quality & team growth"
                  >
                    <p>
                      I like a proper Lint setup and tests that catch
                      regressions before they ship. I enjoy code review as a
                      teaching tool, not a gate.
                    </p>
                  </DetailsItem>
                </div>
                <FadeUp className={css({ marginBlockStart: [2, undefined] })}>
                  <Button onClick={() => setDialogOpen(true)}>
                    Explore more
                  </Button>
                </FadeUp>
              </div>
            </div>
          </motion.div>
        </ContentContainer>
      </section>
      <section
        className={css({
          bgLinear: "to-b",
          gradientFrom: "var(--color-background)",
          gradientFromPosition: "10%",
          gradientTo: "var(--color-background-gray)",
          px: 4,
        })}
      >
        <ContentContainer>
          <Headline level="h2">What I bring to your team</Headline>
          <div
            className={css({
              display: "flex",
              flexDir: ["column", undefined, "row"],
              gap: 6,
              "& > div": {
                flexBasis: "50%",
              },
            })}
          >
            <ImageCard
              imageSrc={warehouseImg}
              listItems={["Profiling", "Bundle analysis", "Browser APIs"]}
              textContent="At Indeed and Rakuten I shipped high-traffic UIs where performance regressions had direct business impact. I profile before I optimize, and I reach for browser APIs before abstractions."
              title="Real-time UI expertise"
            />
            <ImageCard
              imageSrc={launchPlanningImg}
              listItems={["Figma", "Component design", "Design feedback"]}
              textContent="I stay involved across the full delivery cycle, design handoffs, component design, performance budgets, and release pipelines. Fewer handoff gaps, fewer surprises in production."
              title="From Figma to production"
            />
          </div>
        </ContentContainer>
      </section>
      <section
        className={css({
          bg: "var(--color-background-gray)",
        })}
      >
        <ContentContainer>
          <Headline align="center" level="h4" withDecoration={false}>
            Worked for marketleaders
          </Headline>
          <div
            className={css({
              alignItems: "center",
              display: "flex",
              flexDir: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
              marginBlockStart: 4,
              p: 4,
            })}
          >
            {[
              { alt: "Rakuten logo", src: rakutenLogo },
              { alt: "Indeed logo", src: indeedLogo },
              { alt: "CEWE Color logo", src: ceweLogo },
            ].map(({ alt, src }) => (
              <img
                alt={alt}
                className={css({
                  color: "var(--color-body)",
                  h: 10,
                  objectFit: "contain",
                })}
                key={alt}
                src={src}
              />
            ))}
          </div>
        </ContentContainer>
      </section>
      <section>
        <ContentContainer>
          <div
            className={css({
              bg: "var(--color-primary)",
              borderRadius: "lg",
              boxShadow: "md",
              color: "var(--color-body-light)",
              display: "flex",
              flexDir: ["column", undefined, "row"],
              gap: [8, undefined, 16],
              justifyContent: ["center", undefined, "flex-start"],
              marginBlockEnd: 6,
              mx: 4,
              px: 12,
              py: 6,
              "& p": {
                fontSize: "var(--font-sizes-xl)",
              },
            })}
          >
            <div>
              <h3>Let's talk about the role</h3>
              <p>
                I'd love to discuss how my experience with React, TypeScript,
                and performance optimizations to the challenges Mujin is
                solving.
              </p>
            </div>
            <motion.button
              className={css({
                alignSelf: "center",
                bg: "var(--color-background)",
                color: "var(--color-body)",
                borderRadius: "sm",
                flexGrow: 0,
                minInlineSize: "fit-content",
                p: 4,
              })}
              onClick={() => setDialogOpen(true)}
              type="button"
              whileHover={{ scale: 1.05 }}
            >
              Get in touch
            </motion.button>
          </div>
        </ContentContainer>
      </section>
      <Footer />
      <AnimatePresence>
        {dialogOpen && <ContactDialog onClose={() => setDialogOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
