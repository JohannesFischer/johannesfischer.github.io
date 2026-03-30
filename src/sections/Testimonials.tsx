import * as React from "react";

import { css } from "../../styled-system/css";

import Carousel from "../Carousel";
import HeadingGroup from "../HeadingGroup";
import Testimonial from "../Testimonial";

const Testimonials: React.FunctionComponent = () => (
  <section
    className={css({
      layerStyle: "section",
    })}
  >
    <HeadingGroup heading="Testimonials" headingSup="Peer Validations" />
    <Carousel>
      <Testimonial
        name="Pete W."
        quote="Johannes is nothing short of a god when it comes to his development knowledge and delivery here at Indeed. He was responsible for planning, architecture, and delivery the most heavily used [internal a11y] utility [...] and for the crucial storybook add-on."
        role="Accessibility Engineer, Indeed"
      />
      <Testimonial
        name="Todd O."
        quote="Johannes extensive FE experience is a major asset to the Representation team and [internal component library]. He's one of our best FE resources. He's always on top of code reviews and gives thorough and well thought out feedback."
        role="Senior UX Developer, Indeed"
      />
      <Testimonial
        name="Thomas S."
        quote="Johannes has a ton of Frontend expertise and is always sharing that knowledge in MR in helpful tips. He has been a huge help in building out the [internal component library]."
        role="Software Engineer I, Indeed"
      />
      <Testimonial
        name="Scott C."
        quote="Participating in mentorship with Johannes has continued to be a fruitful experience over this semester. In our weekly meetings he continually finds meaningful subject matter for us to discuss and work through together. [...] This has helped me stay motived and gives me purpose."
        role="Content Aggregation Engineer, Indeed"
      />
    </Carousel>
  </section>
);

export default Testimonials;
