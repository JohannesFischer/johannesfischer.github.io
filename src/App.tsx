import React, { useCallback, useEffect, useState } from "react";

import "./index.css";
import { css } from "../styled-system/css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { COLOR_SCHEMES } from "./const";
import CareerSection from "./sections/Career";
import HeroSection from "./sections/Hero";
import SkillSection from "./sections/Skills";
import TestimonialSection from "./sections/Testimonials";
import ThemeContext from "./ThemeContext";
import { usePreferredColorScheme } from "./usePreferredColorScheme";

const App = () => {
  const preferredColorScheme = usePreferredColorScheme();
  const [theme, setTheme] = useState(preferredColorScheme);

  useEffect(() => {
    setTheme(preferredColorScheme);
  }, [preferredColorScheme]);

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
        className={css({
          bg: "background",
          color: "body",
          fontSize: "md",
          minHeight: "dvh",
        })}
        data-color-mode={theme}
      >
        <Header onThemeChange={handleThemeChange} />
        <main
          className={css({
            "& section:nth-child(even)": { bg: "backgroundLight" },
          })}
        >
          <HeroSection />
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
