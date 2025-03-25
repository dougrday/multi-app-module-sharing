import { lazy, useState } from "react";
import viteLogo from "./assets/vite.svg";
import "./App1.css";

const App2Component = lazy(() => import("@example/app2-shared/components/App2Component"));

function App1() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
            </div>
            <h1>Vite is cool</h1>
            <App2Component />
        </>
    );
}

export default App1;
