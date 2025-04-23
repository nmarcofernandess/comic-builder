import {HeroUIProvider, ToastProvider} from "@heroui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

// Create root and render app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <App />
    </HeroUIProvider>
  </React.StrictMode>
);