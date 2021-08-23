import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
export default function ShippingForm({ state, handleChange }) {

  useEffect(() => {
    dataLayerPageImpression()
    dataLayerCheckoutStep()
  }, []);

  const dataLayerPageImpression = () => {
    if (typeof window !== 'undefined'){
      window.dataLayer.push({
        event: "pageview",
        url: document.location.origin + document.location.pathname + document.location.search,
        virtualUrlPath: document.location.pathname + document.location.search + "/shippingadress",
        title: document.title
      });
    }
    console.log("DataLayerPageImpression injected in ShippingForm.js")
  }

  const dataLayerCheckoutStep = () => {
    if (typeof window !== "undefined"){
      window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      window.dataLayer.push({
        "event": "checkout",
        "ecommerce": {
          "checkout": {
            "actionField": {"step": 1}
        }
      }
      });
    }
    console.log("DataLayerCheckoutStep 1 injected in UserForm.js")
  }

  const { firstName, lastName, email, address, city, zipcode } = state;
  return (
    <Container maxWidth="sm">
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
          <TextField
            label="First Name"
            id="firstName"
            value={firstName}
            variant="outlined"
            size="small"
            onChange={(e) => handleChange({ name: "firstName", value: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Last Name"
            id="lastName"
            value={lastName}
            variant="outlined"
            size="small"
            onChange={(e) => handleChange({ name: "lastName", value: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Email"
            id="email"
            value={email}
            variant="outlined"
            size="small"
            onChange={(e) => handleChange({ name: "email", value: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Address"
            id="address"
            value={address}
            variant="outlined"
            multiline
            rows={4}
            size="small"
            onChange={(e) => handleChange({ name: "address", value: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="City"
            id="city"
            value={city}
            variant="outlined"
            size="small"
            onChange={(e) => handleChange({ name: "city", value: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Zipcode"
            id="zipcode"
            value={zipcode}
            variant="outlined"
            size="small"
            onChange={(e) => handleChange({ name: "zipcode", value: e.target.value })}
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
}
