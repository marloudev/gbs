import{u as n,j as i,m as s}from"./app-d83445b4.js";import p from"./products-edit-section-6dede162.js";import{T as c,a as d,b as h,c as a,d as r,e as x}from"./TableRow-30e53d82.js";import{P as j}from"./Paper-df57c3e1.js";import"./products-thunk-141c859e.js";import"./products-service-96e8b073.js";import"./Button-bde17131.js";import"./clsx-0839fdbe.js";import"./memoTheme-ef93f696.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-82bcfb84.js";import"./TransitionGroupContext-30ebce75.js";import"./isFocusVisible-e8076040.js";import"./PencilIcon-fb078b12.js";import"./Drawer-e8a96d89.js";import"./useTheme-65a02dda.js";import"./Modal-805ae567.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-355b7d74.js";import"./utils-fbc5ef63.js";import"./Slide-b1b2b24f.js";import"./debounce-517eeb3c.js";import"./Box-21efb835.js";import"./Close-bf26d2ab.js";import"./createSvgIcon-d7f81846.js";function J(){var e;const{products:o}=n(t=>t.products);return console.log("products",o),i.jsx(c,{component:j,children:i.jsxs(d,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(h,{children:i.jsxs(a,{children:[i.jsx(r,{children:"Barcode"}),i.jsx(r,{children:"Description"}),i.jsx(r,{children:"Quantity"}),i.jsx(r,{children:"Price"}),i.jsx(r,{children:"Action"})]})}),i.jsx(x,{children:(e=o==null?void 0:o.data)==null?void 0:e.map((t,l)=>{const m=s(t.dob,"YYYY-MM-DD");return s().diff(m,"years"),i.jsxs(a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(r,{children:["GB-",t.barcode]}),i.jsx(r,{children:t.description}),i.jsx(r,{children:t.quantity}),i.jsx(r,{children:t.price}),i.jsx(r,{align:"right",children:i.jsx(p,{data:t})})]},l)})})]})})}export{J as default};