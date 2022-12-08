import React from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../queries';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import { DATA } from "../Data";



const Products = () => {
  const [productsList, setProductsList] = React.useState([])  
  React.useEffect(async ()=> {
    setProductsList(DATA)
  }, [])
  return (
    <div style={{alignContent: "center", alignItems: "center", backgroundColor: "#a94064"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {productsList.map((product, index) => (
    <Grid xs={2} sm={4} md={4} key={index}>
      <ProductCard product={product}/> 
    </Grid>
  ))}
</Grid>
  </div>
  )
}
 
export default Products
