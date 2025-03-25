import reactLogo from "./assets/react.svg";
import "./App2.css";
import { useApp1Hook } from "@example/app1-shared";

function App2() {
    const [count, setCount] = useApp1Hook();

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>React is also cool</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
        </>
    );
}

export default App2;
