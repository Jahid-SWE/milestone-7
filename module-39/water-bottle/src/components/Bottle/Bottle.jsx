import React from 'react'
import './Bottle.css'

const Bottle = ({bottle, handleAddCart}) => {
    const {name, img, price, stock}=bottle
  return (
    <div className='card'>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
      <h4>{stock > 0 ? 'Remaining' : 'Stock Out'} : {stock}</h4>
      <button onClick={()=>handleAddCart(bottle)}>Buy Now</button>
    </div>
  )
}

export default Bottle