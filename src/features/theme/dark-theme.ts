import { createTheme } from "@/lib/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    fill: {
      accent: {
        default: "#60CDFF",
        secondary: "rgba(96, 205, 255, 0.9)",
        tertiary: "rgba(96, 205, 255, 0.8)",
        disabled: "rgba(255, 255, 255, 0.1581)",
      },
    },
    textOnAccent: {
      primary: "#000000",
      secondary: "rgba(0, 0, 0, 0.5)",
      disabled: "rgba(255, 255, 255, 0.5302)",
    },
  },
  typography: {
    body2: {
      fontFamily:
        "Segoe UI Variable Static Text, Roboto, Helvetica, Arial, sans-serif",
    },
  },
});

export default darkTheme;
