import {useState } from "react";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import  data from "../products.json"

const Home =() => {
    const [products] = useState(data);

    return(
        <>
        <Navigation/>
        <div className="banner"/>
        <div className="prodlist">
        {products.map((product)=>(
            <Product key={product.id} product={product}/>
        ))}
        </div>
        
        <div className="footer">
            @copywrite CPC polytechnic, Mysore
        </div>
        </>
    )
}
export default Home;