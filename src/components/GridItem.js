import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Fab from "@material-ui/core/Fab";

import { useHistory } from "react-router-dom";

import CartContext from "../context/cart";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  title: {
    padding: theme.spacing(1),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  price: {
    color: theme.palette.secondary.main,
    position: "relative",
    top: theme.spacing(2),
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartButton: {
    position: "relative",
    left: 204,
    bottom: 4,
  },
}));

export default function GridItem({ product }) {
  const classes = useStyles();
  const history = useHistory();
  const cart = React.useContext(CartContext);
  const navigateUrl = `/${product.category}/${product.id}`;

  const addCart = (e) => {
    e.preventDefault();
    console.log(e.target)
    cart.addItem(product.id);
  };

  const dataLayerAddToCart = (product) => {
    window.dataLayer.push({ ecommerce: null });  
    window.dataLayer.push({
      'event': 'addToCart',
      'ecommerce': {
        'currencyCode': 'USD',
        'add': {                                
          'products': [{                        
            'name': product.title,
            'id': product.id,
            'price': product.price,
            'category': product.category,
            'quantity': product.quantity
          }]
        }
      }
    });
    console.log("DataLayerAddToCart injected in GridItem.js")
  };

  const dataLayerProductClick = (product, navigateUrl) => {
    if (typeof window !== 'undefined'){
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        'event': 'productClick',
        'ecommerce': {
          'click': {
            'actionField': {'list': 'Category Page'},
            'products': [{
              'name': product.title,
              'id': product.id,
              'price': product.price,
              'category': product.category,
              'quantity': product.quantity
            }]
          }
        },
        'eventCallback': function() {
          document.location = navigateUrl
        }
      });
    }
    console.log("ProductClick injected in GridItem.js")
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={(e) => history.push(navigateUrl, { category: product.category })}>
        <CardMedia className={classes.media} image={product.image} title={product.title} alt={product.title} />
        <CardContent>
          <Typography className={classes.title} variant="subtitle1">
            {product.title}
          </Typography>
          <div className={classes.footer}>
            <Typography gutterBottom variant="h6" className={classes.price}>
              $ {product.price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <Fab color="secondary" aria-label="cart" className={classes.cartButton}>
        <ShoppingCartIcon onClick={(e) => {addCart(e);
          dataLayerAddToCart(product)}} />
      </Fab>
    </Card>
  );
}
