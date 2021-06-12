import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import Cart from "./cart.js";

function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Link to="/" className="page-logo" color="primary" style={{ textDecoration: 'none' }}>
          <Typography variant="h6">STORE</Typography>
        </Link>
        <Cart edge="end" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
