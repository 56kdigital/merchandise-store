import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
}));
export default function ThankYou() {

  React.useEffect(() => {
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push ({
      event: "pageview",
      url: document.location.hostname + document.location.pathname + document.location.search,
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
    <Container maxWidth="sm">
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="subtitle1" color="primary">
          Thank you for placing your order{" "}
          <span role="img" description="aria-label">
            {" "}
            🎊
          </span>
        </Typography>
      </Paper>
    </Container>
  );
}