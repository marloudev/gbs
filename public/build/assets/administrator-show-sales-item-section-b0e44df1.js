import{r as t,j as e}from"./app-73e956c4.js";import c from"./drawer-action-57f510cd.js";import"./XMarkIcon-8f9eede8.js";import"./transition-8e5df15e.js";import"./use-flags-22cb74dc.js";import"./open-closed-740145de.js";import"./dialog-38320a1c.js";import"./use-root-containers-3db68151.js";import"./keyboard-4d9875ee.js";import"./description-0fe789bd.js";function o({title:s,titleId:l,...a},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":l},a),s?t.createElement("title",{id:l},s):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const d=t.forwardRef(o),x=d;function y({data:s,id:l}){const[a,i]=t.useState(!1);return e.jsx("div",{children:e.jsx(c,{open:a,setOpen:i,button:e.jsx("button",{onClick:()=>i(!0),className:" text-blue-500",children:e.jsx(x,{className:"h-6"})}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsxs("div",{className:"text-2xl font-bold",children:["Invoice GB-",l]})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("ul",{className:"max-w-md space-y-1 text-gray-500 list-disc list-inside  ",children:[e.jsxs("li",{children:["Subtotal: ",s.subtotal]}),e.jsxs("li",{children:["Total: ",s.total]})]}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-100",children:s.sales_item.map((r,n)=>e.jsx(e.Fragment,{children:e.jsxs("li",{className:"flex justify-between gap-x-6 py-5",children:[e.jsx("div",{className:"flex min-w-0 gap-x-4",children:e.jsxs("div",{className:"min-w-0 flex-auto",children:[e.jsx("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:r.product.description}),e.jsxs("p",{className:"mt-1 truncate text-xs leading-5 text-gray-500",children:["Barcode: ",r.product.barcode]})]})}),e.jsxs("div",{className:"hidden shrink-0 sm:flex sm:flex-col sm:items-end",children:[e.jsxs("p",{className:"text-sm leading-6 text-gray-900",children:["Quantity ",r.quantity]}),e.jsx("div",{className:"mt-1 flex items-center gap-x-1.5",children:e.jsxs("p",{className:"text-xs leading-5 text-gray-500",children:["Price: ",r.price]})})]})]},n)}))})]})]})})})})}export{y as default};
