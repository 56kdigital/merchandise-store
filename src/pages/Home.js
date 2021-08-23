import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useProductsWithLimit } from "../hooks/useProducts";

import ProductSuggestions from "../components/ProductSuggestions";
import Loading from "../components/Loading";

import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(16, 0, 16),
  },
}));


export default function Home() {
  
  const classes = useStyles();
  const { response: products, loading } = useProductsWithLimit(5);
  const history = useHistory();

  const promotionPage = () =>{ 
    history.push("/promotion");
  }

  useEffect(() => {
    dataLayerPageImpression()
    dataLayerPromotionImpression()
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

  const dataLayerPromotionImpression = () => {
    if (typeof window !== 'undefined'){
        window.dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
            'ecommerce': {
            'promoView': {
                'promotions': [
                {
                'id': 'HOMEPAGE_PROMOTION_2021',            // ID or Name is required.
                'name': 'FALL_SALE',
                'creative': 'homepage_banner',
                'position': 'slot1'
                }]
                }
            }
        });
    }
    console.log("DataLayerPromotionImpression injected in Home.js")
  }


  if (loading) {
    return (
      <>
        <div className={classes.heroContent}>
    <Container maxWidth="sm">
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            56K Merchandise Store
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Welcome to the 56K Merchandise Store, this website is primarily used for testing
            out technical implementations of Googles Marketing tools.
          </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="secondary" onClick={promotionPage}>
                  View promotion
                </Button>
              </Grid>
            </Grid>
      </Container>
      </div>
        <Loading text={"Fetching top products"} />
      </>
    );
  }
  return (
    <div>
    <div className={classes.heroContent}>
    <Container maxWidth="sm">
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            56K Merchandise Store
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Welcome to the 56K Merchandise Store, this website is primarily used for testing
            out technical implementations of Googles Marketing tools.
          </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="secondary" onClick={promotionPage}>
                  View promotion
                </Button>
              </Grid>
            </Grid>
      </Container>
      </div>
      <Container maxWidth="lg">
      <Typography variant="h5" className={classes.title} color="inherit">
        Top products
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <ProductSuggestions products={products} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
