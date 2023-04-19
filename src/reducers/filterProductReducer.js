const filterProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      // console.log(priceArr);

      let maxPrice = Math.max.apply(null, priceArr);

      // let maxPrice = priceArr.reduce((initialVal, curVal) =>
      //   Math.max(initialVal, curVal), 0
      // );
      // let maxPrice = Math.max(...priceArr);
      // console.log(maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filter: { ...state.filter, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let newSortedData;
      //   let tempProductData = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempProductData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortedData = tempProductData.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortedData,
      };
    case "UPDATE_PRODUCT_LIST":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };
    case "FILTER_PRODUCT":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category, company, color, price } = state.filter;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      // if (company !== "all") {
      //   tempFilterProducts = tempFilterProducts.filter(
      //     (c) => c.company === company
      //   );
      // }

      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filter.maxPrice,
          price: state.filter.maxPrice,
          minPrice: 0,
        },
      };
    default:
      return state;
  }
};

export default filterProductReducer;
