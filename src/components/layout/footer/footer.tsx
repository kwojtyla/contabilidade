import { LogoIcon } from "@/assets/icons/logo";
import { Container, Credit, CreditLink } from "./footer.styles";

export const Footer = () => {
  return (
    <Container>
      <LogoIcon />
      <Credit>
        Desenvolvido por{" "}
        <CreditLink
          href="https://karolwojtyla.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karol Wojtyla
        </CreditLink>
      </Credit>
    </Container>
  );
};
