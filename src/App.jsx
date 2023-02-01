import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import "./App.css";
import {useSelector } from "react-redux";
import Itemlisting from "./components/itemListing";
import Selecteditems from "./components/Selecteditems";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const data = useSelector((state) => state.items)
  console.log
  return (
    <div className="App">      
      <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/selecteditem/:itemId" exact element={<Selecteditems />} /> 
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
