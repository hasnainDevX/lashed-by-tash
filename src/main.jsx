import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "@fontsource/cormorant/300.css";
import "@fontsource/cormorant/400.css";
import "@fontsource/cormorant/700.css";
import "@fontsource/cormorant/300-italic.css";
import "@fontsource/cormorant/400-italic.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
