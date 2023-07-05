import React from 'react'

const Cart = ({cartitem}) => {
    console.log(cartitem)
  return (
    <div className='cart-info'>
        <div>{cartitem.name}</div>
        <div>{cartitem.price}</div>
        <div>{parseFloat(cartitem.qty)}</div>
    </div>
  )
}

export default Cart