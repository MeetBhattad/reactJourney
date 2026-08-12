import React, {useState, useEffect} from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Dashboard from "./Dashboard.js";
import Hello from "./Hello.js";
import Hi from "./Hi.js";
import Zero from "./Zero.js";
import Details from "./Details.js";
import Github from "./Github.js";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to = "/Details">Details</Link>
        <Link to = "/Github/:name">Github</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Details" element={<Details></Details>}>
        <Route index element = {<Zero></Zero>}></Route>
        <Route path = "Hello" element = {<Hello></Hello>}></Route>
        <Route path = "Hi" element = {<Hi></Hi>}></Route>
        </Route>
        <Route path = "/Github/:name" element = {<Github/>}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>);
