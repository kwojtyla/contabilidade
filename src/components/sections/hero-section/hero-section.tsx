import heroThumbnail from "@/assets/img/hero-thumbnail.webp";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { VideoThumbnail } from "@/components/ui/video-thumbnail";
import { H3, P } from "@/components/ui/typography";
import {
  ActionsContainer,
  Blur,
  Buttons,
  Container,
  Content,
  TextContainer,
} from "./hero-section.styles";
import { Button } from "@/components/ui/button";
import { VIDEO_URL } from "@/constants/urls";

export const HeroSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <Blur />
        <Content>
          <TextContainer>
            <H3>Quanto custa a contabilidade online em 2026?</H3>
            <P>
              Descubra os preços médios do mercado e veja como a
              contabilidade.com oferece planos acessíveis, abertura grátis e
              suporte completo para o seu CNPJ.
            </P>
          </TextContainer>
          <ActionsContainer>
            <Buttons>
              <Button fill>Planos e Preços</Button>
              <Button variant="outline" fill>
                Falar com especialista
              </Button>
            </Buttons>
            <P size="small" weight="medium">
              CRC SP-2SP038830/O-1
            </P>
          </ActionsContainer>
        </Content>

        <VideoThumbnail
          src={VIDEO_URL}
          thumbnailSrc={heroThumbnail}
          thumbnailAlt="Apresentação sobre contabilidade online"
        />
      </Container>
    </SectionWrapper>
  );
};
