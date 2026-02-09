import { useEffect, useState } from "react";
import { LogoFullIcon } from "@/assets/icons/logo-full";
import { Container } from "./header.styles";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container $scrolled={scrolled}>
      <LogoFullIcon width={146} height={32} />
    </Container>
  );
};
