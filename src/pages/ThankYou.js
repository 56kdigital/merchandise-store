import React, { useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    title: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      padding: theme.spacing(1),
    },
  }));


export default function ThankYou() {

  useEffect(() => {
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push ({
      event: "pageview",
      url: document.location.origin + document.location.pathname + document.location.search,
      virtualUrlPath: document.location.pathname + document.location.search,
      title: document.title
      })
      
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
          event: "purchase",
          ecommerce: {
              currencyCode: "USD",
      
              purchase: {
                  actionField: {
                      id:          "",
                      affiliation: "",
                      revenue:     "",
                      tax:         "",
                      shipping:    "",
                      shippingTax: "", // Non-standard field.
                      coupon:      "",
                      timestamp:   new Date(Date.now() * 1000).toLocaleString("sv-SE")
                  },
      
                  products: []
              }
          }
      });      
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h5" className={classes.title}>
        Thank you for making a purchase!
      </Typography>
    </Container>
  );
}