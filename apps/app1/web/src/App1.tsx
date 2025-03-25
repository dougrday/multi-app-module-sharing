import { lazy, useState } from "react";
import viteLogo from "./assets/vite.svg";
import "./App1.css";
import { App2Component } from "@example/app2-shared";

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
