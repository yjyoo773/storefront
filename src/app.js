import React from "react";
import { connect } from "react-redux";
import Header from "./components/header.js";
import Categories from "./components/categories.js";
import Products from "./components/products.js";
import Footer from "./components/footer.js";
import Container from "@material-ui/core/Container";

import { getRemoteProducts } from "./store/products.js";
import { getRemoteCategory } from "./store/categories.js";

import "./styles/core.scss";

function App(props) {
  const fetchData = (e) => {
    e && e.preventDefault();
    props.getProducts();
    props.getCategory();
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Categories />
      <Container maxWidth="md">
        <Products />
      </Container>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.activeItem,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getRemoteProducts()),
  getCategory: () => dispatch(getRemoteCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
