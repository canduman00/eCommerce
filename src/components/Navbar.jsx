import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";

import "./navbar.css";

function Navbar(){
    return <>
        <div className="navbar">
            <Link className="link shop-link" to="/">Shop</Link>
            <Link className="link cart-link" to="/cart"><ShoppingCart size={32}/></Link>

        </div>
    
    </>
}

export default Navbar;