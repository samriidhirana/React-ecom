//first create a context
//find a provider that is who will be delivering it
//last find a consumer and use "useContext"


import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";

const AppContext = createContext();

const api = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSigleProductLoading : false,
    singleProduct: {}
}

const AppProvider = (props) => {

    const [state , dispatch] = useReducer(reducer, initialState);

    const getProducts = async () => {
        dispatch({
            type: 'LOADING_DATA'
        })
        try{
            const response = await axios.get(api);
            const products = await response.data;

            dispatch({
                type: 'GET_PRODUCTS',
                payload: products
            })
        }catch (error){
            dispatch({
                type: 'ERROR',
            })
        }
        
    }

    const getSingleProduct = async (url) => {
        dispatch({
            type: 'LOADING_SINGLE_DATA'
        })
        try{
            const response = await axios.get(url);
            const singleProduct = await response.data;
            dispatch({
                type: 'GET_SINGLE_PRODUCTS',
                payload: singleProduct
            })
        }catch(error){
            dispatch({
                type: 'SINGLE_ERROR',
            })
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    return(
        <AppContext.Provider value={{...state, getSingleProduct }}>
            {props.children}
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext };

