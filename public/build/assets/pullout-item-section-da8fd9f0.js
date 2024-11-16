import{r as u,j as t,c as p}from"./app-f825970e.js";import{p as f,l as _}from"./products-thunk-5104d3a3.js";import{B as c}from"./Button-6ce59d29.js";import{M as y}from"./Modal-0d0d51d5.js";import{B as v}from"./Box-ac6d3dec.js";import{T as C}from"./Typography-4ba4a381.js";import{T as N,a as T,b as n,c as l}from"./TableRow-35c1befd.js";import{T as w}from"./TextField-ac629078.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-54621e7a.js";import"./ButtonBase-a4f006d0.js";import"./TransitionGroupContext-869efa20.js";import"./isFocusVisible-e8076040.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-e3a8322a.js";import"./useTheme-bba71903.js";import"./utils-1ac319af.js";import"./getReactElementRef-07e65afb.js";import"./InputBase-edacf292.js";import"./isHostComponent-73d6e646.js";import"./debounce-517eeb3c.js";import"./Popover-ab50631b.js";import"./Paper-7c842704.js";import"./Grow-da31b0f0.js";import"./useId-7c7e1715.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-d61808db.js";import"./useControlled-700ac69a.js";import"./createSvgIcon-ccfd654c.js";function rt({data:i}){const[m,o]=u.useState(!1),d=()=>o(!0),h=()=>o(!1),[e,x]=u.useState({pullout_count:0}),[j,r]=u.useState(!1),g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",boxShadow:24,p:4},s=isNaN(i.quantity-((e==null?void 0:e.pullout_count)??0))?0:i.quantity-((e==null?void 0:e.pullout_count)??0);async function b(a){a.preventDefault(),r(!0);try{await p.dispatch(f({...i,...e,count_remaining:(i==null?void 0:i.item_count)-e.pullout_count,remaining_quantity:s,status:"Received"})),p.dispatch(_()),o(!1),r(!1)}catch{r(!1)}}return console.log("datadatadata",i),t.jsxs("div",{children:[t.jsx(c,{variant:"contained",onClick:d,children:"PULLOUT"}),t.jsx(y,{open:m,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsx(v,{sx:g,children:t.jsxs("div",{children:[t.jsx(C,{id:"modal-modal-title",className:"py-5",variant:"h6",component:"h2",children:"Are you sure you want to pull out this item?"}),t.jsx(N,{"aria-label":"simple table",children:t.jsxs(T,{children:[t.jsxs(n,{children:[t.jsx(l,{children:"Item Name"}),t.jsx(l,{align:"right",children:i==null?void 0:i.brand})]}),t.jsxs(n,{children:[t.jsx(l,{children:"Quantity"}),t.jsx(l,{align:"right",children:i.quantity})]}),t.jsxs(n,{children:[t.jsx(l,{children:"Pull Out Count"}),t.jsx(l,{align:"right",children:isNaN((e==null?void 0:e.pullout_count)??0)?0:(e==null?void 0:e.pullout_count)??0})]}),t.jsxs(n,{children:[t.jsx(l,{children:"Remaining"}),t.jsx(l,{align:"right",children:s})]})]})}),t.jsx("div",{className:"mt-5",children:t.jsx(w,{className:"w-full",required:!0,type:"number",value:e.pullout_count??"",onChange:a=>x({...e,pullout_count:parseInt(a.target.value)}),id:"pullout_count",label:"Number of Item",variant:"outlined"})}),t.jsxs("div",{className:"w-full flex items-end justify-end mt-12 gap-5",children:[t.jsx(c,{variant:"outlined",onClick:()=>o(!1),children:"Cancel"}),t.jsx(c,{disabled:s<0||e.pullout_count==""||j,variant:"contained",onClick:b,children:"Confirm"})]})]})})})]})}export{rt as default};