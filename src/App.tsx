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
import { grid } from "../styled-system/patterns";
import { URLS } from "./const";

import ButtonLink from "./ButtonLink";
import CareerItem from "./CareerItem";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import HeadingGroup from "./HeadingGroup";
import SkillCard from "./SkillCard";
import Status from "./Status";
import Testimonial from "./Testimonial.tsx";
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
            "& section:nth-child(even)": { background: "backgroundLight" },
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
              className={grid({
                columnGap: [6, undefined, 8],
                columns: [2, 3],
                rowGap: 12,
                minChildWidth: "1fr",
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
              layerStyle: "section",
            })}
          >
            <HeadingGroup
              heading="Testimonials"
              headingSup="Peer Validations"
            />
            <Carousel>
              <Testimonial
                name="Pete W."
                quote="Johannes is nothing short of a god when it comes to his development knowledge and delivery here at Indeed. He was responsible for planning, architecture, and delivery the most heavily used [internal a11y] utility [...] and for the crucial storybook add-on."
                role="Accessibility Engineer, Indeed"
              />
              <Testimonial
                name="Thomas H."
                quote="Johannes has a ton of Frontend expertise and is always sharing that knowledge in MR in helpful tips. He has been a huge help in building out the [internal component library]."
                role="Software Engineer I, Indeed"
              />
              <Testimonial
                name="Todd O."
                quote="Johannes has a ton of Frontend expertise and is always sharing that knowledge in MR in helpful tips. He has been a huge help in building out the JSPL components used in all of the rezQ modules and helped land the updated libraries into our modules containing rezQ fields MR."
                role="Senior UX Developer, Indeed"
              />
              <Testimonial
                name="Scott C."
                quote="Participating in mentorship with Johannes has continued to be a fruitful experience over this semester. In our weekly meetings he continually finds meaningful subject matter for us to discuss and work through together. [...] This has helped me stay motived and gives me purpose."
                role="Content Aggregation Engineer, Indeed"
              />
            </Carousel>
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
                role="Senior UX Developer"
                startDate="2018"
              >
                <p>
                  I translated UX concepts into interactive prototypes and
                  production-ready React components, bridging design and
                  engineering to deliver user-centered solutions. I built and
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
                <ul
                  className={css({
                    "& span": {
                      color: "textSecondary",
                      _before: { content: '"– "' },
                    },
                  })}
                >
                  <li>
                    Cewe Color Group <span>Web Developer</span>
                  </li>
                  <li>
                    hmmh Multimedia Haus <span>Web Developer</span>
                  </li>
                  <li>
                    New Voice GmbH <span>Web Developer</span>
                  </li>
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
