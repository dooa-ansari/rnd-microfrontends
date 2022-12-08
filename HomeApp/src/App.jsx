import React from "react";
import ReactDOM from "react-dom";
import ActionBar from 'ActionBar/ActionBar';
import Search from 'Search/Search';
import Products from 'Products/Products';

import "./index.css";

const App = () => (
  <div className="container">
   <ActionBar/>
   <Search />
   <Products />
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
