import{j as r,u as j,r as l}from"./app-7ce828bf.js";import{c as t}from"./createSvgIcon-1901faae.js";import{T as m,a as c}from"./TableContainer-f8b3090b.js";import{P as h}from"./Paper-e874bdf8.js";import{T as d,b as a,c as e,a as u}from"./TableRow-c4ec7470.js";import{I as b}from"./IconButton-4af25f49.js";import{C as f}from"./Collapse-964c9c07.js";import{B as w}from"./Box-656f4b8e.js";import{T}from"./Typography-e68b8b27.js";import"./clsx-0839fdbe.js";import"./memoTheme-9e5d36f9.js";import"./useTheme-ac50545c.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-ce4a96ac.js";import"./TransitionGroupContext-3cc3afcd.js";import"./isFocusVisible-e8076040.js";import"./utils-7875b360.js";const y=t(r.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown"),B=t(r.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");function g(n){const{row:s}=n,[o,x]=l.useState(!1);return console.log("row",s),r.jsxs(l.Fragment,{children:[r.jsxs(a,{sx:{"& > *":{borderBottom:"unset"}},children:[r.jsxs(e,{component:"th",scope:"row",children:[r.jsx(b,{"aria-label":"expand row",size:"small",onClick:()=>x(!o),children:o?r.jsx(B,{}):r.jsx(y,{})})," ",s.barcode]}),r.jsx(e,{children:s.name}),r.jsx(e,{children:s.description}),r.jsx(e,{children:s.uom}),r.jsx(e,{children:s.capital}),r.jsx(e,{}),r.jsx(e,{children:"Action"})]}),r.jsx(a,{children:r.jsx(e,{style:{paddingBottom:0,paddingTop:0},colSpan:8,children:r.jsx(f,{in:o,timeout:"auto",unmountOnExit:!0,children:r.jsxs(w,{className:" w-full py-5",children:[r.jsx(T,{variant:"h6",children:"List of Item"}),r.jsxs(d,{size:"small","aria-label":"purchases",children:[r.jsx(u,{children:r.jsxs(a,{children:[r.jsx(e,{children:"Barcode"}),r.jsx(e,{children:"Brand Name"}),r.jsx(e,{children:"Description"}),r.jsx(e,{children:"Unit of Measurement"}),r.jsx(e,{children:"Selling Quantity"}),r.jsx(e,{children:"Action"})]})}),r.jsx(c,{children:s.items.map((i,p)=>r.jsxs(a,{children:[r.jsx(e,{children:i.barcode}),r.jsx(e,{children:i.name}),r.jsx(e,{children:i.description}),r.jsx(e,{children:i.uom}),r.jsx(e,{children:i.quantity}),r.jsx(e,{children:"action"})]},p))})]})]})})})})]})}function q(){var s;const{items:n}=j(o=>o.products);return console.log("products",n),r.jsx(m,{component:h,children:r.jsx(d,{"aria-label":"collapsible table",children:r.jsxs(c,{children:[r.jsxs(a,{children:[r.jsx(e,{children:"Barcode"}),r.jsx(e,{children:"Name"}),r.jsx(e,{children:"Description"}),r.jsx(e,{children:"Unit of Measurement"}),r.jsx(e,{children:"Capital"}),r.jsx(e,{children:"IsVat"}),r.jsx(e,{children:"Action"})]}),(s=n==null?void 0:n.data)==null?void 0:s.map(o=>r.jsx(g,{row:o},o.name))]})})})}export{q as default};
