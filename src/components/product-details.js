import React from "react";
import { connect } from "react-redux";

import { addRemoteCart } from "../store/products.js";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 400,
  },
});
const ProductDetails = (props) => {
  const classes = useStyles();

  let product = props.location.state;
  console.log("________details",props)
  return (
      <Container maxWidth="sm" style={{ marginTop: "3rem" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        style={{ textAlign: "center" }}
      >
        {product.name.toUpperCase()}
      </Typography>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.name}
        />
        <CardContent>
          <Typography variant="h5" color="textPrimary" component="h4">
            In Stock: {product.inventory}
          </Typography>
          <Typography variant="h5" color="textPrimary" component="h4">
            $ {product.price}
          </Typography>
        </CardContent>
      </Card>
      <Button
        color="primary"
        variant="contained"
        style={{ width: "100%", marginTop: "1rem" }}
        onClick={() => props.addRemoteCart(product)}
      >
        Buy
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.theCart,
});
const mapDispatchToProps = { addRemoteCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
// export default ProductDetails;
