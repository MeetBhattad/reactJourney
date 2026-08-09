import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";
import arr from "./utils/dummy";

function App() {
  let [A, setA] = useState(arr);
  function sortPrice() {
    A.sort((a, b) => a.price - b.price);
    setA([...A]);
  }

  function above599() {
    const B = arr.filter((value) => value.price > 599);
    setA(B);
  }
  return (
    <>
      <Header />
      <button onClick={sortPrice}>Sort by Price</button>
      <button onClick={above599}>Items above 599</button>
      <div
        className="middle"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {A.map((value, index) => (
          <Card
            key={index}
            cloth={value.cloth}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
