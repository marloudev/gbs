import{u as s,j as i,m as n}from"./app-f825970e.js";import d from"./administrator-show-sales-item-section-8d93512b.js";import{T as c,a as m}from"./TableContainer-587170a4.js";import{P as h}from"./Paper-7c842704.js";import{T as x,a as p,b as e,c as t}from"./TableRow-35c1befd.js";import"./Button-6ce59d29.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-54621e7a.js";import"./ButtonBase-a4f006d0.js";import"./TransitionGroupContext-869efa20.js";import"./isFocusVisible-e8076040.js";import"./Drawer-86f0d6e6.js";import"./useTheme-bba71903.js";import"./Modal-0d0d51d5.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-e3a8322a.js";import"./utils-1ac319af.js";import"./getReactElementRef-07e65afb.js";import"./Slide-1ce28b46.js";import"./debounce-517eeb3c.js";import"./Box-ac6d3dec.js";function q(){var l;const{sales:o}=s(r=>r.sales);return console.log("sales",o),i.jsx(c,{component:h,children:i.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(p,{children:i.jsxs(e,{children:[i.jsx(t,{children:"Sales ID"}),i.jsx(t,{children:"Subtotal"}),i.jsx(t,{children:"Discount"}),i.jsx(t,{children:"Tax"}),i.jsx(t,{children:"Change"}),i.jsx(t,{children:"Tenders"}),i.jsx(t,{children:"Total"}),i.jsx(t,{children:"Sold At"}),i.jsx(t,{children:"Action"})]})}),i.jsx(m,{children:(l=o==null?void 0:o.data)==null?void 0:l.map((r,a)=>i.jsxs(e,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(t,{children:["GB-",r.receipt_id]}),i.jsx(t,{children:r.subtotal}),i.jsx(t,{children:r.discount}),i.jsx(t,{children:r.tax}),i.jsx(t,{children:r.change}),i.jsx(t,{children:r.tenders}),i.jsx(t,{children:r.total}),i.jsx(t,{children:n(r==null?void 0:r.created_at).format("LLL")}),i.jsx(t,{children:i.jsx(d,{id:r.id,data:r})})]},a))})]})})}export{q as default};
