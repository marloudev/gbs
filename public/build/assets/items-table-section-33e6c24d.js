import{u as o,j as e,m as r}from"./app-d83445b4.js";import{T as t,a as x,b as h,c as n,d as s,e as j}from"./TableRow-30e53d82.js";import{P as m}from"./Paper-df57c3e1.js";import"./clsx-0839fdbe.js";import"./memoTheme-ef93f696.js";import"./useTheme-65a02dda.js";function Y(){var l;const{items:a}=o(i=>i.products);return console.log("products",a),e.jsx(t,{component:m,children:e.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(s,{children:"Item ID"}),e.jsx(s,{children:"Barcode"}),e.jsx(s,{children:"Name"}),e.jsx(s,{children:"Description"}),e.jsx(s,{children:"Unit of Measurement"}),e.jsx(s,{children:"Capital"}),e.jsx(s,{children:"IsVat"}),e.jsx(s,{children:"Action"})]})}),e.jsx(j,{children:(l=a==null?void 0:a.data)==null?void 0:l.map((i,d)=>{const c=r(i.dob,"YYYY-MM-DD");return r().diff(c,"years"),e.jsxs(n,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsxs(s,{children:["GB-",i.item_id]}),e.jsx(s,{children:i.barcode}),e.jsx(s,{children:i.name}),e.jsx(s,{children:i.description}),e.jsx(s,{children:i.uom}),e.jsx(s,{children:i.capital}),e.jsx(s,{}),e.jsx(s,{align:"right"})]},d)})})]})})}export{Y as default};