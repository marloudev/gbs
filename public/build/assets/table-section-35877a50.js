import{u as m,j as t,m as n}from"./app-cdc2bbc2.js";import p from"./received-item-section-821e1293.js";import{T as x,a as h}from"./TableContainer-63966769.js";import{P as j}from"./Paper-1de06b18.js";import{T as u,a as b,b as l,c as i}from"./TableRow-dddeed6b.js";import"./products-thunk-3181325e.js";import"./products-service-96e8b073.js";import"./Button-2cc0e296.js";import"./clsx-0839fdbe.js";import"./memoTheme-94a116cc.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-33d31d58.js";import"./TransitionGroupContext-baeba7e0.js";import"./isFocusVisible-e8076040.js";import"./Modal-fa952988.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-efd34fd5.js";import"./useTheme-823ef09d.js";import"./utils-e3bb4ca5.js";import"./getReactElementRef-c772a0bf.js";import"./Box-d881667d.js";import"./Typography-bda1fef0.js";function z(){var e;const{receives:r}=m(o=>o.products);return console.log("receivesss",r),t.jsx(x,{component:j,children:t.jsxs(u,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(b,{children:t.jsxs(l,{children:[t.jsx(i,{children:"Barcode"}),t.jsx(i,{children:"Description"}),t.jsx(i,{children:"Item Count"}),t.jsx(i,{children:"Quantity"}),t.jsx(i,{children:"Total Received Quantity"}),t.jsx(i,{children:"Status"}),t.jsx(i,{children:"Action"})]})}),t.jsx(h,{children:(e=r==null?void 0:r.data)==null?void 0:e.map((o,c)=>{var s,a;const d=n(o.dob,"YYYY-MM-DD");return n().diff(d,"years"),t.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsxs(i,{children:["GB-",(s=o.item)==null?void 0:s.barcode]}),t.jsx(i,{children:(a=o.item)==null?void 0:a.description}),t.jsx(i,{children:o.item_count}),t.jsx(i,{children:o.quantity}),t.jsx(i,{children:o.total_quantity}),t.jsx(i,{children:o.status}),t.jsx(i,{children:o.status=="Pending"&&t.jsx(p,{data:o})})]},c)})})]})})}export{z as default};