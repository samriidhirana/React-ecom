import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/cartReducer';
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = () => {
    let cartDataInLocal = localStorage.getItem("CartProduct")
    if(cartDataInLocal === []){
        return [];
    }else{
        return JSON.parse(cartDataInLocal) ;
    }
}


const initialState = {
    cartData: getLocalCartData(),
    // cartData: [],
    totalQuantity: '',
    totalPrice: '',
    shippingCharge: 50000,
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {id, color, amount, product}
        })
    }
    const setIncrease = (id) => {
        dispatch({
            type: 'INCREASE_AMOUNT',
            payload: id,
        })
    };
    const setDecrease = (id) => {
        dispatch({
            type: 'DECREASE_AMOUNT',
            payload: id,
        })
    };
    const deleteCartItem = (id) => {
        dispatch({
            type: 'DELETE_CART_ITEM',
            payload: id,
        })
    }

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    //to add data in local storage

    useEffect(() => {
        // dispatch({
        //     type: 'UPDATE_SHOPPING_CART_ICON',
        // })
        // dispatch({
        //     type: 'CART_TOTAL_PRICE',
        // })
        dispatch({
            type: 'CART_ITEM_PRICE_TOTAL'
        })
        localStorage.setItem("CartProduct", JSON.stringify(state.cartData))
    }, [state.cartData])

    return(<CartContext.Provider value={{...state, addToCart, deleteCartItem, clearCart, setIncrease, setDecrease}}>{children}</CartContext.Provider>)
}

const useCartContext = () => {
    return useContext(CartContext); 
}

export {CartProvider, useCartContext};