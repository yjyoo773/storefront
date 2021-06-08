import React from "react";
import { connect } from "react-redux";

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
    width:'25vw'
  },
  media: {
    height: 140,
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
        <div className='active-category'>
          <Typography className='cat-title' variant='h3'>{active[0].name.toUpperCase()}</Typography>
          <p className='cat-desc'>{active[0].description}</p>
        </div>
      ) : (
        ""
      )}
      <ul>
        {props.products
          .filter((item) => item.active)
          .map((filteredItem) => {
            return (
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={filteredItem.img}
                  title={filteredItem.name}
                />
                <CardContent>
                  <Typography variant="h6">{filteredItem.name}</Typography>
                  <Typography>{filteredItem.description}</Typography>
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
});

export default connect(mapStateToProps)(Products);
