import { Route, Routes } from "react-router";
import App1 from "./App1";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App1 />} />
        </Routes>
    );
};
