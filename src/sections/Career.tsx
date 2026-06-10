import { ExternalLink, FileDown } from "lucide-react";

import resumeFile from "../../files/resume-johannes-fischer.pdf";
import { css } from "../../styled-system/css";
import ButtonLink from "../components/ButtonLink";
import CareerItem from "../components/CareerItem";
import CTACard from "../components/CTACard";
import HeadingGroup from "../components/HeadingGroup";
import { URLS } from "../const";

const Career: React.FunctionComponent = () => (
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
          Over nearly eight years I grew from Design Technologist to Senior UX
          Developer, bridging design and engineering throughout. I championed
          WCAG 2.1/2.2 compliance at scale and built Storybook integrations for
          an internal Axe-based accessibility tool adopted across multiple
          repositories. I crafted high-fidelity interactive prototypes to
          validate design decisions early, and established unit, end-to-end, and
          visual regression testing practices to maintain a reliable user
          experience. I led a cross-functional guild to architect and maintain a
          shared component library, enforcing consistency and accelerating
          development velocity across surfaces. Throughout, I partnered closely
          with designers, content strategists, and backend engineers to deliver
          cohesive UI patterns at scale.
        </p>
      </CareerItem>
      <CareerItem
        company="Rakuten"
        endDate="2018"
        role="Fullstack Developer"
        startDate="2015"
      >
        <p>
          As a full‑stack engineer on a global marketplace platform, I delivered
          features using Ruby on Rails, React, AngularJS, and Docker. I built
          reusable, scalable UI components to speed development and ensure
          consistency, refactored legacy JavaScript for better performance and
          maintainability, and modernized build pipelines with Webpack and Babel
          to shrink bundles and improve developer experience. I also implemented
          automated end‑to‑end tests with Selenium and Robot Framework to raise
          test coverage and reliability.
        </p>
      </CareerItem>
      <CareerItem
        company="Nanameue"
        endDate="2015"
        role="Front-end Developer"
        startDate="2014"
      >
        <p>
          I developed responsive websites and single-page apps with AngularJS
          and React, built a CMS for user-generated content using Ruby on Rails
          and AngularJS, and optimized sites for mobile performance while
          conducting UI/UX testing to achieve a cohesive look across screen
          sizes. I translated Photoshop designs into clean, standards‑compliant
          HTML/CSS and worked closely with designers and product managers to
          iterate quickly in a startup environment.
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
      <CTACard
        description="Want to learn more about my experience? Check out my resume or connect with me on LinkedIn."
        heading="Looking for the right team and the right opportunity."
      >
        <ButtonLink
          href={resumeFile}
          iconAfter={<FileDown />}
          size="lg"
          target="_blank"
        >
          Resume
        </ButtonLink>
        <ButtonLink
          href={URLS.LINKEDIN}
          iconAfter={<ExternalLink />}
          rel="external"
          size="lg"
          variant="secondary"
        >
          LinkedIn
        </ButtonLink>
      </CTACard>
    </div>
  </section>
);

export default Career;
