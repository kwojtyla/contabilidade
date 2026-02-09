import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.neutral.n50};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.n100};
`;

export const Credit = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutral.n400};
  margin: 0;
`;

export const CreditLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.p500};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
