import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { useProductsWithCategory } from "../hooks/useProducts";
import Loading from "../components/Loading";
import ProductGrid from "../components/ProductGrid";

export default function Products() {
  
  const { category } = useParams();
  const { response: products, loading } = useProductsWithCategory(category);

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
    console.log("DataLayerPageImpression injected in Products.js")
  }


  if (loading) {
    return <Loading text={`Fetching products for ${category}`} />;
  }

  return (
    <>
    <Container maxWidth="md">
      <ProductGrid products={products} />
    </Container>
    </>
  );
}
