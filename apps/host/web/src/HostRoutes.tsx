import App1 from "@example/app1-web";
import App2 from "@example/app2-web";
import { BrowserRouter, Route, Routes } from "react-router";

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
