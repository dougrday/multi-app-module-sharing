import { AppRoutes as App1Routes } from "@example/app1-web";
import { AppRoutes as App2Routes } from "@example/app2-web";
import { BrowserRouter, Route, Routes } from "react-router";

const HostRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App1Routes />} />
            <Route path="/app1/*" element={<App1Routes />} />
            <Route path="/app2/*" element={<App2Routes />} />
        </Routes>
    </BrowserRouter>
);

export default HostRoutes;
