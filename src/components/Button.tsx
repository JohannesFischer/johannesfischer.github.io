import { buttonStyles } from "../styles/button";
import ButtonContent from "./ButtonContent";

export interface ButtonProps
  extends
    React.AriaAttributes,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
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
