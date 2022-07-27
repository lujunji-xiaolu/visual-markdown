import { createTheme } from "@/lib/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    fill: {
      accent: {
        default: "#005FB8",
        secondary: "rgba(0, 95, 184, 0.9)",
        tertiary: "rgba(0, 95, 184, 0.8)",
        disabled: "rgba(0, 0, 0, 0.2169)",
      },
    },
    textOnAccent: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "#FFFFFF",
    },
  },
  typography: {
    body2: {
      fontFamily:
        "Segoe UI Variable Static Text, Roboto, Helvetica, Arial, sans-serif",
    },
  },
});

export default lightTheme;
