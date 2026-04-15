import ButtonContent from "./ButtonContent";
import { buttonStyles } from "../styles/button";

export interface ButtonProps
  extends
    React.PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AriaAttributes {
  iconAfter?: React.ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled = false,
  iconAfter,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={buttonStyles({
        disabled,
        size,
        variant,
      })}
    >
      <ButtonContent iconAfter={iconAfter}>{children}</ButtonContent>
    </button>
  );
};

export default Button;
