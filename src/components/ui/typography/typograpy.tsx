import styled from "styled-components";

interface TypographyProps {
  align?: "left" | "center" | "right" | "justify";
}

interface ParagraphProps extends TypographyProps {
  size?: "regular" | "big";
  weight?: "medium" | "bold";
}

export const H3 = styled.h3<TypographyProps>`
  font-family: ${({ theme }) => theme.typography.mobile.h3.fontFamily};
  font-weight: ${({ theme }) => theme.typography.mobile.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.mobile.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.mobile.h3.lineHeight};
  color: ${({ theme }) => theme.colors.neutral.n900};
  text-align: ${({ align }) => align || "inherit"};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.desktop.h3.fontSize};
    line-height: ${({ theme }) => theme.typography.desktop.h3.lineHeight};
  }
`;

export const P = styled.p<ParagraphProps>`
  font-family: ${({ theme, size = "regular", weight = "medium" }) =>
    theme.typography.body[size][weight].fontFamily};
  font-weight: ${({ theme, size = "regular", weight = "medium" }) =>
    theme.typography.body[size][weight].fontWeight};
  font-size: ${({ theme, size = "regular", weight = "medium" }) =>
    theme.typography.body[size][weight].fontSize};
  line-height: ${({ theme, size = "regular", weight = "medium" }) =>
    theme.typography.body[size][weight].lineHeight};
  color: ${({ theme }) => theme.colors.neutral.n900};
  text-align: ${({ align }) => align || "inherit"};
`;

export const Strong = styled.strong`
  font-family: ${({ theme }) => theme.typography.body.regular.bold.fontFamily};
  font-weight: ${({ theme }) => theme.typography.body.regular.bold.fontWeight};
`;
