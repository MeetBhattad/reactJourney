import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/body.js";

function GithubProfile() {
  return (
    <>
      <Header></Header>

      <Body></Body>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile />);
