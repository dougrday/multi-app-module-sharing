import { Outlet } from "react-router";

function App1() {
    return (
        <div>
            <h2>Pages</h2>
            <div>
                <div>
                    🟢 <a href="/app1/page1">Page 1</a>
                </div>
                <div>
                    🟢 <a href="/app1/page2">Page 2</a>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default App1;
