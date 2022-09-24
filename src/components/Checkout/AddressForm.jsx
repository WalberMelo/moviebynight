import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
  const [address, setAddress] = React.useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    saveAddress: false,
  });
  console.log(address);

  const handleSaveAddress = (e) => {
    setAddress((current) => {
      return {
        ...current,
        saveAddress: !current.saveAddress,
      };
    });
  };

  const handleAddress = (e) => {
    setAddress({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={address.firstName}
            onChange={handleAddress}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="lastName"
            name="lastName"
            label="Last name"
            value={address.lastName}
            onChange={handleAddress}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required={true}
            id="address1"
            name="address1"
            label="Address line 1"
            value={address.address1}
            onChange={handleAddress}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            value={address.address2}
            onChange={handleAddress}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="city"
            name="city"
            label="City"
            value={address.city}
            onChange={handleAddress}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="state"
            name="state"
            label="State/Province/Region"
            value={address.state}
            onChange={handleAddress}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={address.zip}
            onChange={handleAddress}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={true}
            id="country"
            name="country"
            label="Country"
            value={address.country}
            onChange={handleAddress}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value={address.saveAddress}
                onChange={handleSaveAddress}
              />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
