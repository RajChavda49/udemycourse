import React, { useEffect } from "react";
import "./main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Home,
  About,
  Error,
  Cart,
  PrivateRoute,
  Products,
  SingleProduct,
  AuthWrapper,
  Checkout,
} from "./pages";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
// styled component

const Main = () => {
  return (
    <Auth0Provider
      domain="dev-a90g-mui.us.auth0.com"
      clientId="DOJHvK5OuHwnnByunFPUi4nkmm728GLY"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <Router>
                <Navbar />
                <Sidebar />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/cart" exact component={Cart} />
                  <Route path="/products" exact component={Products} />
                  <Route path="/products/:id" exact component={SingleProduct} />
                  <Route path="/about" exact component={About} />
                  <PrivateRoute>
                    <Route path="/checkout" exact component={Checkout} />
                  </PrivateRoute>
                  <Route path="*" exact component={Error} />
                </Switch>
                <Footer />
              </Router>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  );
};

export default Main;
