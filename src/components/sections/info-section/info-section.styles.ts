import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["2xl"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    max-width: 1024px;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 376px;
`;

export const Image = styled.img`
  width: 100%;
  height: 201px;
  object-fit: cover;
  border-radius: 1.875rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 309px;
  }
`;
