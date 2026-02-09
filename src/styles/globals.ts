import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const Globals = createGlobalStyle`
  :root {
    font-family: ${theme.fonts.inter};
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.neutral.n900};
    background-color: ${({ theme }) => theme.colors.neutral.n0};
  }
`;
