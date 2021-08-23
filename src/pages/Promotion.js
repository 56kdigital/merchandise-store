import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1),
  },
  promotionContent: {
    padding: theme.spacing(8, 0, 0),
  },
}));


export default function Promotion() {
  
  const classes = useStyles();

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
    console.log("DataLayerPageImpression injected in Promotion.js")
  }

  return (
    <div>
        <div className={classes.promotionContent}>
        <Container maxWidth="md">
        <Typography component="h1" variant="h3" gutterBottom>
          This is a promotion
        </Typography>
        <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
          This is a promotion page that will be visible in various areas accross the website.
        </Typography>
        </Container>
        </div>
    </div>
  );
}
