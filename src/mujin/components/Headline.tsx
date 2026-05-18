import headlineDecorImg from "../../../assets/images/headline-decor.svg";
import { css } from "../../../styled-system/css";

type HeadlineProps = React.PropsWithChildren & {
  align?: "start" | "center" | "end";
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  withDecoration?: boolean;
};

const Headline: React.FunctionComponent<HeadlineProps> = ({
  align = "start",
  children,
  level = "h1",
  withDecoration = true,
}) => {
  const Heading = level;

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 2,
        ...(align === "center" && {
          alignItems: "center",
        }),
        ...(align === "end" && {
          alignItems: "end",
        }),
      })}
    >
      {withDecoration && (
        <img
          alt=""
          className={css({ alignSelf: align, blockSize: "1rem" })}
          src={headlineDecorImg}
        />
      )}
      <Heading>{children}</Heading>
    </div>
  );
};

export default Headline;
