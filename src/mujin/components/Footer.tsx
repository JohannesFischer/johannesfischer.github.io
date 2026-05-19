import logoImg from "../../../assets/images/jfischer-logo-color.png";
import resumeFile from "../../../files/resume-johannes-fischer.pdf";
import { css } from "../../../styled-system/css";
import ContentContainer from "./ContentContainer";

const Footer = () => (
  <footer>
    <div
      className={css({
        bg: "#e7e7e7",
        py: 6,
        px: 4,
        "& a": {
          fontSize: "var(--font-sizes-sm)",
        },
      })}
    >
      <ContentContainer>
        <img
          alt="Fake Mujin logo - changed to jfischer"
          src={logoImg}
          width={200}
        />
        <div
          className={css({
            display: "grid",
            gap: [8, undefined, "initial"],
            gridTemplateColumns: [
              "repeat(2, minmax(50px,1fr));",
              "repeat(3, minmax(100px,1fr));",
            ],
            gridAutoRows: "min-content",
            marginBlockStart: 12,
            "& h6": {
              marginBlockEnd: 4,
            },
            "& a": {
              color: "var(--color-link)",
              transition: "color .25s",
              _hover: {
                color: "var(--color-link-hover)",
              },
            },
          })}
        >
          <div>
            <h6>Built with</h6>
            <ul>
              <li>
                <a href="https://react.dev" rel="external" target="_blank">
                  React
                </a>
              </li>
              <li>
                <a href="https://vite.dev" rel="external" target="_blank">
                  Vite
                </a>
              </li>
              <li>
                <a href="https://panda-css.com" rel="external" target="_blank">
                  Panda CSS
                </a>
              </li>
              <li>
                <a href="https://motion.dev" rel="external" target="_blank">
                  Motion
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Assets</h6>
            <ul>
              <li>
                <a
                  href="https://gemini.google.com/"
                  rel="external"
                  target="_blank"
                >
                  Gemini (video & image creation)
                </a>
              </li>
              <li>
                <a
                  href="https://www.fontshare.com/fonts/switzer"
                  rel="external"
                  target="_blank"
                >
                  Switzer Font
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              <li>
                <a
                  href="https://johannesfischer.github.io/"
                  rel="external"
                  target="_blank"
                >
                  My Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/johannestheuxguy/"
                  rel="external"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/JohannesFischer"
                  rel="external"
                  target="_blank"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href={resumeFile} target="_blank">
                  Download my resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContentContainer>
    </div>
    <div
      className={css({
        bg: "#3f4345",
        color: "var(--color-body-light)",
        p: 4,
      })}
    >
      <ContentContainer
        styles={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>&copy; copyright 2026</div>
        <a
          href="https://github.com/JohannesFischer/johannesfischer.github.io/tree/master/src/mujin"
          rel="external"
          target="_blank"
        >
          source
        </a>
      </ContentContainer>
    </div>
  </footer>
);

export default Footer;
