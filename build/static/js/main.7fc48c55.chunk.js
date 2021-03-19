(this["webpackJsonpinfo802-marketplace"]=this["webpackJsonpinfo802-marketplace"]||[]).push([[0],{34:function(e,a,t){e.exports=t(64)},39:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),s=t.n(c),l=(t(39),t(15)),i=t(9),o=t.n(i),m=t(12),u=t(27),d=t(28),p=t(33),h=t(32),v=t(10),E=t(1),f=t(29),g=t.n(f),b=r.a.createContext({}),N=function(e){return function(a){return r.a.createElement(b.Consumer,null,(function(t){return r.a.createElement(e,Object.assign({},a,{context:t}))}))}},y=function(e){var a=e.cartItem,t=e.cartKey,n=a.product,c=a.amount;return r.a.createElement("div",{className:" column is-half"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:n.shortDesc}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("b",{style:{textTransform:"capitalize"}},n.name," ",r.a.createElement("span",{className:"tag is-primary"},n.price," \u20ac")),r.a.createElement("div",null,n.shortDesc),r.a.createElement("small",null,"".concat(c," dans le panier"))),r.a.createElement("div",{className:"media-right",onClick:function(){return e.removeFromCart(t)}},r.a.createElement("span",{className:"delete is-large"})))))},x=N((function(e){var a=e.context.cart,t=Object.keys(a||{});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body container"},r.a.createElement("h4",{className:"title"},"Mon Panier"))),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},t.length?r.a.createElement("div",{className:"column columns is-multiline"},t.map((function(t){return r.a.createElement(y,{cartKey:t,key:t,cartItem:a[t],removeFromCart:e.context.removeFromCart})})),r.a.createElement("div",{className:"column is-12 is-clearfix"},r.a.createElement("br",null),r.a.createElement("div",{className:"is-pulled-right"},r.a.createElement("button",{onClick:e.context.clearCart,className:"button is-warning "},"Vider le panier")," ",r.a.createElement("button",{className:"button is-success",onClick:e.context.checkout},"Payer")))):r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"title has-text-grey-light"},"La panier est vide"))))})),k=function(e){var a=e.product;return r.a.createElement("div",{className:" column is-half"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:a.name}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("b",{style:{textTransform:"capitalize"}},a.name," ",r.a.createElement("span",{className:"tag is-primary"},a.price," \u20ac")),r.a.createElement("div",null,a.description),r.a.createElement("small",null,a.distance+" km de transport"),r.a.createElement("div",{className:"is-clearfix"},r.a.createElement("button",{className:"button is-small is-outlined is-primary   is-pulled-right",onClick:function(){return e.addToCart({id:a.name,product:a,amount:1})}},"Ajouter au panier"))))))},C=N((function(e){var a=e.context.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body container"},r.a.createElement("h4",{className:"title"},"Liste des articles"))),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column columns is-multiline"},a&&a.length?a.map((function(a,t){return r.a.createElement(k,{product:a,key:t,addToCart:e.context.addToCart})})):r.a.createElement("div",{className:"column"},r.a.createElement("span",{className:"title has-text-grey-light"},"Aucun article en vente")))))})),w=t(30),j=Object(w.a)("pk_test_51IWMLVB0L4ACn1yoUBuG6Jj0jkAJaAlLQgBFAKdnKmZ0JfATQS8WUu1vzumMSn4s51qna2ySfZKXixShegVTQs3C009jzw7NF3"),S=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).addToCart=function(e){var a=n.state.cart;a[e.id]?a[e.id].amount+=e.amount:a[e.id]=e,a[e.id].amount>a[e.id].product.stock&&(a[e.id].amount=a[e.id].product.stock),localStorage.setItem("cart",JSON.stringify(a)),n.setState({cart:a})},n.removeFromCart=function(e){var a=n.state.cart;delete a[e],localStorage.setItem("cart",JSON.stringify(a)),n.setState({cart:a})},n.clearCart=function(){localStorage.removeItem("cart"),n.setState({cart:{}})},n.checkout=Object(m.a)(o.a.mark((function e(){var a,t,r,c,s,l,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j;case 2:return a=e.sent,t=[],r=0,c=0,Object.values(n.state.cart).forEach((function(e){var a={};a.name=e.id,a.amount=100*e.product.price,a.quantity=e.amount,a.currency="eur",r+=a.quantity*e.product.weight,c=e.product.distance>c?e.product.distance:c,t.push(a)})),s=JSON.stringify({products:t,weight:r,distance:c}),e.next=10,fetch("https://stripe-server-tdelapierre.herokuapp.com/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:s});case 10:return l=e.sent,e.next=13,l.json();case 13:return i=e.sent,e.next=16,a.redirectToCheckout({sessionId:i.id});case 16:e.sent.error,n.clearCart();case 19:case"end":return e.stop()}}),e)}))),n.state={cart:{},products:[]},n.routerRef=r.a.createRef(),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var a,t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("cart"),g()({url:"https://us-central1-marketplace-info802.cloudfunctions.net/graphql ",method:"post",data:{query:"\n        query {\n          products {\n            name,\n            description,\n            price,\n            weight,\n            distance\n          }\n        }\n          "}}).then((function(e){a=a?JSON.parse(a):{},console.log(e.data.data.products),t.setState({products:e.data.data.products,cart:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(b.Provider,{value:Object(l.a)(Object(l.a)({},this.state),{},{removeFromCart:this.removeFromCart,addToCart:this.addToCart,clearCart:this.clearCart,checkout:this.checkout})},r.a.createElement(v.a,{ref:this.routerRef},r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar container",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("b",{className:"navbar-item is-size-4 "},"TP Info802"),r.a.createElement("label",{role:"button",class:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(a){a.preventDefault(),e.setState({showMenu:!e.state.showMenu})}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(this.state.showMenu?"is-active":"")},r.a.createElement(v.b,{to:"/products",className:"navbar-item"},"Articles"),r.a.createElement(v.b,{to:"/cart",className:"navbar-item"},"Panier",r.a.createElement("span",{className:"tag is-primary",style:{marginLeft:"5px"}},Object.keys(this.state.cart).length)))),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:C}),r.a.createElement(E.a,{exact:!0,path:"/cart",component:x}),r.a.createElement(E.a,{exact:!0,path:"/products",component:C})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(63);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.7fc48c55.chunk.js.map