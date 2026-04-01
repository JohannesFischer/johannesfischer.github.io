import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// @ts-expect-error Ignore type error
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
