import{a as i}from"./sales-service-19b3eac2.js";import{aq as e,m as u,o as r}from"./app-18fb0b2d.js";async function d(t){return(await axios.get("/api/get_cart/"+t)).data.data}async function _(t){return(await axios.post("/api/carts",t)).data}async function l(t){return(await axios.put(`/api/carts/${t.id}`,t)).data.data}async function g(t){return(await axios.delete(`/api/carts/${t}`)).data.data}function p(){return async function(t,a){const n=localStorage.getItem("receipt_id"),s=await d(n);t(e.actions.setCart(s))}}function w(t){return async function(a,n){const s=await g(t);a(e.actions.setCart(s))}}function S(t){return async function(a,n){const s=await l(t);a(e.actions.setCart(s))}}function y(t){return async function(a,n){if(console.log("status",(await t).status),(await t).status=="success"){localStorage.getItem("receipt_id")||localStorage.setItem("receipt_id",u().valueOf());const s=Math.floor(1e9+Math.random()*9e9),o=await _({receipt_id:localStorage.getItem("receipt_id"),barcode:(await t).data.barcode,randomId:s,quantity:1,price:(await t).data.price,total:(await t).data.price});a(e.actions.setCart(o.data)),a(e.actions.setSearch(""))}else a(e.actions.setSearch(""))}}function I(){return async function(t,a){t(e.actions.setLoading(!0)),t(r.actions.setToastStatus({status:"loading",message:"Loading..."}));const n=a().cashier.payment,s=a().cashier.cart,o={payment:n,cart:s};try{await i(o),await t(e.actions.setIsPrint(!0)),setTimeout(()=>{t(e.actions.setIsPrint(!1))},1e3),await t(e.actions.setLoading(!1)),await t(e.actions.resetPayment()),await t(r.actions.setToastStatus({status:"success",message:"Created Success!"})),localStorage.clear()}catch(c){t(e.actions.setLoading(!1)),t(r.actions.setToastStatus({status:"error",message:c.response.data.message}))}}}export{y as a,I as c,w as d,S as e,p as g};
