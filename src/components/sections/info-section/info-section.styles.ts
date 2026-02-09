import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    max-width: 1280px;
    gap: 1.5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
