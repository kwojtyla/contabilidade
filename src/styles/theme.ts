const fonts = {
  inter: "Inter, sans-serif",
  poppins: "Poppins, sans-serif",
} as const;

const spacing = {
  xs: "0.5rem", // 8px
  sm: "0.75rem", // 12px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.25rem", // 36px
  "3xl": "2.5rem", // 40px
  "4xl": "3.75rem", // 60px
} as const;

export const theme = {
  colors: {
    primary: {
      p500: "#2BBE41",
      p200: "#83E87C",
      p50: "#D4FFD1",
    },
    neutral: {
      n0: "#FFFFFF",
      n50: "#F5F5F5",
      n100: "#E0E1E2",
      n200: "#C6C8CB",
      n400: "#6C7278",
      n600: "#41484E",
      n900: "#1E2124",
    },
    foundation: {
      neutral: {
        n900: "#1E2124",
        n600: "#41484E",
      },
    },
    tertiary: {
      t700: "#2B79DF",
    },
  },
  spacing,
  fonts,
  typography: {
    mobile: {
      h3: {
        fontFamily: fonts.poppins,
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
    desktop: {
      h3: {
        fontFamily: fonts.poppins,
        fontWeight: 500,
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
      },
    },
    body: {
      small: {
        medium: {
          fontFamily: fonts.inter,
          fontWeight: 500,
          fontSize: "0.75rem",
          lineHeight: "1.5rem",
        },
        bold: {
          fontFamily: fonts.inter,
          fontWeight: 700,
          fontSize: "0.5rem",
          lineHeight: "1.5rem",
        },
      },
      regular: {
        medium: {
          fontFamily: fonts.inter,
          fontWeight: 500,
          fontSize: "1rem",
          lineHeight: "1.5rem",
        },
        bold: {
          fontFamily: fonts.inter,
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: "1.5rem",
        },
      },
      big: {
        medium: {
          fontFamily: fonts.inter,
          fontWeight: 500,
          fontSize: "1.125rem",
          lineHeight: "1.5rem",
        },
        bold: {
          fontFamily: fonts.inter,
          fontWeight: 700,
          fontSize: "1.125rem",
          lineHeight: "1.5rem",
        },
      },
    },
  },
  breakpoints: {
    mobile: "22.5em",
    tablet: "48em",
    desktop: "64em",
  },
};

export type Theme = typeof theme;
