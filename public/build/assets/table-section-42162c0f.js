import{u as s,j as i,m as n}from"./app-05ddd05a.js";import d from"./administrator-show-sales-item-section-7fb13997.js";import{T as c,a as m}from"./TableContainer-10ff0c92.js";import{P as h}from"./Paper-5fa38c0b.js";import{T as x,a as p,b as e,c as t}from"./TableRow-4c0fdbf9.js";import"./Button-886dd74e.js";import"./clsx-0839fdbe.js";import"./memoTheme-da397490.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-ec27260f.js";import"./TransitionGroupContext-91378426.js";import"./isFocusVisible-e8076040.js";import"./Drawer-8a7dcc4a.js";import"./useTheme-04e79c76.js";import"./Modal-ffb00456.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-9a4a0be9.js";import"./utils-2674f20f.js";import"./getReactElementRef-c11325f7.js";import"./Slide-2700d80f.js";import"./debounce-517eeb3c.js";import"./Box-4ecf80a6.js";function v(){var l;const{sales:o}=s(r=>r.sales);return console.log("sales",o),i.jsx(c,{component:h,children:i.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(p,{children:i.jsxs(e,{children:[i.jsx(t,{children:"Sales ID"}),i.jsx(t,{children:"Subtotal"}),i.jsx(t,{children:"Discount"}),i.jsx(t,{children:"Tax"}),i.jsx(t,{children:"Change"}),i.jsx(t,{children:"Tenders"}),i.jsx(t,{children:"Total"}),i.jsx(t,{children:"Sold At"}),i.jsx(t,{children:"Action"})]})}),i.jsx(m,{children:(l=o==null?void 0:o.data)==null?void 0:l.map((r,a)=>i.jsxs(e,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(t,{children:["GB-",r.receipt_id]}),i.jsx(t,{children:r.subtotal}),i.jsx(t,{children:r.discount}),i.jsx(t,{children:r.tax}),i.jsx(t,{children:r.change}),i.jsx(t,{children:r.tenders}),i.jsx(t,{children:r.total}),i.jsx(t,{children:n(r==null?void 0:r.created_at).format("LLL")}),i.jsx(t,{children:i.jsx(d,{id:r.id,data:r})})]},a))})]})})}export{v as default};
