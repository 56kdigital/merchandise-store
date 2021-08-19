import React from "react";

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "Page Impression",

  environmentInfo: {
    name:     "Production", // Or for example 'Local Test'.
    type:     "Production", // Or for example 'Dev Test'.
    platform: "React", // Name of the platform. E.g. 'WordPress'.
    isProduction:  true/false,
    version:      ""        // Only relevant for apps.
  },

  pageInfo: {
    url: document.location.origin + document.location.pathname + document.location.search,
    canonicalUrl: "",
    virtualUrlPath: document.location.pathname + document.location.search,
    title: document.title,
    type: "Product Detail Page",
    
    flow: "",
    name: "",
    id: "",
    
    trigger: "Page Load", // 'Virtual Page Load'
    httpStatusCode: ""
  },

  userInfo: {
    loggedIn:   true/false,
    id:        "d65dsf766sd89f0s",
  }
});


export default function dataLayerPageImpression() {

    const dataLayerPageImpression = () => {
        if (typeof window !== 'undefined'){
          window.dataLayer.push({
            event: "pageview",
            url: document.location.origin + document.location.pathname + document.location.search,
            virtualUrlPath: document.location.pathname + document.location.search,
            title: document.title
          });
        }
        console.log("DataLayerPageImpression injected in Product.js")
      }

  return dataLayerPageImpression();
}

