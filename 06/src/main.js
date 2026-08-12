import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import ReactDom from "react-dom/client";
import Increment from "./increment.js"
import Decrement from "./decrement.js";
import { useContext } from "react";
import GlobalContext from "./global.js";

function App(){

  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalContext.Provider value={{ count, setCount }}>
        <h1>Parent Counter is: {count}</h1>

        <Increment />

        <Decrement />
      </GlobalContext.Provider>
    </>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);