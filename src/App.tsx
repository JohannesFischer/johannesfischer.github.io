import React, { useCallback, useState } from "react";

import "./index.css";
import { css } from "../styled-system/css";
import { COLOR_SCHEMES } from "./const";
import { getPreferredColorScheme } from "./utils";

import CareerSection from "./sections/Career";
import Footer from "./Footer";
import Header from "./Header";
import IntroSection from "./sections/Intro";
import SkillSection from "./sections/Skills";
import TestimonialSection from "./sections/Testimonials";
import ThemeContext from "./ThemeContext";

const App = () => {
  const preferredColorScheme = getPreferredColorScheme();
  const [theme, setTheme] = useState(preferredColorScheme);

  const handleThemeChange = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(
    () =>
      setTheme(
        theme === COLOR_SCHEMES.DARK ? COLOR_SCHEMES.LIGHT : COLOR_SCHEMES.DARK,
      ),
    [theme, setTheme],
  );

  return (
    <ThemeContext value={theme}>
      <div
        data-color-mode={theme}
        className={css({
          bg: "background",
          color: "body",
          fontSize: "md",
          minHeight: "dvh",
        })}
      >
        <Header onThemeChange={handleThemeChange} />
        <main
          className={css({
            "& section:nth-child(even)": { bg: "backgroundLight" },
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
