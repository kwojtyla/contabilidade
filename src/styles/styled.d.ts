import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        p500: string;
        p200: string;
        p50: string;
      };
      neutral: {
        n0: string;
        n50: string;
        n100: string;
        n200: string;
        n400: string;
        n600: string;
        n900: string;
      };
      foundation: {
        neutral: {
          n900: string;
          n600: string;
        };
      };
      tertiary: {
        t700: string;
      };
    };
  }
}
