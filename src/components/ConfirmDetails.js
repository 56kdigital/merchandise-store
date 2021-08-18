import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import CartContext from "../context/cart";
import { useSelectedProducts } from "../hooks/useProducts";
import Loading from "./Loading";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  text: {
    marginLeft: theme.spacing(1),
  },
  media: {
    height: 200,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  button: {
    marginTop: theme.spacing(1),
  },
  buttonClear: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    float: "right",
  },
}));

function CartItem({ product }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <img className={classes.media} src={product.image} alt={product.name} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="secondary">
          $ {product.price}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="secondary">
          Quantity: {product.quantity}
        </Typography>
      </Grid>
    </Grid>
  );
}

function CartList({ products, cart }) {
  const classes = useStyles();

  const updatedProducts = products.map((product) => {
    const item = cart.find((item) => item.id === product.id);
    product.quantity = item.quantity;
    product.total = item.quantity * product.price;
    return product;
  });
  const total = updatedProducts.map((item) => item.total).reduce((prev, next) => prev + next);

  return (        
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6">
            Product Details
          </Typography>
            {updatedProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography gutterBottom variant="subtitle1" color="primary">
              TOTAL: $ {total}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function ConfirmDetails({ state }) {

  useEffect(() => {
    dataLayerPageImpression()
  }, []);

  const dataLayerPageImpression = () => {
    if (typeof window !== 'undefined'){
      window.dataLayer.push({
        event: "pageview",
        url: document.location.origin + document.location.pathname + document.location.search,
        virtualUrlPath: document.location.pathname + document.location.search + "/confirmdetails",
        title: document.title
      });
    }
    console.log("DataLayerPageImpression injected in ConfirmDetails.js")
  }

  const { cart } = React.useContext(CartContext);
  const { response: products, loading } = useSelectedProducts(cart);


  const { firstName, lastName, email, address, city, zipcode } = state;
  const classes = useStyles();
  return (
    
    <Container maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6">Personal Details</Typography>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                First Name:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {firstName}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Last Name:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {lastName ? lastName : "-NA-"}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Email:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {email}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6">Shipping Address</Typography>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Address:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {address}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                City:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {city}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" color="primary" display="inline">
                Zipcode:
              </Typography>
              <Typography variant="subtitle1" color="secondary" display="inline" className={classes.text}>
                {zipcode}
              </Typography>
            </div>
          </Paper>
        </Grid>
            {loading ? (
              <Loading text={"Loading your cart"} />
            ) : (
              <CartList products={products} cart={cart} />
            )}
      </Grid>
    </Container>
  );
}
