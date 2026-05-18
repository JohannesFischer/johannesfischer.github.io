import {
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
import rakutenLogo from "../../assets/images/rakuten-logo.svg";
import tabletCodeImg from "../../assets/images/tablet-code.png";
import webDevImg from "../../assets/images/webdev.png";
import bgVideo from "../../files/robot.mp4";
import { css } from "../../styled-system/css";
import Button from "./components/Button";
import ContentContainer from "./components/ContentContainer";
import DetailsItem from "./components/DetailsItem";
import FadeUp from "./components/FadeUp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Headline from "./components/Headline";

const App: React.FunctionComponent = () => {
  const [openDetailsItem, setOpenDetailsItem] = useState(-1);
  const [heroPast, setHeroPast] = useState(false);
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
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minBlockSize: "100vh",
            placeContent: "center",
            position: "absolute",
            px: 4,
            width: "100%",
            zIndex: "var(--z-indices-overlay)",
          })}
        >
          <div>
            <FadeUp
              as="h1"
              className={css({
                color: "var(--color-body-light)",
                fontSize: "4xl",
                fontWeight: "bold",
                letterSpacing: "-0.02em",
              })}
            >
              Advancing robotics with physical AI
            </FadeUp>
            <FadeUp
              as="h2"
              className={css({
                color: "var(--color-body-light)",
                fontSize: "xl",
              })}
              transition={{ delay: 0.15 }}
            >
              Frontend engineering for Mujin — the no-code robotics platform
            </FadeUp>
          </div>
          <FadeUp transition={{ delay: 0.3 }}>
            <Button onClick={() => handleHeroButtonClick()}>Learn more</Button>
          </FadeUp>
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
            src={bgVideo}
          />
        </div>
      </section>
      <section id="Role">
        <ContentContainer
          styles={{
            display: "flex",
            flexDirection: ["column", undefined, undefined, "row"],
            gap: 4,
            p: 4,
          }}
        >
          <div>
            <Headline level="h2">My role at Mujin</Headline>
            <p>
              Mujin is building the global standard for intelligent
              robotics—uniting technology, product, and operations through a
              single no-code platform: MujinOS. When powered by MujinOS, robots
              take on complex tasks so teams can deploy faster, adapt with ease,
              and scale without compromise.
            </p>
          </div>
          <img
            alt="A hand points out bad code on a tablet computer"
            className={css({
              borderRadius: 12,
              maxInlineSize: ["unset", undefined, undefined, "50%"],
              display: "block",
              width: ["100%", undefined, undefined, "initial"],
              height: ["100%", undefined, undefined, "initial"],
              objectPosition: "center center",
              objectFit: "cover",
            })}
            src={tabletCodeImg}
          />
        </ContentContainer>
      </section>
      <section className={css({ bg: "var(--color-background)" })}>
        <ContentContainer>
          <motion.div
            className={css({
              bgLinear: "to-b",
              boxShadow: "lg",
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
                MujinOS simplifies automation to drive businesses forward
              </Headline>
              <p>
                Accelerate deployment, cut engineering costs, and streamline
                control, without adding complexity. Whether automating for the
                first time or scaling an existing system, MujinOS grows with
                your company— adapting as your goals and operations change.
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
                  flexDirection: "column",
                  justifyContent: "space-between",
                })}
              >
                <div>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(0)}
                    open={openDetailsItem === 0}
                    summary="Details"
                  >
                    <p>
                      Speed to production is yours to set, with MujinOS removing
                      coding delays and integration hurdles so your systems
                      start delivering value in weeks, not months.
                    </p>
                  </DetailsItem>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(1)}
                    open={openDetailsItem === 1}
                    summary="Details2"
                  >
                    <p>
                      Speed to production is yours to set, with MujinOS removing
                      coding delays and integration hurdles so your systems
                      start delivering value in weeks, not months.
                    </p>
                  </DetailsItem>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(2)}
                    open={openDetailsItem === 2}
                    summary="Details3"
                  >
                    <p>
                      Speed to production is yours to set, with MujinOS removing
                      coding delays and integration hurdles so your systems
                      start delivering value in weeks, not months.
                    </p>
                  </DetailsItem>
                  <DetailsItem
                    onClick={() => handleOpenDetailsItem(3)}
                    open={openDetailsItem === 3}
                    summary="Details4"
                  >
                    <p>
                      Speed to production is yours to set, with MujinOS removing
                      coding delays and integration hurdles so your systems
                      start delivering value in weeks, not months.
                    </p>
                  </DetailsItem>
                </div>
                <FadeUp className={css({ marginBlockStart: [6, undefined] })}>
                  <Button>Button</Button>
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
          <Headline level="h2">
            Automate as an integrator or by industry
          </Headline>
          <div>inspirational stuff here</div>
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
              flexDirection: "row",
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
              "& p": {
                fontSize: "var(--font-sizes-xl)",
              },
              bg: "var(--color-primary)",
              borderRadius: "lg",
              boxShadow: "md",
              color: "var(--color-body-light)",
              display: "flex",
              gap: 8,
              marginBlockEnd: 6,
              mx: 4,
              px: 12,
              py: 6,
            })}
          >
            <div>
              <h3>Have a question?</h3>
              <p>
                Learn how MujinOS delivers real-time perception, motion control,
                and no-code deployment—across any robotic system
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
              type="button"
              whileHover={{ scale: 1.05 }}
            >
              Contact me
            </motion.button>
          </div>
        </ContentContainer>
      </section>
      <Footer />
    </div>
  );
};

export default App;
