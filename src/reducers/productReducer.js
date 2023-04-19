const productReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_DATA":
      return {
        ...state,
        isLoading: true,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_PRODUCTS":
      const featureProducts = action.payload.filter((curProd) => {
        return curProd.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts,
      };
    case "LOADING_SINGLE_DATA":
      return {
        ...state,
        isSingleProductLoading: true,
      };
    case "SINGLE_ERROR":
      return {
        ...state,
        isSingleProductLoading: false,
        isError: true,
      };
    case "GET_SINGLE_PRODUCTS":
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
