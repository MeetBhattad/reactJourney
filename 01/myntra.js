import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div className="card" style={{ border: "8px soild black", padding: "2px" }}>
      <img
        src="https://wittee.in/wp-content/uploads/2025/09/front-68cc0e54b7abd-Royal_Blue_XS_Oversized_T-shirt.jpg"
        height="150px"
        width="150px"
      />
      <div style={{ textAlign: "center" }}>
        <h2 stlye={{ height: "10px" }}>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now!!</h2>
      </div>
    </div>
  );
}

const arr = [
  {
    id: 1,
    cloth: "T-Shirt",
    offer: "80% off",
  },
  {
    id: 2,
    cloth: "Hoodie",
    offer: "50% off",
  },
  {
    id: 3,
    cloth: "Jacket",
    offer: "40% off",
  },
  {
    id: 4,
    cloth: "Pants",
    offer: "30% off",
  },
  {
    id: 5,
    cloth: "jeans",
    offer: "50% off",
  },
  {
    id: 6,
    cloth: "Cargo",
    offer: "10% off",
  },
  {
    id: 7,
    cloth: "Crop-top",
    offer: "30% off",
  },
  {
    id: 8,
    cloth: "Sundress",
    offer: "70% off",
  },
  {
    id: 9,
    cloth: "Tank-top",
    offer: "50% off",
  },
  {
    id: 10,
    cloth: "henley",
    offer: "10% off",
  },
];

function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://images.indianexpress.com/2021/01/myntra.png"
        height="50px"
        width="50px"
      />
      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>

      <input
        className="searchbar"
        placeholder="Search for products brands and more"
      ></input>

      <div className="profile">
        <button className="pro">Profile</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <img
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2026/JULY/29/79uqF8Ew_680ad63c49f14b7498d152ccf696aa6d.jpg"
      width="1300px"
    ></img>
  );
}
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
