import { css } from "../../styled-system/css";
import { type ButtonProps } from "./Button";

type ButtonContentProps = React.PropsWithChildren &
  Pick<ButtonProps, "iconAfter">;

const ButtonContent: React.FunctionComponent<ButtonContentProps> = ({
  children,
  iconAfter,
}) => (
  <span className={css({ alignItems: "center", display: "flex", gap: 2 })}>
    {children}
    {iconAfter}
  </span>
);

export default ButtonContent;
