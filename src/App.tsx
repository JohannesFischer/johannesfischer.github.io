import { useContext } from "react";

import "./index.css";
import { css } from "../styled-system/css";

import CareerSection from "./sections/Career";
import Footer from "./Footer";
import Header from "./Header";
import IntroSection from "./sections/Intro";
import SkillSection from "./sections/Skills";
import TestimonialSection from "./sections/Testimonials";
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
          <IntroSection />
          <SkillSection />
          <TestimonialSection />
          <CareerSection />
        </main>
        <Footer />
      </div>
    </ThemeContext>
  );
};

export default App;
