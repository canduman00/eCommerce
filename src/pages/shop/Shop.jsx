import {PRODUCTS} from "../../products";
import Product from "./Product";
import "./shop.css";

function Shop(){
    return <>
         <h1 className="main-title">umutcan's market place</h1>
        <div className="product-display">
            {PRODUCTS.map(product => {
                return <Product productId={product.id} productImage={product.productImage} productName={product.productName} productPrice={product.price}/>
            })}
        </div>
    
    </>
}

export default Shop;