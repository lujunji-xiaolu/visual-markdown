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
      control: {
        default: "rgba(255, 255, 255, 0.7)",
        secondary: "rgba(249, 249, 249, 0.5)",
        tertiary: "rgba(249, 249, 249, 0.3)",
        disabled: "rgba(255, 255, 255, 0.786)",
      },
    },
    text: {
      primary: "rgba(0, 0, 0, 0.8956)",
      secondary: "rgba(0, 0, 0, 0.6063)",
      disabled: "rgba(0, 0, 0, 0.3614)",
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
  elevation: {
    control: {
      border: "1px solid rgba(0, 0, 0, 0.0578)",
      borderBottomColor: "rgba(0, 0, 0, 0.1622)",
    },
  },
  stroke: {
    control: {
      default: "rgba(0, 0, 0, 0.0578)",
    },
  },
});

export default lightTheme;
