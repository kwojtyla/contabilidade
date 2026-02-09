import { StyledButton } from "./button.styles";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "outline" | "icon";
  fill?: boolean;
}

export function Button({
  variant = "primary",
  fill = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton variant={variant} $fill={fill} {...props}>
      {children}
    </StyledButton>
  );
}
