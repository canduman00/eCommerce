import {createContext, useState} from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext();

const getDefaultCart = () =>{
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props){
    const [cartItems, setCartItems] = useState(getDefaultCart());

    function addToCart(itemId){
        setCartItems(prev => ({...prev, [itemId]:prev[itemId]+1}))
    }
    function removeFromCart(itemId){
        setCartItems(prev => ({...prev, [itemId]:prev[itemId]-1}))
    }

    function updateCartItems(itemId, value){
        setCartItems(prev => ({...prev, [itemId]:prev[itemId] = value }))
    }

    function totalPrice(){
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find(product => product.id === Number(item))
                total += cartItems[item] * itemInfo.price;
            }
        }
        return total;
    }
    function checkOut(){
        setCartItems(getDefaultCart());
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItems,
        totalPrice,
        checkOut
    }
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;