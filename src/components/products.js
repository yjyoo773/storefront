import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { addRemoteCart } from "../store/products.js";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display: "inline-block",
    margin: "1vw",
    width: "25vw",
  },
  media: {
    height: 200,
  },
});

const Products = (props) => {
  const classes = useStyles();
  let active = props.category.filter((cat) => {
    return cat.active === true;
  });

  return (
    <section>
      {active.length > 0 ? (
        <div className="active-category">
          <Typography className="cat-title" variant="h3">
            {active[0].name.toUpperCase()}
          </Typography>
          <p className="cat-desc">{active[0].description}</p>
        </div>
      ) : (
        ""
      )}
      <ul>
        {props.products
          .filter((item) => item.active && item.inventory > 0)
          .map((filteredItem) => {
            return (
              <Card className={classes.root} key={props.products.name}>
                <CardMedia
                  className={classes.media}
                  image={filteredItem.img}
                  title={filteredItem.name}
                />
                <CardContent>
                  <Typography variant="h6">
                    {filteredItem.name.toUpperCase()}
                  </Typography>
                  <Typography>{filteredItem.description}</Typography>

                  <Button
                    color="primary"
                    onClick={() => props.addRemoteCart(filteredItem)}
                  >
                    Add to Cart
                  </Button>
                  <Link
                    to={{
                      pathname: `/details/${filteredItem.name}`,
                      state: filteredItem,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Button color="primary">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  category: state.activeCat,
  products: state.activeItem,
  cart: state.theCart,
});

const mapDispatchToProps = { addRemoteCart };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Products)
);
