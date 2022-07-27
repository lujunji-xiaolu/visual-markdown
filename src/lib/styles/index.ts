export * from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    elevation: {
      control: {
        border: string;
        borderBottomColor: string;
      };
    };
    stroke: {
      control: {
        default: string;
      };
    };
  }

  interface Palette {
    fill: {
      accent: {
        default: string;
        secondary: string;
        tertiary: string;
        disabled: string;
      };
      control: {
        default: string;
        secondary: string;
        tertiary: string;
        disabled: string;
      };
    };
    textOnAccent: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  }
  interface PaletteOptions {
    fill: {
      accent: {
        default: string;
        secondary: string;
        tertiary: string;
        disabled: string;
      };
      control: {
        default: string;
        secondary: string;
        tertiary: string;
        disabled: string;
      };
    };
    textOnAccent: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  }

  interface PaletteColor {}
  interface SimplePaletteColorOptions {}
  interface ThemeOptions {
    elevation: {
      control: {
        border: string;
        borderBottomColor: string;
      };
    };
    stroke: {
      control: {
        default: string;
      };
    };
  }
}
