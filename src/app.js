import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header.js";
import Categories from "./components/categories.js";
import Products from "./components/products.js";
import ProductDetails from "./components/product-details.js";
import Footer from "./components/footer.js";
import Checkout from "./components/checkout.js";

import Container from "@material-ui/core/Container";

import { getRemoteProducts } from "./store/products.js";
import { getRemoteCategory } from "./store/categories.js";

import "./styles/core.scss";

function App(props) {
  const fetchData = () => {
    props.getRemoteProducts();
    props.getRemoteCategory();
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
          <Container maxWidth="md">
            <Products />
          </Container>
        </Route>
        <Route
          exact
          path={`/details/:${props.products.name}`}
          component={(props) => <ProductDetails {...props} />}
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.activeItem,
});

const mapDispatchToProps = { getRemoteProducts, getRemoteCategory };

export default connect(mapStateToProps, mapDispatchToProps)(App);
