import React from "react";
import { connect } from "react-redux";
import CreditCard from "./credit-card.js";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";

const Checkout = (props) => {
  let total = props.cart.reduce((a, b) => a + (b.price || 0), 0);

  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <Paper style={{padding:"2rem"}}>
        <TableContainer>
          <Table>
            <TableHead>Order Summary</TableHead>
            <TableBody>
            {props.cart.length > 0 ? <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Price</TableCell>
            </TableRow>:''}
              {props.cart.map((item) => (
                <TableRow>
                  <TableCell>
                    {item.name}
                    {"\n"}
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell>${total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <CreditCard/>
      </Paper>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  cart: state.theCart,
});

export default connect(mapStateToProps)(Checkout);
