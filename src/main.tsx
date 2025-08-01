import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import "./index.css";

import { theme as designSystemTheme } from "./design-system";

const theme = {
  ...designSystemTheme,
  colors: {
    ...designSystemTheme.colors,
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
  },
  breakpoints: {
    ...designSystemTheme.breakpoints,
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
