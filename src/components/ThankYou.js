import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { v4 as uuidv4 } from 'uuid';

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
        <Typography gutterBottom variant="subtitle1">
          $ {product.price}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
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
            <Typography gutterBottom variant="subtitle1">
              TOTAL: $ {total}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function ThankYou() {

  const classes = useStyles();
  const { cart } = React.useContext(CartContext);
  const { response: products, loading } = useSelectedProducts(cart);

  useEffect(() => {
    dataLayerPageImpression()
  }, []);

  const dataLayerPageImpression = () => {
    if (typeof window !== 'undefined'){
      window.dataLayer.push({
        event: "pageview",
        url: document.location.origin + document.location.pathname + document.location.search,
        virtualUrlPath: document.location.pathname + document.location.search + "/thankyou",
        title: document.title
      });
    }
    console.log("DataLayerPageImpression injected in ThankYou.js")
  }
  
  const DataLayerPurchase = () => {
    const getTotalValue = products.map((product) => {
      const item = cart.find((item) => item.id === product.id);
      product.total = item.quantity * product.price;
      return product.total;
    });

    const totalValue = getTotalValue.reduce((a, b) => a + b, 0)

    const productObject = products.map((product) => (
      {"name": product.title,
       "id": product.id,
       "price": product.price,
       "category": product.category,
       "quantity": product.quantity,
      }
    ))

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      "ecommerce": {
        "purchase": {
            "actionField": {
              "id": uuidv4(),
              "revenue": totalValue,
              "tax": totalValue * 0.25,
              "shipping": 5.99,
            },
          "products": [productObject]
        }
      }
    });
    console.log("DataLayerPurchase injected in ThankYou.js")
    return ""
    }

  return (
    <>
    {loading ? (
      <Loading text={"Loading your cart"} />
    ) : (
      <DataLayerPurchase products={products}/>
    )}
    <Container maxWidth="sm">
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="subtitle1">
          Thank you for placing your order{" "}
          <span role="img" description="aria-label">
            {" "}
            🎊
          </span>
        </Typography>
      </Paper>
      <Grid>
            {loading ? (
              <Loading text={"Loading your cart"} />
            ) : (
              <CartList products={products} cart={cart} />
            )}
      </Grid>
    </Container>
    </>
  );
}