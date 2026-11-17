import { Link } from "react-router-dom";

const Navigation =() => {
    return(
        <>
        <div className="header container">
        <div className="logo"/>
        <div>
        <Link to="/" className="menu">Home</Link>
        <Link to="/viewcart" className="menu">View cart</Link>
        </div>

        </div>
        </>
    )
}

export default Navigation;
