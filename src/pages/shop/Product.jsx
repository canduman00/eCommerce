import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context-provider";



function Product({productId, productImage, productName, productPrice}){
    const {cartItems, addToCart} = useContext(ShopContext);
    const cartItemsCount = cartItems[productId];

    return <>
        <div className="product-card">
            <img className="product-image" src={productImage} alt="" />
            <div className="product-context">
                <p className="product-name">{productName}</p>
                <p className="product-price">${productPrice}</p>
                <button className="add-btn" onClick={() => addToCart(productId)} >Add To Cart {cartItemsCount > 0 && `(${cartItemsCount})`}</button>
            </div>
        </div>
    
    
    </>
}

export default Product;