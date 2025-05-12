import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { getCurrentUser } from "./utils/utils";
function App() {
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      setUserName(user);
    })();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{userName}</h1>
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + Frappe + Hashib</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
