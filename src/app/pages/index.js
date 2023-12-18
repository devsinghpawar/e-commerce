// pages/index.js
import React from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

import CheckoutForm from "../components/CheckoutForm";
import ProductDetails from "../components/ProductDetails";
import { CartProvider } from "../contexts/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import products from "../data/products.json";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex">
            <div className="w-1/2">
              <Switch>
                <Route path="/" exact>
                  <ProductList products={products} />
                </Route>
                <Route path="/products/:productId">
                  <ProductDetails />
                </Route>
              </Switch>
            </div>
            <div className="w-1/2">
              <Cart />
              <CheckoutForm />
            </div>
          </div>
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </CartProvider>
  );
};

export default Home;
