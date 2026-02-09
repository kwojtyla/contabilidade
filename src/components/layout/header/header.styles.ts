import styled from "styled-components";

export const Container = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.neutral.n0};
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  ${({ $scrolled, theme }) =>
    $scrolled &&
    `
    background-color: ${theme.colors.neutral.n0}99;
    border-bottom: 1px solid ${theme.colors.neutral.n100};
    backdrop-filter: blur(40px);
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md}
      ${({ theme }) => theme.spacing.xl};
    margin: 0 auto;
  }
`;
