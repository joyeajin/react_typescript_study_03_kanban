import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </BrowserRouter>
);
