import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HostRoutes from "./HostRoutes";
import Header from "./Header";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <HostRoutes />
    </StrictMode>,
);
