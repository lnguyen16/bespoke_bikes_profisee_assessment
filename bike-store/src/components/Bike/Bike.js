import { Button } from '@mui/material';
import React from 'react'
import "./Bike.css";

// Code to display the information from the database
const Bike = (props) => {
    const {_id,name,manufacturer,style,price,saleprice,quantity, commission, image} = props.bike;
  return  ( 
  <div className="card">
    <img src={image} alt={name} />
    <article>By {manufacturer}</article>
    <h3>{name}</h3>
    <p>{style}</p>
    <h2>$ {price}</h2>
    <h2>Now on sale for: {saleprice}</h2>
    <h2>Quantity: {quantity}</h2>
    <h2>Commission% {commission}</h2>
    <Button sx={{mt: "auto"}}>Buy</Button>
  </div>
  );
};

export default Bike;
