import { App2Component } from "@example/app2-shared/components";
import viteLogo from "./assets/vite.svg";
import classes from "./App1.module.css";

function App1() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className={classes.logo} alt="Vite logo" />
                </a>
            </div>
            <h1>Vite is cool</h1>

            <div style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                <span>
                    This component is imported from <code>@example/app2-shared</code>, with its own embedded CSS module:
                </span>
                <App2Component />
            </div>
        </>
    );
}

export default App1;
