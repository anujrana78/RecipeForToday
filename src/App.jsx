import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Itemlisting from "./components/itemListing";
import Selecteditems from "./components/Selecteditems";
import { Route, Router } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
     
      <Header />
      {/* <Hero />
      <Itemlisting/> */}
      <Selecteditems/>
    </div>
  );
}

export default App;
