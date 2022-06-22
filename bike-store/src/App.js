import React from "react";
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import AddBike from "./components/AddBike";
import Bikes from "./components/Bike/Bikes";
import Salespeople from "./components/Salespeople";
import Customers from "./components/Customers";

function App() {
  return ( 
  <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element={<AddBike/>} exact/>
        <Route path="/bikes" element={<Bikes/>} exact/>
        <Route path="/salespeople" element={<Salespeople/>} exact/>
        <Route path="/customers" element={<Customers/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
  );
}

export default App;
