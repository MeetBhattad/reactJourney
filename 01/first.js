import React from "react";
import ReactDOM from "react-dom/client";

const ele1 = <h1>Hello</h1>;

function Greet(props) {
  return (
    <h2>
      {" "}
      Hi lol {props.name}. you are just {props.age}
    </h2>
  );
}

const el = <Greet name="Meet" age="21" />;

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(el);
