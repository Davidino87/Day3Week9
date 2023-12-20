// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import "./App.css";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
