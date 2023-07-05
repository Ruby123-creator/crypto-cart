import React, { useRef, useState } from "react";
import "./style.css";
import Cart from "./Cart";
export const Crypto = () => {
  const [qty, setQty] = useState(0);
  const [cart, setCart] = useState([]);
  // create an array of crypto data which contains crypto objects having name and price
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

  // function runs whenever you click add to cart btn
  const HandleCart = (data) => {

    //  if quantity of coin-value is less tahn or equal to 0 or any textvalue then return
    if(qty<=0 ||isNaN(qty)){
        alert("Entered value is not valid")
        return;
    }

    // create an object which conatins name ,price ,quantity , subtotal of that particulat quantity
    let obj = {
      name: data.name,
      price: data.price,
      qty: qty,
      total:Number(qty)*Number(data.price)
      
    };

    // here we check that if item is already present in cart or not
    let isitempresent = cart.find((item) => item.name === obj.name);
    console.log(isitempresent);
    // if item is already present then just increase the quantity of that particular coin 
    if (isitempresent) {
      let updatedcart = cart.map((item) =>
        item.name === obj.name
          ? {
              name: item.name,
              price: item.price,
              total:item.total,
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
    alert("Crypto-coin is added to cart successfully")
  };




  let total = cart.reduce((sum, item) => {
    return sum + item.price * parseFloat(item.qty);
  }, 0);
  return (
    <div className="Container">
    <h1 style={{textAlign:'center'}}>Crypto-Cart</h1>
    {/* to render the crpto-card in the ui */}
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
        {/* to render the crpto-cart in the ui in form of table */}
        <table className="crypto-table">
            <thead>
                <tr>
                    <th>Crypto-Coin</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
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
