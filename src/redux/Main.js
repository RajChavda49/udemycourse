import React from "react";
import "./main.css";
// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import reducer from "./reducer";
// items
import data from "./items";
// redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialStore = {
  cart: data,
  amount: 5,
  total: 0,
};
const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
function App() {
  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <CartContainer cart={data} />
      </Provider>
    </main>
  );
}

export default App;
