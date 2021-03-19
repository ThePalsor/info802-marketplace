import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

import Cart from './components/Cart';
import ProductList from './components/ProductList';

import Context from "./Context";

import { loadStripe } from '@stripe/stripe-js';

const stripePublicKey = "pk_test_51IWMLVB0L4ACn1yoUBuG6Jj0jkAJaAlLQgBFAKdnKmZ0JfATQS8WUu1vzumMSn4s51qna2ySfZKXixShegVTQs3C009jzw7NF3"
const stripePromise = loadStripe(stripePublicKey);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      products: []
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    let cart = localStorage.getItem("cart");

    axios({
      url: 'https://us-central1-marketplace-info802.cloudfunctions.net/graphql ',
      method: 'post',
      data: {
        query: `
        query {
          products {
            name,
            description,
            price,
            weight,
            distance
          }
        }
          `
      }
    }).then((result) => {
      cart = cart ? JSON.parse(cart) : {};
      console.log(result.data.data.products)

      this.setState({ products: result.data.data.products, cart });
    });

  }


  addToCart = cartItem => {
    let cart = this.state.cart;
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  removeFromCart = cartItemId => {
    let cart = this.state.cart;
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  };

  clearCart = () => {
    let cart = {};
    localStorage.removeItem("cart");
    this.setState({ cart });
  };

  checkout = async () => {

    const stripe = await stripePromise;

    
    var products = [];
    var totalWeight = 0;
    var maxDistance = 0;
    Object.values(this.state.cart).forEach(element => {
      var product = {};
      product.name = element.id;
      product.amount = element.product.price * 100; //Le prix est en centimes d'euros pour stripe
      product.quantity = element.amount;
      product.currency = 'eur';
      totalWeight += product.quantity * element.product.weight;
      maxDistance = element.product.distance > maxDistance ? element.product.distance : maxDistance;
      products.push(product);
    });

    const data = JSON.stringify({products: products, weight: totalWeight, distance: maxDistance});
    
    const response = await fetch('https://stripe-server-tdelapierre.herokuapp.com/create-checkout-session', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: data
    });
  
    const session = await response.json();
    
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    

    if (result.error) {}

    this.clearCart();
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          removeFromCart: this.removeFromCart,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          checkout: this.checkout
        }}
      >
        <Router ref={this.routerRef}>
          <div className="App">
            <nav
              className="navbar container"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <b className="navbar-item is-size-4 ">TP Info802</b>
                <label
                  role="button"
                  class="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ showMenu: !this.state.showMenu });
                  }}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </label>
              </div>
              <div className={`navbar-menu ${this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/products" className="navbar-item">
                  Articles
                </Link>
                <Link to="/cart" className="navbar-item">
                  Panier
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                    {Object.keys(this.state.cart).length}
                  </span>
                </Link>

              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/products" component={ProductList} />
            </Switch>
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
