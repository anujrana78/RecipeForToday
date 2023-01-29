import React from 'react'
import Items from './Items'


function Itemlisting() {
    
    // const fetchData = async () => {
    //     const respone = await axios.get(
    //     //   "https://api.spoonacular.com/recipes/complexSearch?apiKey=c3c6d2633ea242c6aa2bd45836617bbd"
    //     );
    //     const data = respone.data.results;
    //     console.log(data);
    //     dispatch({ type: ACTION_TYPES.SET_ITEMS, payload: data });
    //   };
    //   console.log("FetchedData", getData);
    
    //   useEffect(() => {
    //     fetchData();
    //   }, []);
    
  return (
    <>
        <Items/>
    </>
  )
}

export default Itemlisting
