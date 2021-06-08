import React from "react";

import Header from "./components/header.js";
import Categories from "./components/categories.js";
import Products from "./components/products.js";
import Footer from "./components/footer.js";
import Container from "@material-ui/core/Container";

import "./styles/core.scss";

function App() {
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

export default App;
