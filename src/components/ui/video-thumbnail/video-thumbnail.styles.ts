import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 328 / 224;
  border-radius: 1.875rem;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 476px;
    aspect-ratio: 476 / 326;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.2s ease-in-out;

  ${Container}:hover & {
    filter: brightness(0.7);
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.primary.p200};
  border: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.neutral.n0};

  &:hover {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(1.05);
  }
`;
