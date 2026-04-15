import { css } from "../../styled-system/css";
import Status from "../Status";

const Intro: React.FunctionComponent = () => (
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
      component-driven code, optimize performance, and focus on satisfying user
      interactions — all with attention to accessibility and scalability.
    </p>
  </section>
);

export default Intro;
