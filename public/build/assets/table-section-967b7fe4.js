import{u as s,j as i,m as n}from"./app-2de8a389.js";import d from"./administrator-show-sales-item-section-2b4e004a.js";import{T as c,a as m,b as h,c as l,d as t,e as x}from"./TableRow-3577debc.js";import{P as p}from"./Paper-c4f90bab.js";import"./Button-c1645fac.js";import"./clsx-0839fdbe.js";import"./memoTheme-31083844.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-da80a59f.js";import"./TransitionGroupContext-efc6633f.js";import"./isFocusVisible-e8076040.js";import"./Drawer-404293bf.js";import"./useTheme-4e96958f.js";import"./Modal-26829f8b.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-b30b0351.js";import"./utils-fb93866f.js";import"./Slide-953ec070.js";import"./debounce-517eeb3c.js";import"./Box-c2d4e7ec.js";function W(){var e;const{sales:o}=s(r=>r.sales);return console.log("sales",o),i.jsx(c,{component:p,children:i.jsxs(m,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(h,{children:i.jsxs(l,{children:[i.jsx(t,{children:"Sales ID"}),i.jsx(t,{children:"Subtotal"}),i.jsx(t,{children:"Discount"}),i.jsx(t,{children:"Tax"}),i.jsx(t,{children:"Change"}),i.jsx(t,{children:"Tenders"}),i.jsx(t,{children:"Total"}),i.jsx(t,{children:"Sold At"}),i.jsx(t,{children:"Action"})]})}),i.jsx(x,{children:(e=o==null?void 0:o.data)==null?void 0:e.map((r,a)=>i.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(t,{children:["GB-",r.receipt_id]}),i.jsx(t,{children:r.subtotal}),i.jsx(t,{children:r.discount}),i.jsx(t,{children:r.tax}),i.jsx(t,{children:r.change}),i.jsx(t,{children:r.tenders}),i.jsx(t,{children:r.total}),i.jsx(t,{children:n(r==null?void 0:r.created_at).format("LLL")}),i.jsx(t,{children:i.jsx(d,{id:r.id,data:r})})]},a))})]})})}export{W as default};
