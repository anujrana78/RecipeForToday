import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Items from './Items'
import { ACTION_TYPES } from '../redux/actions/actiontypes';

function Itemlisting() {
  const dispatch = useDispatch()
    
    const fetchData = async () => {
        const respone = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=c3c6d2633ea242c6aa2bd45836617bbd"
        );
        const data = await respone.data.results;
        console.log("FROM API " ,data);
        dispatch({ type: ACTION_TYPES.SET_ITEMS, payload: data });
      };
      
    
      useEffect(() => {
        fetchData();
      }, []);
    
  return (
    <>
        <Items/>
    </>
  )
}

export default Itemlisting
