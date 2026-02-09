import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.5rem 1rem;
  overflow-x: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.75rem 2rem;
  }
`;
