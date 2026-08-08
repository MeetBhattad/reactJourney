import React from "react";
import ReactDOM from "react-dom/client";

function Card() {
  return (
    <div>
      <img
        src="https://wittee.in/wp-content/uploads/2025/09/front-68cc0e54b7abd-Royal_Blue_XS_Oversized_T-shirt.jpg"
        height="200px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h2>Tshirt</h2>
        <h1>80%off</h1>
        <h2>shop now</h2>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
