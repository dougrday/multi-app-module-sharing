import App1 from "@example/app1-web";
import App2 from "@example/app2-web";
import { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router";

// const App1 = lazy(() => import("@example/app1-web"));
// // FIXME: import these from a targeted import: @example/app1-web/routes and ensure nothing extra is imported
// const App1Routes = lazy(() => import("@example/app1-web").then((module) => ({ default: module.AppRoutes })));
// const App2Routes = lazy(() => import("@example/app2-web").then((module) => ({ default: module.AppRoutes })));

const HostRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App1 />} />
            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />
        </Routes>
    </BrowserRouter>
);

export default HostRoutes;
