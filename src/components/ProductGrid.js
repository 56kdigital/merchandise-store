import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "./GridItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ProductGrid({ products }) {
  
  const classes = useStyles();

  function productList(products) {
    let counter = 1
    const productMap = products.map((product) => (
      {"name": product.title,
       "id": product.id,
       "price": product.price,
       "category": product.category,
       "list": "Home Page",
       "position": counter++
      }
    ))

    return productMap
  }

  useEffect(() => {
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      "ecommerce": {
        "currencyCode": "USD",
        "impressions": [productList(products)]
      }
    });
  }, [products]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
            <GridItem product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
