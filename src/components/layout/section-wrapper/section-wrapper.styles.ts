import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing["3xl"]}
    ${({ theme }) => theme.spacing.md};
  overflow-x: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing["4xl"]}
      ${({ theme }) => theme.spacing.xl};
  }
`;
