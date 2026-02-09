import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    width: 100%;
    max-width: 1024px;
  }
`;

export const Blur = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary.p50};
  filter: blur(100px);
  z-index: -1;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 700px;
    height: 700px;
    left: 10%;
    transform: translate(-50%, -70%);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: 1;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
    align-items: flex-start;
    max-width: 26rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;
