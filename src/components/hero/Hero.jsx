import React, { useState } from "react";
import "./Hero.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../../redux/actions/actiontypes";

const Hero = () => {
  const [searchItem,setSearchItem] = useState('')
  const data = useSelector((state) => state.searchItem);
  const dispatch = useDispatch(); 
  


  const handleSearch = () => {
    dispatch({type : ACTION_TYPES.SEARCH_ITEM, payload : searchItem})
    console.log(data)
  }

  return (
    <div className="hero d-flex flex-column align-items-center ">
      <div>
        <h2 className=" ">
          Find your <span className="recipe-head">Recipe</span> for today
        </h2>
      </div>

      <div className="searchbar-container">
        <input
          type="text"
          className="hero-search"
          onChange={(e) =>
            setSearchItem(e.target.value)
          }
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
        <BiSearchAlt2 className="icon" />
      </div>
    </div>
  );
};

export default Hero;
