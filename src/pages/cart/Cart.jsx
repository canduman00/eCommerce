import {useContext} from "react";
import { ShopContext } from "../../context/Shop-context-provider";
import { PRODUCTS } from "../../products";
import CartItems from "./Cart-items";
import "./cart.css"

function Cart(){
    const {cartItems, totalPrice, checkOut} = useContext(ShopContext);
    const totalAmount = totalPrice();
    return (
        <>
        <h1 className="title">Your cart items:</h1>
        <div className="cart">
            
            
                {PRODUCTS.map(product => {
                    if(cartItems[product.id] !== 0){
                        return <CartItems data={product}/>
                    }
                })}
            { totalAmount > 0 ?
            <div className="checkout">
            <p className="total">Subtotal: ${totalAmount}</p>
            <button onClick={checkOut}>Checkout</button>
            </div> :
            <h1>Your shopping cart is empty</h1>
        }
        </div>
        </>
    );
}

export default Cart;