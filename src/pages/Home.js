import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useProductsWithLimit } from "../hooks/useProducts";

import ProductSuggestions from "../components/ProductSuggestions";
import Loading from "../components/Loading";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(1),
  },
}));
export default function Home() {
  
  const classes = useStyles();
  const { response: products, loading } = useProductsWithLimit(5);

  useEffect(() => {
    dataLayerPageImpression()
  }, []);

  const dataLayerPageImpression = () => {
    if (typeof window !== 'undefined'){
      window.dataLayer.push({
        event: "pageview",
        url: document.location.origin + document.location.pathname + document.location.search,
        virtualUrlPath: document.location.pathname + document.location.search,
        title: document.title
      });
    }
    console.log("DataLayerPageImpression injected in Home.js")
  }


  if (loading) {
    return (
      <>
        <div className="banner"></div>
        <Loading text={"Fetching top products"} />
      </>
    );
  }
  return (
    <div>
      <div className="banner"></div>
      <Typography variant="h5" className={classes.title}>
        Top products
      </Typography>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <ProductSuggestions products={products} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
