import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";
import arr from "./utils/dummy";

function App() {
  return (
    <>
      <Header />
      <div
        className="middle"
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        {arr.map((value, index) => (
          <Card key={index} cloth={value.cloth} offer={value.offer} />
        ))}
      </div>

      <Footer />
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
