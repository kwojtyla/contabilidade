import infoImage from "@/assets/img/info-image.webp";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { H3, P, Strong } from "@/components/ui/typography";
import {
  Container,
  Description,
  Image,
  ImageContainer,
  TextContainer,
} from "./info-section.styles";

export const InfoSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <TextContainer>
          <H3>O preço da contabilidade no Brasil</H3>
          <Description>
            <P>
              Um contador tradicional costuma cobrar entre{" "}
              <Strong>R$ 600</Strong> e <Strong>R$ 1.200</Strong> por mês para
              empresas de serviços de pequeno porte. Esse valor varia de acordo
              com o regime tributário, quantidade de notas fiscais emitidas e
              folha de pagamento.
            </P>
            <P>
              O problema é que, além do preço mais alto, a contabilidade
              tradicional geralmente envolve mais burocracia, digitação e
              processos manuais.
            </P>
          </Description>
        </TextContainer>
        <ImageContainer>
          <Image
            src={infoImage}
            alt="Mulher usando notebook em ambiente de trabalho moderno"
          />
        </ImageContainer>
      </Container>
    </SectionWrapper>
  );
};
