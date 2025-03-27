import { Route, Routes } from "react-router";
import App2 from "./App2";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<App2 />} />
        </Routes>
    );
};
