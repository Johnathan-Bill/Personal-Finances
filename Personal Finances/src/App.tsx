import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { db } from "./lib/db";
import { useLiveQuery } from "dexie-react-hooks";

function App() {
  const [count, setCount] = useState(0);

  async function addTest() {
    try {
      const id = await db.tests.add({
        desc: "test",
      });
      console.log(id);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  const tests = useLiveQuery(() => db.tests.toArray());

  async function LogTests() {
    tests?.map((test) => {
      console.log(`ID : ${test.id} - Desc ${test.desc}`);
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={addTest}>Add</button>
      <button onClick={LogTests}>Log</button>
    </>
  );
}

export default App;
