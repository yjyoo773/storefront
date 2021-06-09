import React, { useState } from "react";
import { connect } from "react-redux";

import { removeCart } from "../store/cart.js";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Cart = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton className="cart-btn" aria-label="cart" onClick={handleClick}>
        <StyledBadge badgeContent={props.cart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        anchorOrigin={{
        //   vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        {props.cart.map((item) => {
          return (
            <MenuItem>
              {item.name}
              <button onClick={()=>props.removeCart(item)}> delete </button>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.theCart,
});

const mapDispatchToProps = { removeCart };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);