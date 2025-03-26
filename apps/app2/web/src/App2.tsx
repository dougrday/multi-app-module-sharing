import reactLogo from "./assets/react.svg";
import classes from "./App2.module.css";
import { useApp1Hook } from "@example/app1-shared";

function App2() {
    const [count, setCount] = useApp1Hook();

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={classes.logo} alt="React logo" />
                </a>
            </div>
            <h1>React is also cool</h1>
            <div className={classes.container}>
                <span>
                    This uses a hook from the <code>@example/app1-shared</code> package:
                </span>
                <div className={classes.card}>
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                </div>
            </div>
        </>
    );
}

export default App2;
