import React, { useState, useCallback, useEffect, useMemo } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState("");

  const fibonac = useCallback((n) => {
    if (n <= 1) return n;

    return fibonac(n - 1) + fibonac(n - 2);
  }, []);

  const result = useMemo(() => {
    return fibonac(number);
  }, [number]);

  return (
    <>
      <h1> Counter is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <div>
        <h2> Fibonnaci number is: {result} </h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
