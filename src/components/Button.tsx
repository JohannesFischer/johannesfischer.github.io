import { buttonStyles } from "../styles/button";
import ButtonContent from "./ButtonContent";

export interface ButtonProps
  extends
    React.AriaAttributes,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.PropsWithChildren {
  /** Icon rendered after the button label. */
  iconAfter?: React.ReactNode;
  /**
   * Size of the button.
   * @default "md"
   */
  size?: "md" | "lg";
  /**
   * Visual style of the button.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary";
}

/**
 * Primary action element. Supports three visual variants, two sizes, and an optional trailing icon.
 */
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled = false,
  iconAfter,
  size = "md",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      aria-disabled={disabled}
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
