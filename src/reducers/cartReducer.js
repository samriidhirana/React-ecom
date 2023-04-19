const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    //tackle existing product in cart

    let existingItem = state.cartData.find(
      (curElem) => curElem.id === id + color
    );
    // console.log(existingItem);

    if (existingItem) {
      let productInCart = state.cartData.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cartData: productInCart,
      };
    } else {
      let cartProductData = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cartData: [...state.cartData, cartProductData], //...state.cart is written so that product can be added after the existing items
      };
    }
  }
  if (action.type === "DELETE_CART_ITEM") {
    let updatedCart = state.cartData.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cartData: updatedCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cartData: [],
    };
  }
  if (action.type === "DECREASE_AMOUNT") {
    let updatedProduct = state.cartData.map((curElem) => {
      if (curElem.id === action.payload) {
        let newAmount = curElem.amount - 1;
        if (newAmount <= 1) {
          newAmount = 1;
        }
        return {
          ...curElem,
          amount: newAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cartData: updatedProduct,
    };
  }
  if (action.type === "INCREASE_AMOUNT") {
    let updatedProduct = state.cartData.map((curElem) => {
      if (curElem.id === action.payload) {
        let newAmount = curElem.amount + 1;
        if (newAmount >= curElem.max) {
          newAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: newAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cartData: updatedProduct,
    };
  }
  // if (action.type === "UPDATE_SHOPPING_CART_ICON") {
  //   let updatedItem = state.cartData.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;
  //     initialVal += amount;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     totalQuantity: updatedItem,
  //   };
  // }
  // if (action.type === "CART_TOTAL_PRICE") {
  //   let total_price = state.cartData.reduce((initialVal, curElem) => {
  //     let { price, amount } = curElem;

  //     initialVal += price * amount;
  //     return initialVal;
  //   }, 0);
  //   return {
  //     ...state,
  //     totalPrice: total_price,
  //   };
  // }
  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { totalPrice, totalQuantity } = state.cartData.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;
        accum.totalQuantity += amount;
        accum.totalPrice += price * amount;
        return accum;
      },
      {
        totalPrice: 0,
        totalQuantity: 0,
      }
      
    );
    return{
      ...state,
      totalPrice,
      totalQuantity,
    }
  }
  return state;
};

export default cartReducer;
