import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthoProvider } from "./context/FakeAuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthoProvider>
      <App />
    </AuthoProvider>
  </StrictMode>
);
