import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [Password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChange] = useState(false);
  const [charChanged, setCharChange] = useState(false);

  function generatePassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChanged) {
      str += "0123456789";
    }
    if (charChanged) {
      str += "+_()*&^%$#@!";
    }
    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }

  useEffect(() => {
    generatePassword();
  }, [length, numberChanged, charChanged]);

  return (
    <>
      <h1>{Password}</h1>
      <div>
        <input
          type="range"
          min={5}
          max={15}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>Length is: {length} </label>

        <input
          type="checkbox"
          defaultChecked={numberChanged}
          onChange={() => setNumberChange(!numberChanged)}
        ></input>
        <label>Number </label>

        <input
          type="checkbox"
          defaultChecked={charChanged}
          onChange={() => setCharChange(!charChanged)}
        ></input>
        <label>Character </label>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />,
);
