import { Container } from "./section-wrapper.styles";

interface SectionWrapperProps {
  children: React.ReactNode;
}

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <Container>{children}</Container>;
};
