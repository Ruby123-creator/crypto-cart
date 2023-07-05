import React from 'react'

const Cart = ({cartitem}) => {
    console.log(cartitem)
  return (
    <tr className='cart-info'>
        <td>{cartitem.name}</td>
        <td>${cartitem.price}</td>
        <td>{parseFloat(cartitem.qty)}</td>
    </tr>
  )
}

export default Cart