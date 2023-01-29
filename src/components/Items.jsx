import React from 'react'
import { useSelector } from 'react-redux';


const Items = () => {
    
const getData = useSelector((state) => state.items);

  return (
    <div className="container row mt-4 ">
    {getData.map((item) => {
      return (
        <div className="col-md-3 ">
          <div className="card">
            <img className="card-img-top" src={item.image} alt="image" />
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
