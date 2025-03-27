import { Route, Routes } from "react-router";
import App1 from "./App1";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<App1 />}>
                <Route path="" element={<Page1 />} />
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
            </Route>
        </Routes>
    );
};
