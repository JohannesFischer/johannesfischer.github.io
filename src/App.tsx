import { useContext } from "react";
import {
  BugOff,
  Code,
  Combine,
  Palette,
  PersonStanding,
  Puzzle,
  Rocket,
} from "lucide-react";

import "./index.css";
import { css } from "../styled-system/css";
import { URLS } from "./const";

import ButtonLink from "./ButtonLink";
import CareerItem from "./CareerItem";
import Footer from "./Footer";
import Header from "./Header";
import HeadingGroup from "./HeadingGroup";
import SkillCard from "./SkillCard";
import Status from "./Status";
import ThemeContext from "./ThemeContext";

const App = () => {
  const colorScheme = useContext(ThemeContext);

  return (
    <ThemeContext value={colorScheme}>
      <div
        data-color-mode={colorScheme}
        className={css({
          backgroundColor: "background",
          color: "body",
          fontSize: "16px",
          minHeight: "100vh",
        })}
      >
        <Header />
        <main
          className={css({
            "& section:nth-child(2)": { background: "backgroundLight" },
          })}
        >
          <section className={css({ layerStyle: "section" })}>
            <Status />
            <h1
              className={css({
                textStyle: "heading.h1",
                "& span": {
                  color: "primary/80",
                },
              })}
            >
              Design-minded <span>developer</span> shipping real user value
            </h1>
            <p
              className={css({
                borderInlineStart: "1px solid",
                borderColor: "primary",
                maxWidth: ["initial", undefined, "60vw"],
                paddingBlock: 4,
                paddingInlineStart: 6,
                textWrap: "pretty",
              })}
            >
              I’m a frontend developer specializing in fast, accessible, and
              maintainable web interfaces. I turn designs into responsive,
              component-driven code, optimize performance, and focus on
              satisfying user interactions — all with attention to accessibility
              and scalability.
            </p>
          </section>
          <section className={css({ layerStyle: "section" })}>
            <HeadingGroup
              heading="Technical Skills"
              headingSup="Stack / Capabilities"
            />
            <div
              className={css({
                columnGap: [6, undefined, 8],
                display: "grid",
                gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
                rowGap: 12,
              })}
            >
              <SkillCard
                icon={<Code strokeWidth={2} />}
                title="Frontend_Coding"
              >
                JavaScript / TypeScript / React / Vue
              </SkillCard>
              <SkillCard icon={<Palette strokeWidth={2} />} title="UI_Design">
                CSS-in-JS / Emotion / Design_Systems
              </SkillCard>
              <SkillCard
                icon={<PersonStanding strokeWidth={2} />}
                title="Accessibility"
              >
                A11y Testing / WCAG / Automation_Testing
              </SkillCard>
              <SkillCard icon={<BugOff strokeWidth={2} />} title="Testing">
                Jest / Vitest / Cypress / Chromatic
              </SkillCard>
              <SkillCard
                icon={<Combine strokeWidth={2} />}
                title="State_Management"
              >
                Redux / Redux_Toolkit / Zustand
              </SkillCard>
              <SkillCard icon={<Rocket strokeWidth={2} />} title="Deployment">
                GitLab_CI / Docker / Jenkins
              </SkillCard>
              <SkillCard icon={<Puzzle strokeWidth={2} />} title="Dev_Tools">
                StoryBook / Git / AI assisted development
              </SkillCard>
            </div>
          </section>
          <section
            className={css({
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 2fr"],
              layerStyle: "section",
            })}
          >
            <HeadingGroup heading="Experience" headingSup="Career" />
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                rowGap: [8, undefined, 12],
              })}
            >
              <CareerItem
                company="Indeed"
                endDate="03.2026"
                role="Senior Front-end Developer"
                startDate="2018"
              >
                <p>
                  I translated UX concepts into interactive prototypes and
                  production-ready React components, bridging design and
                  engineering to deliver user-centered solutions. I build and
                  maintained the company design system and internal component
                  libraries to ensure visual consistency, and I collaborated
                  closely with product managers, designers, and developers. My
                  sophisticated prototypes validated design decisions and helped
                  communicate ideas clearly to stakeholders.
                </p>
              </CareerItem>
              <CareerItem
                company="Rakuten"
                endDate="2018"
                role="Fullstack Developer"
                startDate="2015"
              >
                <p>
                  As a full‑stack engineer on a global marketplace platform, I
                  delivered features using Ruby on Rails, React, AngularJS, and
                  Docker. I built reusable, scalable UI components to speed
                  development and ensure consistency, refactored legacy
                  JavaScript for better performance and maintainability, and
                  modernized build pipelines with Webpack and Babel to shrink
                  bundles and improve developer experience. I also implemented
                  automated end‑to‑end tests with Selenium and Robot Framework
                  to raise test coverage and reliability.
                </p>
              </CareerItem>
              <CareerItem
                company="Nanameue"
                endDate="2018"
                role="Front-end Developer"
                startDate="2014"
              >
                <p>
                  I developed responsive websites and single-page apps with
                  AngularJS and React, built a CMS for user-generated content
                  using Ruby on Rails and AngularJS, and optimized sites for
                  mobile performance while conducting UI/UX testing to ensure
                  visual consistency across devices. I translated Photoshop
                  designs into clean, standards‑compliant HTML/CSS and worked
                  closely with designers and product managers to iterate quickly
                  in a fast‑paced startup environment.
                </p>
              </CareerItem>

              <CareerItem role="Previous Experiences">
                <ul>
                  <li>Cewe Color Group - Web Developer</li>
                  <li>hmmh Multimedia Haus - Web Developer</li>
                  <li>New Voice GmbH - Web Developer</li>
                </ul>
              </CareerItem>
              <div
                className={css({
                  background: "buttonSecondary",
                  borderBlockStart: "2px solid",
                  borderColor: "primary",
                  display: "flex",
                  flexDir: "column",
                  rowGap: 4,
                  padding: 6,
                })}
              >
                <h4 className={css({ textStyle: "heading" })}>
                  I'm looking for the next challenge
                </h4>
                <p>
                  Want to learn more about my experience? Check out my resume or
                  connect with me on LinkedIn.
                </p>
                <div
                  className={css({
                    display: "flex",
                    gap: 4,
                    marginBlockStart: 4,
                  })}
                >
                  <ButtonLink href={URLS.RESUME} size="lg">
                    Resume
                  </ButtonLink>
                  <ButtonLink
                    href={URLS.LINKEDIN}
                    rel="external"
                    size="lg"
                    variant="secondary"
                  >
                    LinkedIn
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeContext>
  );
};

export default App;
