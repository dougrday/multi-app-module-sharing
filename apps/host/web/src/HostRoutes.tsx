import { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router";

const App1 = lazy(() => import("@example/app1-web"));
const App1Routes = lazy(() => import("@example/app1-web/routes"));
const App2Routes = lazy(() => import("@example/app2-web/routes"));

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
