import{u as s,j as i,h as n}from"./app-ffb1b877.js";import d from"./administrator-show-sales-item-section-a2e74967.js";import{T as c,a as m}from"./TableContainer-26a1c7c9.js";import{P as h}from"./Paper-4b20035a.js";import{T as x,a as p,b as e,c as t}from"./TableRow-151b1c8b.js";import"./Button-70495986.js";import"./clsx-0839fdbe.js";import"./memoTheme-ae4ae452.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-b30da3b5.js";import"./TransitionGroupContext-ac0fbbe0.js";import"./isFocusVisible-e8076040.js";import"./Drawer-d47d11e2.js";import"./useTheme-9fb0e71a.js";import"./Modal-6eb5f22e.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-a20f3bd0.js";import"./utils-4dedcfab.js";import"./getReactElementRef-857d99af.js";import"./Slide-8e0d37d9.js";import"./debounce-517eeb3c.js";import"./Box-125d8a58.js";function v(){var l;const{sales:o}=s(r=>r.sales);return console.log("sales",o),i.jsx(c,{component:h,children:i.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(p,{children:i.jsxs(e,{children:[i.jsx(t,{children:"Sales ID"}),i.jsx(t,{children:"Subtotal"}),i.jsx(t,{children:"Discount"}),i.jsx(t,{children:"Tax"}),i.jsx(t,{children:"Change"}),i.jsx(t,{children:"Tenders"}),i.jsx(t,{children:"Total"}),i.jsx(t,{children:"Sold At"}),i.jsx(t,{children:"Action"})]})}),i.jsx(m,{children:(l=o==null?void 0:o.data)==null?void 0:l.map((r,a)=>i.jsxs(e,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(t,{children:["GB-",r.receipt_id]}),i.jsx(t,{children:r.subtotal}),i.jsx(t,{children:r.discount}),i.jsx(t,{children:r.tax}),i.jsx(t,{children:r.change}),i.jsx(t,{children:r.tenders}),i.jsx(t,{children:r.total}),i.jsx(t,{children:n(r==null?void 0:r.created_at).format("LLL")}),i.jsx(t,{children:i.jsx(d,{id:r.id,data:r})})]},a))})]})})}export{v as default};