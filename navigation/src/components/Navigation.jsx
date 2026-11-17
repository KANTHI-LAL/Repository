import {Link} from "react-router-dom";

const Navigation = () => {

    return(
        <>
        <Link to="/" className="mylink"> HOME </Link>
        <Link to="/about" className="mylink"> ABOUT </Link>
        <Link to="/contact" className="mylink"> CONTACT </Link>
        <Link to="/service" className="mylink"> SERVICE </Link>
        </>

    )
}

export default Navigation;
