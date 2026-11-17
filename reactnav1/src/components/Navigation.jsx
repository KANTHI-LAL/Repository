import { Link } from "react-router-dom";

const Navigation = () => {
return(
    <> 
    <Link to="/" className="mylink">Home</Link>
    <Link to="/about" className="mylink">About</Link>
    <Link to="/service" className="mylink">Service</Link>
    <Link to="/contact" className="mylink">Contact</Link>
    </>
)
}
export default Navigation;