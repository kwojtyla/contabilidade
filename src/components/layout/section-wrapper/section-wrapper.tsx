import { Container } from "./section-wrapper.styles";

export const SectionWrapper = ({
  children,
}: React.ComponentProps<"section">) => {
  return <Container>{children}</Container>;
};
