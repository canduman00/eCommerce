import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context-provider";


function CartItems(props){
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItems} = useContext(ShopContext);
    return (
        <div className="product">
                <img src={productImage} alt="" />
                <div className="product-content">
                    <p className="cproduct-name">{productName}</p>
                    <p className="cproduct-price">Price: ${price}</p>

                    <div className="product-update">
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <input type="text" value={cartItems[id]} onChange={event => {
                            updateCartItems(id, event.target.value);
                        }} />
                        <button onClick={() => addToCart(id)}>+</button>
                    </div>
                    
                </div>
        </div>
    );
}

export default CartItems;