import { usestate, useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { cartContext } from "../App"; 

const Viewcart =() => {
    const {cart} =useContext(cartContext);
    const [total , setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
    },[cart]);

    return(
        <>
            <Navigation/>
            <div className="cart-container">
                <h1>Cart product</h1>
                {cart.map((product)=>(
                        <div className="cart-product" key={product.id}>
                    <div className="img">
                        <img src={product.image} alt="product"/>
                    </div>
                    <div className="cart-product-details">
                        <h3>{product.name}</h3>
                        <p>Price Rs: {product.price}</p>
                        </div>
                    </div>
                )
                
                )}
                <h2>Total Amount Rs: {total}</h2>
            </div>

            <div className="footer">
            @copywrite CPC polytechnic, Mysore
            </div>
            
        </>
    )
}

export default Viewcart;