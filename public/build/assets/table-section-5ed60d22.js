import{u as c,j as e,m as l}from"./app-f65ae074.js";import{T as d,a as h,b as x,c as n,d as s,e as j}from"./TableRow-abb8f392.js";import{P as p}from"./Paper-dacd699a.js";import"./clsx-0839fdbe.js";import"./memoTheme-3ed1ce72.js";import"./useTheme-a437e8b1.js";function Y(){var a;const{products:r}=c(i=>i.products);return console.log("products",r),e.jsx(d,{component:p,children:e.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(x,{children:e.jsxs(n,{children:[e.jsx(s,{children:"Barcode"}),e.jsx(s,{children:"Description"}),e.jsx(s,{children:"Quantity"}),e.jsx(s,{children:"Price"}),e.jsx(s,{children:"Action"})]})}),e.jsx(j,{children:(a=r==null?void 0:r.data)==null?void 0:a.map((i,o)=>{const t=l(i.dob,"YYYY-MM-DD");return l().diff(t,"years"),e.jsxs(n,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsxs(s,{children:["GB-",i.barcode]}),e.jsx(s,{children:i.description}),e.jsx(s,{children:i.quantity}),e.jsx(s,{children:i.price}),e.jsx(s,{align:"right",children:"ss"})]},o)})})]})})}export{Y as default};
