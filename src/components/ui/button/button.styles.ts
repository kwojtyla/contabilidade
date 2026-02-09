import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant: "primary" | "outline" | "icon";
  $fill: boolean;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.tertiary.t700};
    color: ${({ theme }) => theme.colors.neutral.n0};
    border: none;

    &:hover {
      opacity: 0.9;
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.tertiary.t700};
    border: 1px solid ${({ theme }) => theme.colors.tertiary.t700};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.n50};
    }
  `,
  icon: css`
    background-color: ${({ theme }) => theme.colors.tertiary.t700};
    color: ${({ theme }) => theme.colors.neutral.n0};
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 3.625rem;
  padding: 0.75rem 2rem;
  font-family: ${({ theme }) =>
    theme.typography.body.regular.medium.fontFamily};
  font-weight: ${({ theme }) =>
    theme.typography.body.regular.medium.fontWeight};
  font-size: ${({ theme }) => theme.typography.body.regular.medium.fontSize};
  line-height: ${({ theme }) =>
    theme.typography.body.regular.medium.lineHeight};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ $fill }) => $fill && "width: 100%;"}
  ${({ variant }) => variantStyles[variant]}
`;
