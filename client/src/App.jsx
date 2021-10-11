import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { ProductScreen } from "./screens/ProductScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { CartScreen } from "./screens/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import { SigninScreen } from "./screens/SigninScreen";
import { signout } from "./actions/userActions";

export const App = () => {

  const year = new Date().getFullYear();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <Router>
    <div className="container">
      <header className="row">
        <div className="company">
          <Link to="/">Shopify</Link>
        </div>
        <div>
          <Link to="/cart">Cart {
            cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )
          }</Link>
          {
            userInfo? (
              <div className="dropdown">
              <Link to="#"> {userInfo.name}
              </Link>
              <ul className="dropdown-content">
                <Link to="#signout" onClick={signoutHandler} className="signout">
                  Sign Out
                </Link>
              </ul>
              </div>
            ): (
              <Link to="/signin">Sign In</Link>
            )
          }
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/" component={HomeScreen} exact/>
      </main>
      <footer className="row center">
        <p> Shopify | {year} | &copy; All rights reserved</p>
      </footer>
    </div>
    </Router>
  );
};
