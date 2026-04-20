import {
  BugOff,
  Code,
  Combine,
  Palette,
  PersonStanding,
  Puzzle,
  Rocket,
} from "lucide-react";

import { css } from "../../styled-system/css";
import { grid } from "../../styled-system/patterns";
import HeadingGroup from "../components/HeadingGroup";
import SkillCard from "../components/SkillCard";

const Skills: React.FunctionComponent = () => (
  <section className={css({ layerStyle: "section" })}>
    <HeadingGroup
      heading="Technical Skills"
      headingSup="Stack / Capabilities"
    />
    <div
      className={grid({
        columnGap: [undefined, 6, 8],
        columns: [1, 2, 3],
        minChildWidth: "1fr",
        rowGap: 12,
      })}
    >
      <SkillCard icon={<Code strokeWidth={2} />} title="Frontend_Coding">
        JavaScript / TypeScript / React / Vue
      </SkillCard>
      <SkillCard icon={<Palette strokeWidth={2} />} title="UI_Design">
        CSS-in-JS / Emotion / Design Systems
      </SkillCard>
      <SkillCard
        icon={<PersonStanding strokeWidth={2} />}
        title="Accessibility"
      >
        A11y Testing / WCAG / Automation Testing
      </SkillCard>
      <SkillCard icon={<BugOff strokeWidth={2} />} title="Testing">
        Jest / Vitest / Testing Library / Cypress / Chromatic
      </SkillCard>
      <SkillCard icon={<Rocket strokeWidth={2} />} title="Deployment">
        GitLab CI / Docker / Jenkins
      </SkillCard>
      <SkillCard icon={<Puzzle strokeWidth={2} />} title="Dev_Tools">
        StoryBook / Git / AI assisted development
      </SkillCard>
      <SkillCard icon={<Combine strokeWidth={2} />} title="State_Management">
        Redux / Redux Toolkit / Zustand
      </SkillCard>
    </div>
  </section>
);

export default Skills;
