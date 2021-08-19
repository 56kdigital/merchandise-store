(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),o=(a(114),a(19)),s=a(96),l=a(18),d=(a(115),a(20)),u=a(12),j=a(213),m=a(68),p=a(95),h=a(214),b=c.a.createContext(),x=b,g=(b.Consumer,b.Provider),O=a(191),f=a(201),v=a(202),y=a(194),w=a(203),C=a(45),N=a.n(C),L=a(204),k=a(200),T=a(220),P=a(93),A=a.n(P),B=a(92),S=a.n(B),D=a(197),I=a(199),q=a(198),E=a(99),W=a(91),F=a.n(W),R=a(50),U=a.n(R);function z(e,t,a){var i=c.a.useState(null),r=Object(l.a)(i,2),s=r[0],d=r[1],u=c.a.useState(!0),j=Object(l.a)(u,2),m=j[0],p=j[1];return Object(n.useEffect)((function(){var n=new AbortController,c=n.signal;return U()("".concat("https://fakestoreapi.com").concat(e),Object(o.a)(Object(o.a)({method:t},a?{body:a}:{}),{},{headers:{Accept:"application/json","Content-Type":"application/json"}})).then((function(e){c.aborted||(d(e.data),p(!1))})).catch((function(e){return console.warn("Something gone wrong",e)})),function(){return n.abort()}}),[e,t,a]),{response:s,loading:m}}function G(e){return z("/products/category/".concat(e),"GET")}function $(e){return function(e,t,a){var i=c.a.useState(null),r=Object(l.a)(i,2),o=r[0],s=r[1],d=c.a.useState(!0),u=Object(l.a)(d,2),j=u[0],m=u[1],p=c.a.useRef(e).current;return Object(n.useEffect)((function(){var e=new AbortController,t=e.signal,a=p.map((function(e){return U.a.get("".concat("https://fakestoreapi.com").concat(e))}));return U.a.all(a).then((function(e){if(!t.aborted){var a=e.map((function(e){return e.data}));s(a),m(!1)}})).catch((function(e){return console.warn("Something gone wrong",e)})),function(){return e.abort()}}),[p]),{response:o,loading:j}}(e.map((function(e){var t=e.id;return"/products/".concat(t)})))}var M=a(196),Y=a(1),Q=Object(O.a)((function(e){return{textContainer:{textAlign:"center",marginTop:e.spacing(2)},text:{verticalAlign:"super",color:e.palette.secondary.main}}}));function H(e){var t=e.text,a=void 0===t?"Loading":t,c=Q(),i=Object(n.useState)(a),r=Object(l.a)(i,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){var e=window.setInterval((function(){s((function(e){return e==="".concat(a,"...")?a:"".concat(e,".")}))}),300);return function(){return window.clearInterval(e)}}),[a]),Object(Y.jsx)("div",{className:"container",children:Object(Y.jsxs)(y.a,{variant:"h5",className:c.textContainer,children:[Object(Y.jsx)(M.a,{})," ",Object(Y.jsxs)("span",{className:c.text,children:[" ",o," "]})]})})}var J=c.a.forwardRef((function(e,t){return Object(Y.jsx)(D.a,Object(o.a)({direction:"up",ref:t},e))})),Z=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},paper:{marginTop:e.spacing(2),padding:e.spacing(1)},media:{height:200,width:200,marginLeft:"auto",marginRight:"auto",display:"block"},button:{marginTop:e.spacing(1)},buttonClear:{marginTop:e.spacing(1),backgroundColor:e.palette.secondary.light,float:"right"}}}));function K(e){var t=e.product,a=Z();return Object(Y.jsxs)(q.a,{container:!0,spacing:1,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:4,children:Object(Y.jsx)("img",{className:a.media,src:t.image,alt:t.name})}),Object(Y.jsxs)(q.a,{item:!0,xs:12,sm:8,children:[Object(Y.jsx)(y.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["$ ",t.price]}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["Quantity: ",t.quantity]})]})]})}function X(e){var t=e.products,a=e.cart,n=e.handleClose,c=e.clearAll,i=Z(),r=Object(u.f)();if(0===t.length)return Object(Y.jsxs)(y.a,{variant:"h6",children:["Your cart is empty, continue shopping at ",Object(Y.jsx)("a",{href:"/",children:document.location.origin})]});var o=t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return e.quantity=t.quantity,e.total=t.quantity*e.price,e})),s=o.map((function(e){return e.total})).reduce((function(e,t){return e+t}));return Object(Y.jsxs)(I.a,{maxWidth:"lg",children:[Object(Y.jsxs)(y.a,{color:"secondary",variant:"h6",children:["ITEMS IN CART ",o.length]}),Object(Y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:8,children:Object(Y.jsx)(E.a,{elevation:3,className:i.paper,children:o.map((function(e){return Object(Y.jsx)(K,{product:e},e.id)}))})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:4,children:Object(Y.jsxs)(E.a,{elevation:3,className:i.paper,children:[Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"primary",children:["TOTAL: $ ",s]}),Object(Y.jsx)(k.a,{variant:"contained",color:"secondary",onClick:function(){n(),r.push("/checkout")},className:i.button,startIcon:Object(Y.jsx)(F.a,{}),children:"Checkout"}),Object(Y.jsx)(k.a,{variant:"contained",onClick:function(){c(),n()},className:i.buttonClear,startIcon:Object(Y.jsx)(S.a,{}),children:"Clear All"})]})})]})]})}function V(e){var t=e.open,a=e.handleClose,n=Z(),i=c.a.useContext(x),r=i.cart,o=i.clearAll,s=$(r),l=s.response,d=s.loading;return Object(Y.jsxs)(T.a,{fullScreen:!0,open:t,onClose:a,TransitionComponent:J,children:[Object(Y.jsx)(f.a,{className:n.appBar,children:Object(Y.jsxs)(v.a,{children:[Object(Y.jsx)(w.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close",children:Object(Y.jsx)(A.a,{})}),Object(Y.jsx)(y.a,{variant:"h6",className:n.title,children:"Cart"})]})}),d?Object(Y.jsx)(H,{text:"Loading your cart"}):Object(Y.jsx)(X,{products:l,cart:r,clearAll:o,handleClose:a})]})}var _=Object(O.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},logo:{textDecoration:"none",color:e.palette.secondary.main}}}));function ee(){var e=_(),t=c.a.useContext(x).cart,a=c.a.useState(!1),n=Object(l.a)(a,2),i=n[0],r=n[1];return Object(Y.jsxs)("div",{className:e.root,children:[Object(Y.jsx)(f.a,{position:"static",children:Object(Y.jsxs)(v.a,{children:[Object(Y.jsx)(y.a,{variant:"h6",className:e.title,children:Object(Y.jsx)(d.b,{className:e.logo,to:"/",children:"56K Merchandise Store"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(w.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(){r(!0)},children:Object(Y.jsx)(L.a,{badgeContent:t.length,color:"secondary",children:Object(Y.jsx)(N.a,{})})})})]})}),i&&Object(Y.jsx)(V,{open:i,handleClose:function(){r(!1)}})]})}var te=a(216),ae=a(205);function ne(){var e=Object(u.g)();return Object(Y.jsx)(E.a,{square:!0,children:Object(Y.jsxs)(te.a,{value:!!e.state&&e.state.category,indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"Menu",children:[Object(Y.jsx)(ae.a,{label:"men's clothing",value:"men's clothing",component:d.b,to:{pathname:"/men's clothing",state:{category:"men's clothing"}}},"men's clothing"),Object(Y.jsx)(ae.a,{label:"jewelery",value:"jewelery",component:d.b,to:{pathname:"/jewelery",state:{category:"jewelery"}}},"jewelery"),Object(Y.jsx)(ae.a,{label:"electronics",value:"electronics",component:d.b,to:{pathname:"/electronics",state:{category:"electronics"}}},"electronics"),Object(Y.jsx)(ae.a,{label:"women's clothing",value:"women's clothing",component:d.b,to:{pathname:"/women's clothing",state:{category:"women's clothing"}}},"women's clothing")]})})}var ce=Object(O.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,padding:e.spacing(2),color:e.palette.secondary.light,position:"absolute",left:0,bottom:"-190px",width:"100%",height:80}}}));function ie(){var e=ce();return Object(Y.jsx)("footer",{className:e.root,children:Object(Y.jsx)(y.a,{variant:"subtitle1",children:Object(Y.jsx)("p",{style:{float:"right"},children:"\xa9 Copyright 2021. All Rights Reserved."})})})}var re=a(206),oe=a(208),se=a(209),le=a(207),de=a(210),ue=Object(O.a)((function(e){return{root:{width:300,margin:e.spacing(2)},media:{height:300,width:300,marginLeft:"auto",marginRight:"auto",display:"block"},title:{padding:e.spacing(1),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},price:{color:e.palette.secondary.main,position:"relative",top:e.spacing(2)},footer:{display:"flex",justifyContent:"space-between"},cartButton:{position:"relative",left:204,bottom:4}}}));function je(e){var t=e.product,a=ue(),n=Object(u.f)(),i=c.a.useContext(x),r="/".concat(t.category,"/").concat(t.id);return Object(Y.jsxs)(re.a,{className:a.root,children:[Object(Y.jsxs)(le.a,{onClick:function(e){return n.push(r,{category:t.category})},children:[Object(Y.jsx)(oe.a,{className:a.media,image:t.image,title:t.title,alt:t.title}),Object(Y.jsxs)(se.a,{children:[Object(Y.jsx)(y.a,{className:a.title,variant:"h5",children:t.title}),Object(Y.jsx)("div",{className:a.footer,children:Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"h5",className:a.price,children:["$ ",t.price]})})]})]}),Object(Y.jsx)(de.a,{color:"secondary","aria-label":"cart",className:a.cartButton,onClick:function(e){!function(e){e.preventDefault(),console.log(e.target),i.addItem(t.id)}(e),function(e){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"addToCart",ecommerce:{currencyCode:"USD",add:{products:[{name:e.title,id:e.id,price:e.price,category:e.category,quantity:e.quantity}]}}}),console.log("DataLayerAddToCart injected in GridItem.js")}(t)},children:Object(Y.jsx)(N.a,{})})]})}var me=Object(O.a)((function(e){return{container:{flex:1,display:"flex",overflowX:"auto",overflowY:"hidden"}}}));function pe(e){var t=e.products,a=me();Object(n.useEffect)((function(){c(t)}),[t]);var c=function(e){var t=1,a=e.map((function(e){return{name:e.title,id:e.id,price:e.price,category:e.category,list:"",position:t++}}));return window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{currencyCode:"USD",impressions:[a]}}),console.log("DataLayerProductImpression injected"),""};return Object(Y.jsx)("div",{className:a.container,children:t.map((function(e){return Object(Y.jsx)(q.a,{container:!0,item:!0,xs:12,sm:6,md:4,lg:4,children:Object(Y.jsx)(je,{product:e},e.id)},e.id)}))})}var he=Object(O.a)((function(e){return{title:{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,padding:e.spacing(1)}}}));function be(){var e=he(),t=function(){return z("/products?limit=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0),"GET")}(5),a=t.response,c=t.loading;Object(n.useEffect)((function(){i()}),[]);var i=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search,title:document.title}),console.log("DataLayerPageImpression injected in Home.js")};return c?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{className:"banner"}),Object(Y.jsx)(H,{text:"Fetching top products"})]}):Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{className:"banner"}),Object(Y.jsx)(y.a,{variant:"h5",className:e.title,children:"Top products"}),Object(Y.jsx)(I.a,{maxWidth:!1,children:Object(Y.jsx)(q.a,{container:!0,spacing:3,children:Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(pe,{products:a})})})})]})}var xe=Object(O.a)((function(e){return{root:{flexGrow:1}}}));function ge(e){var t=e.products,a=xe();function c(e){var t=1;return e.map((function(e){return{name:e.title,id:e.id,price:e.price,category:e.category,list:"Home Page",position:t++}}))}return Object(n.useEffect)((function(){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{currencyCode:"USD",impressions:[c(t)]}})}),[t]),Object(Y.jsx)("div",{className:a.root,children:Object(Y.jsx)(q.a,{container:!0,spacing:4,children:t.map((function(e){return Object(Y.jsx)(q.a,{item:!0,xs:12,sm:6,md:4,lg:4,children:Object(Y.jsx)(je,{product:e})},e.id)}))})})}function Oe(){var e=Object(u.h)().category,t=G(e),a=t.response,c=t.loading;Object(n.useEffect)((function(){i()}),[]);var i=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search,title:document.title}),console.log("DataLayerPageImpression injected in Products.js")};return c?Object(Y.jsx)(H,{text:"Fetching products for ".concat(e)}):Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(I.a,{maxWidth:"md",children:Object(Y.jsx)(ge,{products:a})})})}var fe=a(211),ve=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8)},media:{height:"auto",width:400,marginLeft:"auto",marginRight:"auto",display:"block"},price:{color:e.palette.secondary.dark},condition:{fontSize:"8px"},title:{marginTop:e.spacing(4)},button:{marginTop:e.spacing(1)},divider:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},releated:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,padding:e.spacing(1)}}}));function ye(e,t){var a=function(e){return z("/products/".concat(e),"GET")}(e),n=a.response,c=a.loading,i=G(t);return{product:n,products:i.response,loading:i.loading||c}}function we(){var e=Object(u.h)(),t=ye(e.productId,e.category),a=t.product,i=t.products,r=t.loading,o=ve(),s=c.a.useContext(x),l=Object(n.useRef)(!1);Object(n.useEffect)((function(){d()}),[]);var d=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search,title:document.title}),console.log("DataLayerPageImpression injected in Product.js")},j=function(e){var t=e.product;return"undefined"!==typeof window&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{detail:{actionField:{list:"Apparel Gallery"},products:[{name:t.title,category:t.category}]}}})),console.log("DataLayerDetailImpression injected in Product.js"),l.current=!0};return r?Object(Y.jsx)(H,{text:"Fetching your product"}):Object(Y.jsxs)(I.a,{maxWidth:!1,children:[Object(Y.jsx)(E.a,{elevation:3,className:o.paper,children:Object(Y.jsxs)(q.a,{container:!0,children:[Object(Y.jsx)(q.a,{item:!0,xs:6,children:Object(Y.jsx)("img",{className:o.media,src:a.image,alt:a.name})}),Object(Y.jsxs)(q.a,{item:!0,xs:6,children:[Object(Y.jsx)(y.a,{gutterBottom:!0,variant:"h5",className:o.title,children:a.title}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"h5",className:o.price,children:["$ ",a.price," ",Object(Y.jsx)("span",{className:o.condition,children:"(Incuding taxes)"})]}),Object(Y.jsx)(k.a,{variant:"contained",color:"secondary",onClick:function(e){!function(e){e.stopPropagation(),console.log(e.target),s.addItem(a.id)}(e),function(e){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"addToCart",ecommerce:{currencyCode:"USD",add:{products:[{name:e.title,id:e.id,price:e.price,category:e.category,quantity:e.quantity}]}}}),console.log("DataLayerAddToCart injected in Product.js")}(a)},className:o.button,startIcon:Object(Y.jsx)(N.a,{}),children:"Add to cart"}),Object(Y.jsx)(fe.a,{variant:"middle",className:o.divider}),Object(Y.jsx)(y.a,{gutterBottom:!0,variant:"h5",className:o.title,children:"Product description"}),Object(Y.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:a.description})]})]})}),Object(Y.jsx)(y.a,{variant:"h5",className:o.releated,children:"Related products"}),Object(Y.jsx)(I.a,{maxWidth:!1,children:Object(Y.jsx)(pe,{products:i.filter((function(e){return e.id!==a.id}))})}),null!==a&&!1===l.current&&Object(Y.jsx)(j,{product:a})]})}var Ce=a(60),Ne=a(221),Le=a(212),ke=a(219),Te=a(215);function Pe(e){var t=e.state,a=e.handleChange;Object(n.useEffect)((function(){c(),i()}),[]);var c=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/enterpersonaldetails",title:document.title}),console.log("DataLayerPageImpression injected in UserForm.js")},i=function(){"undefined"!==typeof window&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"checkout",ecommerce:{checkout:{actionField:{step:1}}}})),console.log("DataLayerCheckoutStep 1 injected in UserForm.js")},r=t.firstName,o=t.lastName,s=t.email;return Object(Y.jsx)(I.a,{maxWidth:"sm",children:Object(Y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(Te.a,{label:"First Name",id:"firstName",value:r,variant:"outlined",size:"small",onChange:function(e){return a({name:"firstName",value:e.target.value})},fullWidth:!0})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(Te.a,{label:"Last Name",id:"lastName",value:o,variant:"outlined",size:"small",onChange:function(e){return a({name:"lastName",value:e.target.value})},fullWidth:!0})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(Te.a,{label:"Email",id:"email",value:s,variant:"outlined",size:"small",onChange:function(e){return a({name:"email",value:e.target.value})},fullWidth:!0})})]})})}function Ae(e){var t=e.state,a=e.handleChange;Object(n.useEffect)((function(){c(),i()}),[]);var c=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/shippingadress",title:document.title}),console.log("DataLayerPageImpression injected in ShippingForm.js")},i=function(){"undefined"!==typeof window&&(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"checkout",ecommerce:{checkout:{actionField:{step:2}}}})),console.log("DataLayerCheckoutStep 2 injected in UserForm.js")},r=t.address,o=t.city,s=t.zipcode;return Object(Y.jsx)(I.a,{maxWidth:"sm",children:Object(Y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(Te.a,{label:"Address",id:"address",value:r,variant:"outlined",multiline:!0,rows:4,size:"small",onChange:function(e){return a({name:"address",value:e.target.value})},fullWidth:!0})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(Te.a,{label:"City",id:"city",value:o,variant:"outlined",size:"small",onChange:function(e){return a({name:"city",value:e.target.value})},fullWidth:!0})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(Te.a,{label:"Zipcode",id:"zipcode",value:s,variant:"outlined",size:"small",onChange:function(e){return a({name:"zipcode",value:e.target.value})},fullWidth:!0})})]})})}var Be=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},paper:{marginTop:e.spacing(2),padding:e.spacing(1)},text:{marginLeft:e.spacing(1)},media:{height:200,width:200,marginLeft:"auto",marginRight:"auto",display:"block"},button:{marginTop:e.spacing(1)},buttonClear:{marginTop:e.spacing(1),backgroundColor:e.palette.secondary.light,float:"right"}}}));function Se(e){var t=e.product,a=Be();return Object(Y.jsxs)(q.a,{container:!0,spacing:1,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:4,children:Object(Y.jsx)("img",{className:a.media,src:t.image,alt:t.name})}),Object(Y.jsxs)(q.a,{item:!0,xs:12,sm:8,children:[Object(Y.jsx)(y.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["$ ",t.price]}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["Quantity: ",t.quantity]})]})]})}function De(e){var t=e.products,a=e.cart,n=Be(),c=t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return e.quantity=t.quantity,e.total=t.quantity*e.price,e})),i=c.map((function(e){return e.total})).reduce((function(e,t){return e+t}));return Object(Y.jsx)(I.a,{maxWidth:"sm",children:Object(Y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsxs)(E.a,{elevation:3,className:n.paper,children:[Object(Y.jsx)(y.a,{variant:"h6",children:"Product Details"}),c.map((function(e){return Object(Y.jsx)(Se,{product:e},e.id)}))]})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(E.a,{elevation:3,className:n.paper,children:Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"primary",children:["TOTAL: $ ",i]})})})]})})}function Ie(e){var t=e.state;Object(n.useEffect)((function(){a()}),[]);var a=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/confirmdetails",title:document.title}),console.log("DataLayerPageImpression injected in ConfirmDetails.js")},i=c.a.useContext(x).cart,r=$(i),o=r.response,s=r.loading,l=t.firstName,d=t.lastName,u=t.email,j=t.address,m=t.city,p=t.zipcode,h=Be();return Object(Y.jsx)(I.a,{maxWidth:"sm",children:Object(Y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsxs)(E.a,{elevation:3,className:h.paper,children:[Object(Y.jsx)(y.a,{variant:"h6",children:"Personal Details"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"First Name:"}),Object(Y.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:l})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Last Name:"}),Object(Y.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:d||"-NA-"})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Email:"}),Object(Y.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:u})]})]})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsxs)(E.a,{elevation:3,className:h.paper,children:[Object(Y.jsx)(y.a,{variant:"h6",children:"Shipping Address"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Address:"}),Object(Y.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:j})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"City:"}),Object(Y.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:m})]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Zipcode:"}),Object(Y.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:p})]})]})}),s?Object(Y.jsx)(H,{text:"Loading your cart"}):Object(Y.jsx)(De,{products:o,cart:i})]})})}var qe=a(218),Ee=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},paper:{marginTop:e.spacing(2),padding:e.spacing(1)},text:{marginLeft:e.spacing(1)},media:{height:200,width:200,marginLeft:"auto",marginRight:"auto",display:"block"},button:{marginTop:e.spacing(1)},buttonClear:{marginTop:e.spacing(1),backgroundColor:e.palette.secondary.light,float:"right"}}}));function We(e){var t=e.product,a=Ee();return Object(Y.jsxs)(q.a,{container:!0,spacing:1,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:4,children:Object(Y.jsx)("img",{className:a.media,src:t.image,alt:t.name})}),Object(Y.jsxs)(q.a,{item:!0,xs:12,sm:8,children:[Object(Y.jsx)(y.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["$ ",t.price]}),Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["Quantity: ",t.quantity]})]})]})}function Fe(e){var t=e.products,a=e.cart,n=Ee(),c=t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return e.quantity=t.quantity,e.total=t.quantity*e.price,e})),i=c.map((function(e){return e.total})).reduce((function(e,t){return e+t}));return Object(Y.jsx)(I.a,{maxWidth:"sm",children:Object(Y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsxs)(E.a,{elevation:3,className:n.paper,children:[Object(Y.jsx)(y.a,{variant:"h6",children:"Product Details"}),c.map((function(e){return Object(Y.jsx)(We,{product:e},e.id)}))]})}),Object(Y.jsx)(q.a,{item:!0,xs:12,sm:12,children:Object(Y.jsx)(E.a,{elevation:3,className:n.paper,children:Object(Y.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"primary",children:["TOTAL: $ ",i]})})})]})})}function Re(){var e=Ee(),t=c.a.useContext(x).cart,a=$(t),i=a.response,r=a.loading;Object(n.useEffect)((function(){o()}),[]);var o=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/thankyou",title:document.title}),console.log("DataLayerPageImpression injected in ThankYou.js")},s=function(){var e=i.map((function(e){var a=t.find((function(t){return t.id===e.id}));return e.total=a.quantity*e.price,e.total})).reduce((function(e,t){return e+t}),0),a=i.map((function(e){return{name:e.title,id:e.id,price:e.price,category:e.category,quantity:e.quantity}}));return window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{purchase:{actionField:{id:Object(qe.a)(),revenue:e,tax:.25*e,shipping:5.99},products:[a]}}}),console.log("DataLayerPurchase injected in ThankYou.js"),""};return Object(Y.jsxs)(Y.Fragment,{children:[r?Object(Y.jsx)(H,{text:"Loading your cart"}):Object(Y.jsx)(s,{products:i}),Object(Y.jsxs)(I.a,{maxWidth:"sm",children:[Object(Y.jsx)(E.a,{elevation:3,className:e.paper,children:Object(Y.jsxs)(y.a,{variant:"subtitle1",color:"primary",children:["Thank you for placing your order"," ",Object(Y.jsxs)("span",{role:"img",description:"aria-label",children:[" ","\ud83c\udf8a"]})]})}),Object(Y.jsx)(q.a,{children:r?Object(Y.jsx)(H,{text:"Loading your cart"}):Object(Y.jsx)(Fe,{products:i,cart:t})})]})]})}var Ue=Object(O.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},buttonContainer:{textAlign:"center",marginTop:e.spacing(6)}}}));function ze(e,t,a){switch(e){case 0:return Object(Y.jsx)(Pe,{handleChange:t,state:a});case 1:return Object(Y.jsx)(Ae,{handleChange:t,state:a});case 2:return Object(Y.jsx)(Ie,{state:a});case 3:return Object(Y.jsx)(Re,{state:a});default:return"Unknown step"}}function Ge(e,t){if("changed"===t.type)return Object(o.a)(Object(o.a)({},e),{},Object(Ce.a)({},t.key,t.value))}function $e(){var e=Object(u.f)(),t=c.a.useContext(x),a=c.a.useReducer(Ge,{firstName:"",lastName:"",email:"",address:"",city:"",zipcode:""}),n=Object(l.a)(a,2),i=n[0],r=n[1],s=Ue(),d=c.a.useState(0),j=Object(l.a)(d,2),m=j[0],p=j[1],h=["Enter personal details","Shipping Address","Confirm details","Thank you"];return Object(Y.jsxs)("div",{className:s.root,children:[Object(Y.jsx)(Ne.a,{activeStep:m,children:h.map((function(e,t){return Object(Y.jsx)(Le.a,Object(o.a)(Object(o.a)({},{}),{},{children:Object(Y.jsx)(ke.a,Object(o.a)(Object(o.a)({},{}),{},{children:e}))}),e)}))}),Object(Y.jsx)("div",{children:m===h.length?Object(Y.jsx)("div",{children:Object(Y.jsx)(k.a,{onClick:function(){p(0)},className:s.button,children:"Reset"})}):Object(Y.jsxs)("div",{children:[ze(m,(function(e){var t=e.name,a=e.value;r({type:"changed",key:t,value:a})}),i),Object(Y.jsxs)("div",{className:s.buttonContainer,children:[Object(Y.jsx)(k.a,{disabled:0===m,onClick:function(){p((function(e){return e-1}))},className:s.button,children:"Back"}),Object(Y.jsx)(k.a,{variant:"contained",color:"primary",size:"large",onClick:function(){m===h.length-1?(t.clearAll(),e.push("/")):p((function(e){return e+1}))},className:s.button,children:m===h.length-2?"Place order":"Next"})]})]})})]})}Object(O.a)((function(e){return{title:{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,padding:e.spacing(1)}}}));var Me=a(94);a.n(Me).a.initialize({gtmId:"GTM-54RMNL3"});var Ye=Object(p.a)({palette:{primary:{main:j.a[300]},secondary:{main:m.a[900]}}});var Qe=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.a)(a),r=function(e){a.find((function(t){return t.id===e}))?(i=i.map((function(t){return e===t.id?Object(o.a)(Object(o.a)({},t),{},{quantity:t.quantity+1}):t})),n(i)):(i.push({id:e,quantity:1}),n(i))},j=function(){n([])},m=c.a.useMemo((function(){return{cart:a,addItem:r,clearAll:j}}),[a]);return Object(Y.jsx)("div",{className:"App",children:Object(Y.jsx)(d.a,{basename:"",children:Object(Y.jsx)(h.a,{theme:Ye,children:Object(Y.jsxs)(g,{value:m,children:[Object(Y.jsx)(ee,{}),Object(Y.jsx)(ne,{}),Object(Y.jsxs)(u.c,{children:[Object(Y.jsx)(u.a,{exact:!0,path:"/checkout",children:Object(Y.jsx)($e,{})}),Object(Y.jsx)(u.a,{path:"/:category/:productId",children:Object(Y.jsx)(we,{})}),Object(Y.jsx)(u.a,{exact:!0,path:"/:category",children:Object(Y.jsx)(Oe,{})}),Object(Y.jsx)(u.a,{exact:!0,path:"/",children:Object(Y.jsx)(be,{})})]}),Object(Y.jsx)(ie,{})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(Y.jsx)(Qe,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.06d971f8.chunk.js.map