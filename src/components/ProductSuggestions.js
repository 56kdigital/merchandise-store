import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "./GridItem";
const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
  },
}));

export default function ProductSuggestions({ products }) {
  const classes = useStyles();

  useEffect(() => {
    dataLayerProductImpression(products);
  }, [products]);


  const dataLayerProductImpression = (products) => {

    let counter = 1
    const productObject = products.map((product) => (
      {"name": product.title,
       "id": product.id,
       "price": product.price,
       "category": product.category,
       "list": "",
       "position": counter++
      }
    ))

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      "ecommerce": {
        "currencyCode": "USD",
        "impressions": [productObject]
      }
    });
    console.log("DataLayerProductImpression injected")
    return ""
    }

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Grid key={product.id} container item xs={12} sm={6} md={4} lg={4}>
          <GridItem key={product.id} product={product} />
        </Grid>
      ))}
    </div>
  );
}
