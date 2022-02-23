import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTAL } from "./actions";
import CartItem from "./CartItem";
const CartContainer = ({ cart, total, clearcart, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTAL });
  });
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header className="text-center">
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <button
            className="btn btn-primary-block"
            onClick={() => window.location.reload()}
          >
            refresh
          </button>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clearcart()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
const mapStateToProps = (state) => {
  const { cart, total } = state;
  return { total, cart };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    total: () => dispatch({ type: GET_TOTAL }),
    clearcart: () => dispatch({ type: CLEAR_CART }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
