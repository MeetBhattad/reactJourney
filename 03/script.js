import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let [count, setCount] = useState(0);

  function incr() {
    count = count + 1;
    setCount(count);
    //document.querySelector("h1").innerText = `count is: ${count}`;
  }

  function decr() {
    count = count - 1;
    setCount(count);
    //document.querySelector("h1").innerText = `count is: ${count}`;
  }
  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <button onClick={incr}>Increment: {count}</button>
      <button onClick={decr}>Decrement: {count}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
