import React from "react";
import ReactDOM from "react-dom";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listProducts } from '../queries';
import Products from "./Components/Products";

Amplify.configure(awsconfig);


const App = () => {
  return (
    <div className="container" style={{backgroundColor: "#67F"}}>
     <div style={{backgroundColor: "#979"}}>
      <Products/>
     </div>
  </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"));
