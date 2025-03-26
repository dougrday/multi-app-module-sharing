import { App2Component } from "@example/app2-shared";
import viteLogo from "./assets/vite.svg";
import classes from "./App1.module.css";

function App1() {
    return (
        <>
            <div className={classes.logo}>
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
