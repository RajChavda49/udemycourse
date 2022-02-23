import {
  INCREASE,
  DECREASE,
  GET_AMOUNT,
  CLEAR_CART,
  GET_TOTAL,
  REMOVE,
} from "./actions";

function reducer(state, action) {
  // clear cart
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  //   increase
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  //   decrease
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      console.log("its one");
    } else {
      tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return { ...state, cart: tempCart };
  }

  //   get total
  if (action.type === GET_TOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.price += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total, amount };
  }
  //   remove
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  return state;
}
export default reducer;
