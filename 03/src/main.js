import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./components/Colorful";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <h1>Counter is: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          style={{ backgroundColor: "blue", width: "100px" }}
        >
          Increment
        </button>
      </div>
      <Colorful></Colorful>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
