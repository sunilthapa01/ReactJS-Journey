import React from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {

    const params = useParams();
    console.log(params)
  return (
      <div>
          
          <h1>Add to Cart</h1>
      
    </div>
  )
}

export default Cart
