import{u as l,j as o,h as p}from"./app-b5484fde.js";import n from"./products-edit-section-1d23c576.js";import{T as c,a as d}from"./TableContainer-9a93d0ba.js";import{P as h}from"./Paper-a24a926c.js";import{T as x,a as j,b as s,c as r}from"./TableRow-e5b67a07.js";import{C as b}from"./Chip-79774005.js";import"./products-thunk-05fa1b59.js";import"./products-service-96e8b073.js";import"./Button-c74c2a34.js";import"./clsx-0839fdbe.js";import"./memoTheme-eb6183d2.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-4facb0cc.js";import"./TransitionGroupContext-6dbbdfb2.js";import"./isFocusVisible-e8076040.js";import"./Create-3b508c25.js";import"./createSvgIcon-e0985e18.js";import"./Drawer-09060593.js";import"./useTheme-da9849b7.js";import"./Modal-3a285beb.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-961fb448.js";import"./utils-d420a1d8.js";import"./getReactElementRef-064f2e83.js";import"./Slide-ad6e46fa.js";import"./debounce-517eeb3c.js";import"./Box-4975e29c.js";import"./Close-c9572dac.js";import"./TextField-5fe125e3.js";import"./InputBase-81e2da8d.js";import"./isHostComponent-73d6e646.js";import"./Popover-3cfa5aaf.js";import"./Grow-fe160ab9.js";import"./useId-4d30d03d.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-2fc4f119.js";import"./useControlled-e20e46c0.js";function ro(){var m;const{supplies:t}=l(i=>i.products);return console.log("supplies",t),o.jsx(c,{component:h,children:o.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[o.jsx(j,{children:o.jsxs(s,{children:[o.jsx(r,{children:"Barcode"}),o.jsx(r,{children:"Description"}),o.jsx(r,{children:"Quantity"}),o.jsx(r,{children:"Action"})]})}),o.jsx(d,{children:(m=t==null?void 0:t.data)==null?void 0:m.map((i,a)=>{const e=p(i.dob,"YYYY-MM-DD");return p().diff(e,"years"),o.jsxs(s,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[o.jsxs(r,{children:["GB-",i.barcode]}),o.jsx(r,{children:i.description}),o.jsx(r,{children:o.jsx(b,{color:i.quantity<=2?"error":"success",label:`${i.uom} ${i.quantity}`,variant:"outlined"})}),o.jsx(r,{children:o.jsx(n,{data:i})})]},a)})})]})})}export{ro as default};
