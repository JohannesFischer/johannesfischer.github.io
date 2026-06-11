import { css } from "../../styled-system/css";
import Carousel from "../components/Carousel";
import HeadingGroup from "../components/HeadingGroup";
import Testimonial from "../components/Testimonial";
import { URLS } from "../const";

const Testimonials: React.FunctionComponent = () => (
  <section
    className={css({
      layerStyle: "section",
    })}
  >
    <HeadingGroup heading="Testimonials" headingSup="Peer Feedback" />
    <Carousel>
      <Testimonial
        name="Akira S."
        quote="Whether he was leading the engineering efforts for the Indeed Apply team or optimizing workflows for our large-scale libraries, Johannes consistently balanced high technical standards with a deep understanding of UX. He is a rare engineer who can manage both infrastructure and design at scale, and I highly recommend him for any senior engineering or leadership role."
        role="Staff Software Engineer, Indeed"
        source={{ href: URLS.LINKEDIN, title: "LinkedIn" }}
      />
      <Testimonial
        name="Corey C."
        quote="Designing elegant experiences for enterprise applications is not easy, especially when the subject matter involves high-density data visualization & other business analytics, but Johannes excelled here and even went above and beyond the responsibilities normally expected from his role to deliver a high-quality experience to a vital customer base. Any company looking for a knowledgeable, dedicated colleague that’s also a pleasure to work with would be fortunate to have Johannes as part of the team."
        role="UX Director, Indeed"
        source={{ href: URLS.LINKEDIN, title: "LinkedIn" }}
      />
      <Testimonial
        name="Pete W."
        quote="Johannes is nothing short of a god when it comes to his development knowledge and delivery here at Indeed. He was responsible for planning, architecture, and delivery the most heavily used [internal a11y] utility [...] and for the crucial storybook add-on."
        role="Accessibility Engineer, Indeed"
        source={{ title: "Internal peer review" }}
      />
      <Testimonial
        name="Todd O."
        quote="Johannes extensive FE experience is a major asset to the Representation team and [internal component library]. He's one of our best FE resources. He's always on top of code reviews and gives thorough and well thought out feedback."
        role="Senior UX Developer, Indeed"
        source={{ title: "Internal peer review" }}
      />
      <Testimonial
        name="Thomas S."
        quote="Johannes has a ton of Frontend expertise and is always sharing that knowledge in MR in helpful tips. He has been a huge help in building out the [internal component library]."
        role="Software Engineer I, Indeed"
        source={{ title: "Internal peer review" }}
      />
      <Testimonial
        name="Scott C."
        quote="Participating in mentorship with Johannes has continued to be a fruitful experience over this semester. In our weekly meetings he continually finds meaningful subject matter for us to discuss and work through together. [...] This has helped me stay motivated and gives me purpose."
        role="Content Aggregation Engineer, Indeed"
        source={{ title: "Internal peer review" }}
      />
    </Carousel>
  </section>
);

export default Testimonials;
