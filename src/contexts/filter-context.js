import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./product-context";
import reducer from "../reducers/filterProductReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filter: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  }
};

const FilterContextProvider = (props) => {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({
      type: "SET_GRID_VIEW",
    });
  };

  const setListView = () => {
    return dispatch({
      type: "SET_LIST_VIEW",
    });
  };

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateProductList = (event) => {
    let name= event.target.name;
    let value = event.target.value;
    // if (name === "company") {
    //   value = event.target.value;
    // }
    return dispatch({
      type: 'UPDATE_PRODUCT_LIST',
      payload: {name, value}
    })
  }

  const clearFilters = () => {
    dispatch({
      type: 'CLEAR_FILTERS',
    })
  }

  //to sort via the value selected in the dropdown
  useEffect(() => {
    dispatch({
      type: 'FILTER_PRODUCT',
    })
    dispatch({
      type: "SORTING_PRODUCTS",
    });
  }, [products, state.sorting_value, state.filter]);

  useEffect(() => {
    dispatch({
      type: "GET_FILTER_PRODUCTS",
      payload: products,
    });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateProductList, clearFilters }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { useFilterContext, FilterContextProvider };
