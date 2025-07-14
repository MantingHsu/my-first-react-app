import React, { useState } from "react";
import Welcome from "./Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Hello, React!</h1>
      <Welcome name="Manting" />
      <hr />
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "8px" }}>
        Subtract
      </button>
    </div>
  );
}

export default App;
