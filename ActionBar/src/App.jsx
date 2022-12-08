import React from "react";
import ReactDOM from "react-dom";
import ActionBar from "./components/ActionBar";
import Search from "Search/Search"

import "./index.css";

const App = () => {
  const [search, showSearch] = React.useState(false)
  return  <div className="container">
  <ActionBar showSearch={showSearch} search={search} />
  {search && <Search></Search>}
 </div>
}
ReactDOM.render(<App />, document.getElementById("app"));
