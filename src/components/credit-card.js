import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
}));

const CreditCard = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} style={{ marginTop: "1rem" }}>
          <h5>Payment Details</h5>
          <TextField id="card-holder-name" label="Full Name" />
          <TextField id="card-address" label="Address" />
          <TextField id="card-city" label="City" />
          <TextField id="card-state" label="State" />
          <TextField id="card-zip" label="ZIP Code" />
        </Grid>
        <Grid item xs={6} style={{ marginTop: "1rem" }}>
          <h5>Payment Details</h5>
          <TextField id="credit-card-number" label="Credit Card #" />

          <TextField
            id="date"
            label="Expiration"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="cvv-number" label="CVV" />
        </Grid>
      </Grid>
      <Button color="primary" variant="contained" style={{width:"100%"}}>Place Order</Button>
    </form>
  );
};

export default CreditCard;
