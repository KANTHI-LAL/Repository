import {cartContext} from "../App"
import { useContext, useState } from "react";

const Product =({product}) => {
    
    const {cart, setCart} = useContext(cartContext);

    const addCart=()=>{
        setCart([...cart, product]);
    };

    const removeCart=() => {
        setCart(cart.filter((c) =>c.id !==product.id));
    }

    return(
    <>
        <div>
            <div className="img">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="deatils">
            <h4>{product.name}</h4>
            <p>Price Rs:{product.price}</p>
            {cart.includes(product) ?(
                <button onClick={removeCart} className="btnremove">
                    Remove from cart
                </button>
            ) : (
                <button onClick={addCart}>Add to cart</button>
            )
            
            }

        </div>
        </div>
    </>
    
    )
}

export default Product;