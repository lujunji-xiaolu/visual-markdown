import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { AutoChangeTheme } from "@/features/theme";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AutoChangeTheme>
      <CssBaseline />
      <App />
    </AutoChangeTheme>
  </React.StrictMode>
);
