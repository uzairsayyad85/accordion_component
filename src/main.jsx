import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App-v1"
import App from "./App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
