import{a as m}from"./sales-service-19b3eac2.js";import{aq as e,m as l,o}from"./app-cdc2bbc2.js";async function g(t){return(await axios.get("/api/get_cart/"+t)).data.data}async function p(t){return(await axios.post("/api/carts",t)).data}async function f(t){return(await axios.put(`/api/carts/${t.id}`,t)).data.data}async function w(t){return(await axios.delete(`/api/carts/${t}`)).data.data}function I(){return async function(t,a){const n=localStorage.getItem("receipt_id"),s=await g(n);t(e.actions.setCart(s))}}function k(t){return async function(a,n){const s=await w(t);a(e.actions.setCart(s))}}function C(t){return async function(a,n){const s=await f(t);a(e.actions.setCart(s))}}function T(t){return async function(a,n){var s,r,i,c,u;if((await t).status=="success"){localStorage.getItem("receipt_id")||localStorage.setItem("receipt_id",l().format("MMDDYYYYHHmmss"));const d=Math.floor(1e9+Math.random()*9e9),_=await p({receipt_id:localStorage.getItem("receipt_id"),barcode:(await t).data.barcode,randomId:d,quantity:(await t).data.quantity,price:(await t).data.price,total:(await t).data.price,capital:((r=(s=await t)==null?void 0:s.data)==null?void 0:r.capital)??0,supply_barcode:((u=(c=(i=(await t).data)==null?void 0:i.item_product)==null?void 0:c.item)==null?void 0:u.barcode)??0});a(e.actions.setCart(_.data)),a(e.actions.setSearch(""))}else a(e.actions.setSearch(""))}}function v(){return async function(t,a){t(e.actions.setLoading(!0)),t(o.actions.setToastStatus({status:"loading",message:"Loading..."}));const n=a().cashier.payment,s=a().cashier.cart,r={payment:n,cart:s};try{await m(r),await t(e.actions.setIsPrint(!0)),setTimeout(()=>{t(e.actions.setIsPrint(!1))},1e3),await t(e.actions.setLoading(!1)),await t(e.actions.resetPayment()),await t(o.actions.setToastStatus({status:"success",message:"Created Success!"})),localStorage.clear()}catch(i){t(e.actions.setLoading(!1)),t(o.actions.setToastStatus({status:"error",message:i.response.data.message}))}}}export{T as a,v as c,k as d,C as e,I as g};