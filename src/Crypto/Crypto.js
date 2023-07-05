import React, { useState } from "react";
import "./style.css";
import Cart from "./Cart";
export const Crypto = () => {
  const [qty, setQty] = useState(0);
  const [cart, setCart] = useState([]);
  // create an array of crypto data
  let cryptoData = [
    {
      name: "BTC",
      price: 25,
    },
    {
      name: "Ripple",
      price: 0.34,
    },
    {
      name: "rupee",
      price: 1.2,
    },
  ];
  const HandleCart = (data) => {
    if(qty<=0 ||isNaN(qty)){
        alert("Entered value is not valid")
        return;
    }
    let obj = {
      name: data.name,
      price: data.price,
      qty: qty,
      
    };
    let isitempresent = cart.find((item) => item.name === obj.name);
    console.log(isitempresent);

    if (isitempresent) {
      let updatedcart = cart.map((item) =>
        item.name === obj.name
          ? {
              name: item.name,
              price: item.price,
              qty: Number(item.qty) + Number(obj.qty),
            }
          : item
      );
      console.log(updatedcart);
      setCart(updatedcart);
    } else {
      setCart([...cart, obj]);
    }

    setQty(0)
  };




  let total = cart.reduce((sum, item) => {
    return sum + item.price * parseFloat(item.qty);
  }, 0);
  return (
    <div className="Container">
    <h1 style={{textAlign:'center'}}>Crypto-Cart</h1>
      <div className="crytpo-box">
        {cryptoData.map((item, i) => {
          return (
            <div className="crypto" key={i}>
              <div className="crytpo-info">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>

              <div className="crypto-cart">
                <input
                  type="text"
                  name=""
                  placeholder="Quantity"
                  onChange={(e) => setQty(e.target.value)}
                  id=""
                />
                <button onClick={() => HandleCart(item)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart">
        <h1>My Cart</h1>
        
        <table className="crypto-table">
            <thead>
                <tr>
                    <th>Crypto-Coin</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
            {cart &&
          cart.map((item, i) => {
            return <Cart cartitem={item} key={i} />;
          })}
            </tbody>
        </table>
        

        <h2>Grand total: ${total}</h2>
      </div>
    </div>
  );
};
