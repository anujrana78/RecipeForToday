import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ACTION_TYPES } from "../redux/actions/actiontypes";
import "./Selecteditems.css";

const Selecteditems = () => {

  const [isLoading,setIsLoading] = useState(true)
  const dispatch = useDispatch();
  const item = useSelector((state) => state.setItem);
  const { itemId } = useParams();
  console.log("Items", item);

  const fetchSelectedItemDetail = async () => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${itemId}/information?apiKey=6edb92a038ff48ddb6362f7ef1b39c31`
    );
    const data = await response.data;
    console.log("data", data);
    dispatch({ type: ACTION_TYPES.SET_SELECTED_ITEM, payload: data });
   
  };

  useEffect(() => {
    fetchSelectedItemDetail();
  }, []);
  return (
    <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-5">
              <img src={item.image} className="selected-item__image"></img>
            </div>
            <div className="col-7">
              <h3>{item.title}</h3>
              <h6>Preparing Time :{item.readyInMinutes} </h6>
              <h6>Servings : {item.servings} </h6>

              <div>
                <h4>Ingredients</h4>
                <ul>
                  {item.extendedIngredients?.map((data) => {
                    return (
                      <>
                        <li key={data.id}>{data?.name}</li>
                      </>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4>Instruction</h4>
                <p>{item.instructions}</p>
              </div>
            </div>
          </div>
        </div> 

    </div>
  );
};

export default Selecteditems;
