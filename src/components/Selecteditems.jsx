import React from 'react'
import { useSelector } from 'react-redux'
import './Selecteditems.css'

const Selecteditems = () => {
    const item = useSelector((state) => state.selectedItem)
  return (
    <div>
        {
            item.map((item) => {
                return <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-5'>
                            <img src={item.image} className='selected-item__image'></img>
                        </div>
                        <div className='col'>
                            <h3>{item.title}</h3>
                            <h5>Preparing Time : </h5>
                            <h5>Servings : </h5>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default Selecteditems