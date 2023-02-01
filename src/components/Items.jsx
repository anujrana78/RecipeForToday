import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Items = () => {
    
const items = useSelector(state => state.allItem.items);
console.log("FOR INDRO", items)

  return (
    <div className="container row mt-4 ">
    {items.map((item) => {
      return (
      
        <div className="col-md-3 " key={item.id}>
         
          <div className="card">
          <Link to={`selectedItem/${item.id}`}>
            <img className="card-img-top" src={item.image} alt="image" />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </p>
            </div>
          </div>
         
        </div>
       
      );
    })}
  </div>
  )
}

export default Items
