import React, { useEffect, useState } from 'react';
import "./Bike.css";
import axios from 'axios';
import Bike from './Bike';
const URL = "http://localhost:5000/bikes";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data);
};

const Bikes = () => {
    const [bikes, setBikes] = useState();
    useEffect(() => {
      fetchHandler().then(data=> setBikes(data.bikes))
    }, []);
    console.log(bikes);
  return <div>
    <ul>
        {bikes && bikes.map((bike, i)=>(
            <li className="bike" key={i}>
                    <Bike bike={bike}/>
            </li>
        ))}
    </ul>
    </div>
};

export default Bikes;