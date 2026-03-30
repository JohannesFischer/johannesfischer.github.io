import * as React from "react";

import { css } from "../../styled-system/css";

import { URLS } from "../const";
import ButtonLink from "../ButtonLink";
import CareerItem from "../CareerItem";
import HeadingGroup from "../HeadingGroup";

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
          I translated UX concepts into interactive prototypes and
          production-ready React components, bridging design and engineering to
          deliver user-centered solutions. I built and maintained the company
          design system and internal component libraries to ensure visual
          consistency, and I collaborated closely with product managers,
          designers, and developers. My sophisticated prototypes validated
          design decisions and helped communicate ideas clearly to stakeholders.
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
        endDate="2018"
        role="Front-end Developer"
        startDate="2014"
      >
        <p>
          I developed responsive websites and single-page apps with AngularJS
          and React, built a CMS for user-generated content using Ruby on Rails
          and AngularJS, and optimized sites for mobile performance while
          conducting UI/UX testing to ensure visual consistency across devices.
          I translated Photoshop designs into clean, standards‑compliant
          HTML/CSS and worked closely with designers and product managers to
          iterate quickly in a fast‑paced startup environment.
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
          Want to learn more about my experience? Check out my resume or connect
          with me on LinkedIn.
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
);

export default Career;
