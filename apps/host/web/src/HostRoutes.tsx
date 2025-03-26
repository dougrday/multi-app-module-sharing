// FIXME: import these from a targeted import: @example/app1-web/routes and ensure nothing extra is imported
import App1, { AppRoutes as App1Routes } from "@example/app1-web";
import { AppRoutes as App2Routes } from "@example/app2-web";
import { Routes, Route, BrowserRouter } from "react-router";

const HostRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App1 />} />
            <Route path="/app1/*" element={<App1Routes />} />
            <Route path="/app2/*" element={<App2Routes />} />
        </Routes>
    </BrowserRouter>
);

export default HostRoutes;
