import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search"

import "./index.css";

const App = () => (
  <div className="container">
    <Search />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
