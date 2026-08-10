import { useState, useEffect } from "react";

function Colorful() {
  const [color, setColor] = useState("black");

  document.body.style.backgroundColor = color;

  return (
    <>
      <h1>Background Color Changer</h1>
      <div className="butt">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </>
  );
}

export default Colorful;
