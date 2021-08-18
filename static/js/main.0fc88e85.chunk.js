(this["webpackJsonpmerchandise-store"]=this["webpackJsonpmerchandise-store"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),o=(a(114),a(19)),s=a(96),l=a(18),d=(a(115),a(20)),u=a(12),j=a(213),m=a(68),p=a(95),h=a(214),b=c.a.createContext(),x=b,g=(b.Consumer,b.Provider),O=a(191),f=a(201),v=a(202),y=a(194),w=a(203),C=a(45),N=a.n(C),L=a(204),k=a(200),T=a(220),B=a(93),A=a.n(B),P=a(92),S=a.n(P),q=a(197),I=a(199),D=a(198),E=a(99),W=a(91),R=a.n(W),z=a(50),U=a.n(z);function F(e,t,a){var i=c.a.useState(null),r=Object(l.a)(i,2),s=r[0],d=r[1],u=c.a.useState(!0),j=Object(l.a)(u,2),m=j[0],p=j[1];return Object(n.useEffect)((function(){var n=new AbortController,c=n.signal;return U()("".concat("https://fakestoreapi.com").concat(e),Object(o.a)(Object(o.a)({method:t},a?{body:a}:{}),{},{headers:{Accept:"application/json","Content-Type":"application/json"}})).then((function(e){c.aborted||(d(e.data),p(!1))})).catch((function(e){return console.warn("Something gone wrong",e)})),function(){return n.abort()}}),[e,t,a]),{response:s,loading:m}}function $(e){return F("/products/category/".concat(e),"GET")}function G(e){return function(e,t,a){var i=c.a.useState(null),r=Object(l.a)(i,2),o=r[0],s=r[1],d=c.a.useState(!0),u=Object(l.a)(d,2),j=u[0],m=u[1],p=c.a.useRef(e).current;return Object(n.useEffect)((function(){var e=new AbortController,t=e.signal,a=p.map((function(e){return U.a.get("".concat("https://fakestoreapi.com").concat(e))}));return U.a.all(a).then((function(e){if(!t.aborted){var a=e.map((function(e){return e.data}));s(a),m(!1)}})).catch((function(e){return console.warn("Something gone wrong",e)})),function(){return e.abort()}}),[p]),{response:o,loading:j}}(e.map((function(e){var t=e.id;return"/products/".concat(t)})))}var M=a(196),H=a(1),Y=Object(O.a)((function(e){return{textContainer:{textAlign:"center",marginTop:e.spacing(2)},text:{verticalAlign:"super",color:e.palette.secondary.main}}}));function Q(e){var t=e.text,a=void 0===t?"Loading":t,c=Y(),i=Object(n.useState)(a),r=Object(l.a)(i,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){var e=window.setInterval((function(){s((function(e){return e==="".concat(a,"...")?a:"".concat(e,".")}))}),300);return function(){return window.clearInterval(e)}}),[a]),Object(H.jsx)("div",{className:"container",children:Object(H.jsxs)(y.a,{variant:"h5",className:c.textContainer,children:[Object(H.jsx)(M.a,{})," ",Object(H.jsxs)("span",{className:c.text,children:[" ",o," "]})]})})}var J=c.a.forwardRef((function(e,t){return Object(H.jsx)(q.a,Object(o.a)({direction:"up",ref:t},e))})),Z=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},paper:{marginTop:e.spacing(2),padding:e.spacing(1)},media:{height:200,width:200,marginLeft:"auto",marginRight:"auto",display:"block"},button:{marginTop:e.spacing(1)},buttonClear:{marginTop:e.spacing(1),backgroundColor:e.palette.secondary.light,float:"right"}}}));function K(e){var t=e.product,a=Z();return Object(H.jsxs)(D.a,{container:!0,spacing:1,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)("img",{className:a.media,src:t.image,alt:t.name})}),Object(H.jsxs)(D.a,{item:!0,xs:12,sm:8,children:[Object(H.jsx)(y.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["$ ",t.price]}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["Quantity: ",t.quantity]})]})]})}function X(e){var t=e.products,a=e.cart,n=e.handleClose,c=e.clearAll,i=Z(),r=Object(u.f)();if(0===t.length)return Object(H.jsxs)(y.a,{variant:"h6",children:["Your cart is empty, continue shopping at ",Object(H.jsx)("a",{href:"/",children:document.location.origin})]});var o=t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return e.quantity=t.quantity,e.total=t.quantity*e.price,e})),s=o.map((function(e){return e.total})).reduce((function(e,t){return e+t}));return Object(H.jsxs)(I.a,{maxWidth:"lg",children:[Object(H.jsxs)(y.a,{color:"secondary",variant:"h6",children:["ITEMS IN CART ",o.length]}),Object(H.jsxs)(D.a,{container:!0,spacing:3,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:8,children:Object(H.jsx)(E.a,{elevation:3,className:i.paper,children:o.map((function(e){return Object(H.jsx)(K,{product:e},e.id)}))})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:4,children:Object(H.jsxs)(E.a,{elevation:3,className:i.paper,children:[Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"primary",children:["TOTAL: $ ",s]}),Object(H.jsx)(k.a,{variant:"contained",color:"secondary",onClick:function(){n(),r.push("/checkout")},className:i.button,startIcon:Object(H.jsx)(R.a,{}),children:"Checkout"}),Object(H.jsx)(k.a,{variant:"contained",onClick:function(){c(),n()},className:i.buttonClear,startIcon:Object(H.jsx)(S.a,{}),children:"Clear All"})]})})]})]})}function V(e){var t=e.open,a=e.handleClose,n=Z(),i=c.a.useContext(x),r=i.cart,o=i.clearAll,s=G(r),l=s.response,d=s.loading;return Object(H.jsxs)(T.a,{fullScreen:!0,open:t,onClose:a,TransitionComponent:J,children:[Object(H.jsx)(f.a,{className:n.appBar,children:Object(H.jsxs)(v.a,{children:[Object(H.jsx)(w.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close",children:Object(H.jsx)(A.a,{})}),Object(H.jsx)(y.a,{variant:"h6",className:n.title,children:"Cart"})]})}),d?Object(H.jsx)(Q,{text:"Loading your cart"}):Object(H.jsx)(X,{products:l,cart:r,clearAll:o,handleClose:a})]})}var _=Object(O.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},logo:{textDecoration:"none",color:e.palette.secondary.main}}}));function ee(){var e=_(),t=c.a.useContext(x).cart,a=c.a.useState(!1),n=Object(l.a)(a,2),i=n[0],r=n[1];return Object(H.jsxs)("div",{className:e.root,children:[Object(H.jsx)(f.a,{position:"static",children:Object(H.jsxs)(v.a,{children:[Object(H.jsx)(y.a,{variant:"h6",className:e.title,children:Object(H.jsx)(d.b,{className:e.logo,to:"/",children:"56K Merchandise Store"})}),Object(H.jsx)("div",{children:Object(H.jsx)(w.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(){r(!0)},children:Object(H.jsx)(L.a,{badgeContent:t.length,color:"secondary",children:Object(H.jsx)(N.a,{})})})})]})}),i&&Object(H.jsx)(V,{open:i,handleClose:function(){r(!1)}})]})}var te=a(216),ae=a(205);function ne(){var e=Object(u.g)();return Object(H.jsx)(E.a,{square:!0,children:Object(H.jsxs)(te.a,{value:!!e.state&&e.state.category,indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"Menu",children:[Object(H.jsx)(ae.a,{label:"men's clothing",value:"men's clothing",component:d.b,to:{pathname:"/men's clothing",state:{category:"men's clothing"}}},"men's clothing"),Object(H.jsx)(ae.a,{label:"jewelery",value:"jewelery",component:d.b,to:{pathname:"/jewelery",state:{category:"jewelery"}}},"jewelery"),Object(H.jsx)(ae.a,{label:"electronics",value:"electronics",component:d.b,to:{pathname:"/electronics",state:{category:"electronics"}}},"electronics"),Object(H.jsx)(ae.a,{label:"women's clothing",value:"women's clothing",component:d.b,to:{pathname:"/women's clothing",state:{category:"women's clothing"}}},"women's clothing")]})})}var ce=Object(O.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,padding:e.spacing(2),color:e.palette.secondary.light,position:"absolute",left:0,bottom:"-190px",width:"100%",height:80}}}));function ie(){var e=ce();return Object(H.jsx)("footer",{className:e.root,children:Object(H.jsx)(y.a,{variant:"subtitle1",children:Object(H.jsx)("p",{style:{float:"right"},children:"\xa9 Copyright 2021. All Rights Reserved."})})})}var re=a(206),oe=a(208),se=a(209),le=a(207),de=a(210),ue=Object(O.a)((function(e){return{root:{width:300,margin:e.spacing(2)},media:{height:300,width:300,marginLeft:"auto",marginRight:"auto",display:"block"},title:{padding:e.spacing(1),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},price:{color:e.palette.secondary.main,position:"relative",top:e.spacing(2)},footer:{display:"flex",justifyContent:"space-between"},cartButton:{position:"relative",left:204,bottom:4}}}));function je(e){var t=e.product,a=ue(),n=Object(u.f)(),i=c.a.useContext(x),r="/".concat(t.category,"/").concat(t.id);return Object(H.jsxs)(re.a,{className:a.root,children:[Object(H.jsxs)(le.a,{onClick:function(e){return n.push(r,{category:t.category})},children:[Object(H.jsx)(oe.a,{className:a.media,image:t.image,title:t.title,alt:t.title}),Object(H.jsxs)(se.a,{children:[Object(H.jsx)(y.a,{className:a.title,variant:"subtitle1",children:t.title}),Object(H.jsx)("div",{className:a.footer,children:Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"h6",className:a.price,children:["$ ",t.price]})})]})]}),Object(H.jsx)(de.a,{color:"secondary","aria-label":"cart",className:a.cartButton,children:Object(H.jsx)(N.a,{onClick:function(e){!function(e){e.preventDefault(),console.log(e.target),i.addItem(t.id)}(e),function(e){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"addToCart",ecommerce:{currencyCode:"USD",add:{products:[{name:e.title,id:e.id,price:e.price,category:e.category,quantity:e.quantity}]}}}),console.log("DataLayerAddToCart injected in GridItem.js")}(t)}})})]})}var me=Object(O.a)((function(e){return{container:{flex:1,display:"flex",overflowX:"auto",overflowY:"hidden"}}}));function pe(e){var t=e.products,a=me();function c(e){var t=1;return e.map((function(e){return{name:e.title,id:e.id,price:e.price,category:e.category,list:"Home Page",position:t++}}))}return Object(n.useEffect)((function(){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{currencyCode:"USD",impressions:[c(t)]}})}),[t]),Object(H.jsx)("div",{className:a.container,children:t.map((function(e){return Object(H.jsx)(D.a,{container:!0,item:!0,xs:4,spacing:1,children:Object(H.jsx)(je,{product:e},e.id)},e.id)}))})}var he=Object(O.a)((function(e){return{title:{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,padding:e.spacing(1)}}}));function be(){var e=he(),t=function(){return F("/products?limit=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0),"GET")}(5),a=t.response,c=t.loading;Object(n.useEffect)((function(){i()}),[]);var i=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search,title:document.title}),console.log("DataLayerPageImpression injected in Home.js")};return c?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"banner"}),Object(H.jsx)(Q,{text:"Fetching top products"})]}):Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{className:"banner"}),Object(H.jsx)(y.a,{variant:"h5",className:e.title,children:"Top products"}),Object(H.jsx)(I.a,{maxWidth:!1,children:Object(H.jsx)(D.a,{container:!0,spacing:3,children:Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(pe,{products:a})})})})]})}var xe=Object(O.a)((function(e){return{root:{flexGrow:1}}}));function ge(e){var t=e.products,a=xe();function c(e){var t=1;return e.map((function(e){return{name:e.title,id:e.id,price:e.price,category:e.category,list:"Home Page",position:t++}}))}return Object(n.useEffect)((function(){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{currencyCode:"USD",impressions:[c(t)]}})}),[t]),Object(H.jsx)("div",{className:a.root,children:Object(H.jsx)(D.a,{container:!0,spacing:3,children:t.map((function(e){return Object(H.jsx)(D.a,{item:!0,xs:4,children:Object(H.jsx)(je,{product:e})},e.id)}))})})}function Oe(){var e=Object(u.h)().category,t=$(e),a=t.response,c=t.loading;Object(n.useEffect)((function(){i()}),[]);var i=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search,title:document.title}),console.log("DataLayerPageImpression injected in Products.js")};return c?Object(H.jsx)(Q,{text:"Fetching products for ".concat(e)}):Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(I.a,{maxWidth:"md",children:Object(H.jsx)(ge,{products:a})})})}var fe=a(211),ve=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8)},media:{height:"auto",width:400,marginLeft:"auto",marginRight:"auto",display:"block"},price:{color:e.palette.secondary.dark},condition:{fontSize:"8px"},title:{marginTop:e.spacing(4)},button:{marginTop:e.spacing(1)},divider:{marginTop:e.spacing(4),marginBottom:e.spacing(2)},releated:{marginTop:e.spacing(2),backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,padding:e.spacing(1)}}}));function ye(e,t){var a=function(e){return F("/products/".concat(e),"GET")}(e),n=a.response,c=a.loading,i=$(t);return{product:n,products:i.response,loading:i.loading||c}}function we(){var e=Object(u.h)(),t=ye(e.productId,e.category),a=t.product,i=t.products,r=t.loading,o=ve(),s=c.a.useContext(x);Object(n.useEffect)((function(){l()}),[]);var l=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search,title:document.title}),console.log("DataLayerPageImpression injected in Home.js")};return r?Object(H.jsx)(Q,{text:"Fetching your product"}):Object(H.jsxs)(I.a,{maxWidth:!1,children:[Object(H.jsx)(E.a,{elevation:3,className:o.paper,children:Object(H.jsxs)(D.a,{container:!0,children:[Object(H.jsx)(D.a,{item:!0,xs:6,children:Object(H.jsx)("img",{className:o.media,src:a.image,alt:a.name})}),Object(H.jsxs)(D.a,{item:!0,xs:6,children:[Object(H.jsx)(y.a,{gutterBottom:!0,variant:"h5",className:o.title,children:a.title}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"h6",className:o.price,children:["$ ",a.price," ",Object(H.jsx)("span",{className:o.condition,children:"(Incuding taxes)"})]}),Object(H.jsx)(k.a,{variant:"contained",color:"secondary",onClick:function(e){!function(e){e.stopPropagation(),console.log(e.target),s.addItem(a.id)}(e),function(e){window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:"addToCart",ecommerce:{currencyCode:"USD",add:{products:[{name:e.title,id:e.id,price:e.price,category:e.category,quantity:e.quantity}]}}}),console.log("DataLayerAddToCart injected in Product.js")}(a)},className:o.button,startIcon:Object(H.jsx)(N.a,{}),children:"Add to cart"}),Object(H.jsx)(fe.a,{variant:"middle",className:o.divider}),Object(H.jsx)(y.a,{gutterBottom:!0,variant:"h6",className:o.title,children:"Product description"}),Object(H.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:a.description})]})]})}),Object(H.jsx)(y.a,{variant:"h5",className:o.releated,children:"Related products"}),Object(H.jsx)(I.a,{maxWidth:!1,children:Object(H.jsx)(pe,{products:i.filter((function(e){return e.id!==a.id}))})})]})}var Ce=a(60),Ne=a(221),Le=a(212),ke=a(219),Te=a(215);function Be(e){var t=e.state,a=e.handleChange;Object(n.useEffect)((function(){c()}),[]);var c=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/enterpersonaldetails",title:document.title}),console.log("DataLayerPageImpression injected in UserForm.js")},i=t.firstName,r=t.lastName,o=t.email;return Object(H.jsx)(I.a,{maxWidth:"sm",children:Object(H.jsxs)(D.a,{container:!0,spacing:3,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(Te.a,{label:"First Name",id:"firstName",value:i,variant:"outlined",size:"small",onChange:function(e){return a({name:"firstName",value:e.target.value})},fullWidth:!0})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(Te.a,{label:"Last Name",id:"lastName",value:r,variant:"outlined",size:"small",onChange:function(e){return a({name:"lastName",value:e.target.value})},fullWidth:!0})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(Te.a,{label:"Email",id:"email",value:o,variant:"outlined",size:"small",onChange:function(e){return a({name:"email",value:e.target.value})},fullWidth:!0})})]})})}function Ae(e){var t=e.state,a=e.handleChange;Object(n.useEffect)((function(){c()}),[]);var c=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/shippingadress",title:document.title}),console.log("DataLayerPageImpression injected in ShippingForm.js")},i=t.address,r=t.city,o=t.zipcode;return Object(H.jsx)(I.a,{maxWidth:"sm",children:Object(H.jsxs)(D.a,{container:!0,spacing:3,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(Te.a,{label:"Address",id:"address",value:i,variant:"outlined",multiline:!0,rows:4,size:"small",onChange:function(e){return a({name:"address",value:e.target.value})},fullWidth:!0})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(Te.a,{label:"City",id:"city",value:r,variant:"outlined",size:"small",onChange:function(e){return a({name:"city",value:e.target.value})},fullWidth:!0})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(Te.a,{label:"Zipcode",id:"zipcode",value:o,variant:"outlined",size:"small",onChange:function(e){return a({name:"zipcode",value:e.target.value})},fullWidth:!0})})]})})}var Pe=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},paper:{marginTop:e.spacing(2),padding:e.spacing(1)},text:{marginLeft:e.spacing(1)},media:{height:200,width:200,marginLeft:"auto",marginRight:"auto",display:"block"},button:{marginTop:e.spacing(1)},buttonClear:{marginTop:e.spacing(1),backgroundColor:e.palette.secondary.light,float:"right"}}}));function Se(e){var t=e.product,a=Pe();return Object(H.jsxs)(D.a,{container:!0,spacing:1,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)("img",{className:a.media,src:t.image,alt:t.name})}),Object(H.jsxs)(D.a,{item:!0,xs:12,sm:8,children:[Object(H.jsx)(y.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["$ ",t.price]}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["Quantity: ",t.quantity]})]})]})}function qe(e){var t=e.products,a=e.cart,n=Pe(),c=t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return e.quantity=t.quantity,e.total=t.quantity*e.price,e})),i=c.map((function(e){return e.total})).reduce((function(e,t){return e+t}));return Object(H.jsx)(I.a,{maxWidth:"sm",children:Object(H.jsxs)(D.a,{container:!0,spacing:3,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsxs)(E.a,{elevation:3,className:n.paper,children:[Object(H.jsx)(y.a,{variant:"h6",children:"Product Details"}),c.map((function(e){return Object(H.jsx)(Se,{product:e},e.id)}))]})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(E.a,{elevation:3,className:n.paper,children:Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"primary",children:["TOTAL: $ ",i]})})})]})})}function Ie(e){var t=e.state;Object(n.useEffect)((function(){a()}),[]);var a=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/confirmdetails",title:document.title}),console.log("DataLayerPageImpression injected in ConfirmDetails.js")},i=c.a.useContext(x).cart,r=G(i),o=r.response,s=r.loading,l=t.firstName,d=t.lastName,u=t.email,j=t.address,m=t.city,p=t.zipcode,h=Pe();return Object(H.jsx)(I.a,{maxWidth:"sm",children:Object(H.jsxs)(D.a,{container:!0,spacing:3,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsxs)(E.a,{elevation:3,className:h.paper,children:[Object(H.jsx)(y.a,{variant:"h6",children:"Personal Details"}),Object(H.jsxs)("div",{children:[Object(H.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"First Name:"}),Object(H.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:l})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Last Name:"}),Object(H.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:d||"-NA-"})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Email:"}),Object(H.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:u})]})]})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsxs)(E.a,{elevation:3,className:h.paper,children:[Object(H.jsx)(y.a,{variant:"h6",children:"Shipping Address"}),Object(H.jsxs)("div",{children:[Object(H.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Address:"}),Object(H.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:j})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"City:"}),Object(H.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:m})]}),Object(H.jsxs)("div",{children:[Object(H.jsx)(y.a,{variant:"subtitle1",color:"primary",display:"inline",children:"Zipcode:"}),Object(H.jsx)(y.a,{variant:"subtitle1",color:"secondary",display:"inline",className:h.text,children:p})]})]})}),s?Object(H.jsx)(Q,{text:"Loading your cart"}):Object(H.jsx)(qe,{products:o,cart:i})]})})}var De=a(218),Ee=Object(O.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},paper:{marginTop:e.spacing(2),padding:e.spacing(1)},text:{marginLeft:e.spacing(1)},media:{height:200,width:200,marginLeft:"auto",marginRight:"auto",display:"block"},button:{marginTop:e.spacing(1)},buttonClear:{marginTop:e.spacing(1),backgroundColor:e.palette.secondary.light,float:"right"}}}));function We(e){var t=e.product,a=Ee();return Object(H.jsxs)(D.a,{container:!0,spacing:1,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:4,children:Object(H.jsx)("img",{className:a.media,src:t.image,alt:t.name})}),Object(H.jsxs)(D.a,{item:!0,xs:12,sm:8,children:[Object(H.jsx)(y.a,{gutterBottom:!0,variant:"h6",children:t.title}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["$ ",t.price]}),Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"secondary",children:["Quantity: ",t.quantity]})]})]})}function Re(e){var t=e.products,a=e.cart,n=Ee(),c=t.map((function(e){var t=a.find((function(t){return t.id===e.id}));return e.quantity=t.quantity,e.total=t.quantity*e.price,e})),i=c.map((function(e){return e.total})).reduce((function(e,t){return e+t}));return Object(H.jsx)(I.a,{maxWidth:"sm",children:Object(H.jsxs)(D.a,{container:!0,spacing:3,children:[Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsxs)(E.a,{elevation:3,className:n.paper,children:[Object(H.jsx)(y.a,{variant:"h6",children:"Product Details"}),c.map((function(e){return Object(H.jsx)(We,{product:e},e.id)}))]})}),Object(H.jsx)(D.a,{item:!0,xs:12,sm:12,children:Object(H.jsx)(E.a,{elevation:3,className:n.paper,children:Object(H.jsxs)(y.a,{gutterBottom:!0,variant:"subtitle1",color:"primary",children:["TOTAL: $ ",i]})})})]})})}function ze(){var e=Ee(),t=c.a.useContext(x).cart,a=G(t),i=a.response,r=a.loading;Object(n.useEffect)((function(){o()}),[]);var o=function(){"undefined"!==typeof window&&window.dataLayer.push({event:"pageview",url:document.location.origin+document.location.pathname+document.location.search,virtualUrlPath:document.location.pathname+document.location.search+"/thankyou",title:document.title}),console.log("DataLayerPageImpression injected in ThankYou.js")},s=function(){var e=i.map((function(e){var a=t.find((function(t){return t.id===e.id}));return e.total=a.quantity*e.price,e.total})).reduce((function(e,t){return e+t}),0),a=i.map((function(e){return{name:e.title,id:e.id,price:e.price,category:e.category,quantity:e.quantity}}));return window.dataLayer.push({ecommerce:null}),window.dataLayer.push({ecommerce:{purchase:{actionField:{id:Object(De.a)(),revenue:e,tax:.25*e,shipping:5.99},products:[a]}}}),console.log("DataLayerPurchase injected in ThankYou.js"),""};return Object(H.jsxs)(H.Fragment,{children:[r?Object(H.jsx)(Q,{text:"Loading your cart"}):Object(H.jsx)(s,{products:i}),Object(H.jsxs)(I.a,{maxWidth:"sm",children:[Object(H.jsx)(E.a,{elevation:3,className:e.paper,children:Object(H.jsxs)(y.a,{variant:"subtitle1",color:"primary",children:["Thank you for placing your order"," ",Object(H.jsxs)("span",{role:"img",description:"aria-label",children:[" ","\ud83c\udf8a"]})]})}),Object(H.jsx)(D.a,{children:r?Object(H.jsx)(Q,{text:"Loading your cart"}):Object(H.jsx)(Re,{products:i,cart:t})})]})]})}var Ue=Object(O.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},buttonContainer:{textAlign:"center",marginTop:e.spacing(6)}}}));function Fe(e,t,a){switch(e){case 0:return Object(H.jsx)(Be,{handleChange:t,state:a});case 1:return Object(H.jsx)(Ae,{handleChange:t,state:a});case 2:return Object(H.jsx)(Ie,{state:a});case 3:return Object(H.jsx)(ze,{state:a});default:return"Unknown step"}}function $e(e,t){if("changed"===t.type)return Object(o.a)(Object(o.a)({},e),{},Object(Ce.a)({},t.key,t.value))}function Ge(){var e=Object(u.f)(),t=c.a.useContext(x),a=c.a.useReducer($e,{firstName:"",lastName:"",email:"",address:"",city:"",zipcode:""}),n=Object(l.a)(a,2),i=n[0],r=n[1],s=Ue(),d=c.a.useState(0),j=Object(l.a)(d,2),m=j[0],p=j[1],h=["Enter personal details","Shipping Address","Confirm details","Thank you"];return Object(H.jsxs)("div",{className:s.root,children:[Object(H.jsx)(Ne.a,{activeStep:m,children:h.map((function(e,t){return Object(H.jsx)(Le.a,Object(o.a)(Object(o.a)({},{}),{},{children:Object(H.jsx)(ke.a,Object(o.a)(Object(o.a)({},{}),{},{children:e}))}),e)}))}),Object(H.jsx)("div",{children:m===h.length?Object(H.jsx)("div",{children:Object(H.jsx)(k.a,{onClick:function(){p(0)},className:s.button,children:"Reset"})}):Object(H.jsxs)("div",{children:[Fe(m,(function(e){var t=e.name,a=e.value;r({type:"changed",key:t,value:a})}),i),Object(H.jsxs)("div",{className:s.buttonContainer,children:[Object(H.jsx)(k.a,{disabled:0===m,onClick:function(){p((function(e){return e-1}))},className:s.button,children:"Back"}),Object(H.jsx)(k.a,{variant:"contained",color:"primary",size:"large",onClick:function(){m===h.length-1?(t.clearAll(),e.push("/")):p((function(e){return e+1}))},className:s.button,children:m===h.length-2?"Place order":"Next"})]})]})})]})}Object(O.a)((function(e){return{title:{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main,padding:e.spacing(1)}}}));var Me=a(94);a.n(Me).a.initialize({gtmId:"GTM-54RMNL3"});var He=Object(p.a)({palette:{primary:{main:j.a[300]},secondary:{main:m.a[900]}}});var Ye=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.a)(a),r=function(e){a.find((function(t){return t.id===e}))?(i=i.map((function(t){return e===t.id?Object(o.a)(Object(o.a)({},t),{},{quantity:t.quantity+1}):t})),n(i)):(i.push({id:e,quantity:1}),n(i))},j=function(){n([])},m=c.a.useMemo((function(){return{cart:a,addItem:r,clearAll:j}}),[a]);return Object(H.jsx)("div",{className:"App",children:Object(H.jsx)(d.a,{basename:"/merchandise-store",children:Object(H.jsx)(h.a,{theme:He,children:Object(H.jsxs)(g,{value:m,children:[Object(H.jsx)(ee,{}),Object(H.jsx)(ne,{}),Object(H.jsxs)(u.c,{children:[Object(H.jsx)(u.a,{exact:!0,path:"/checkout",children:Object(H.jsx)(Ge,{})}),Object(H.jsx)(u.a,{path:"/:category/:productId",children:Object(H.jsx)(we,{})}),Object(H.jsx)(u.a,{exact:!0,path:"/:category",children:Object(H.jsx)(Oe,{})}),Object(H.jsx)(u.a,{exact:!0,path:"/",children:Object(H.jsx)(be,{})})]}),Object(H.jsx)(ie,{})]})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(H.jsx)(Ye,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.0fc88e85.chunk.js.map