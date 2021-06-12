import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { removeRemoteCart } from "../store/cart.js";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

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
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        {props.cart.map((item) => {
          return (
            <MenuItem key={Math.random()}>
              <ListItemIcon>
                <DeleteOutlinedIcon
                  onClick={() => props.removeRemoteCart(item)}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </MenuItem>
          );
        })}
        <MenuItem>
          <Link to="/checkout" style={{ textDecoration: 'none'}}>
            <Button>Go to Checkout</Button>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.theCart,
});

const mapDispatchToProps = { removeRemoteCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
