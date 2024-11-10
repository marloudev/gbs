import{r as l,a as d,u as c,ai as a,j as e,c as p}from"./app-f36650ec.js";import m from"./drawer-action-e80e6888.js";import{c as x}from"./products-thunk-4e96ebb7.js";import"./XMarkIcon-810629e2.js";import"./transition-e1907e4c.js";import"./use-flags-ab9f58df.js";import"./open-closed-e8c8a1c3.js";import"./dialog-21fe7070.js";import"./use-root-containers-b22c410b.js";import"./keyboard-8934c0cd.js";import"./description-2ccf1758.js";import"./products-service-2e54bc55.js";function P(){const[o,n]=l.useState(!1),s=d(),{productForm:r}=c(t=>t.products),{toastStatus:i}=c(t=>t.app);l.useEffect(()=>{i.status=="success"&&n(!1)},[i.status]);function u(t){t.preventDefault(),p.dispatch(x())}return l.useEffect(()=>{o&&s(a({}))},[o]),e.jsx("div",{children:e.jsx(m,{open:o,setOpen:n,button:e.jsxs("button",{onClick:()=>n(!0),className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600  hover:bg-blue-500  bg-blue-600",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"Create Product"})]}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{onSubmit:u,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Create Products"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Barcode"}),e.jsx("input",{required:!0,value:r.barcode??"",onChange:t=>s(a({...r,barcode:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"barcode",type:"text",placeholder:"Input Barcode"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Description"}),e.jsx("input",{required:!0,value:r.description??"",onChange:t=>s(a({...r,description:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"description",type:"text",placeholder:"Input Description"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Quantity"}),e.jsx("input",{required:!0,value:r.quantity??"",onChange:t=>s(a({...r,quantity:t.target.value.replace(/[^0-9.]/g,"")})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"quantity",type:"text",placeholder:"Input Quantity"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Price"}),e.jsx("input",{required:!0,value:r.price??"",onChange:t=>s(a({...r,price:t.target.value.replace(/[^0-9.]/g,"")})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"price",type:"text",placeholder:"Input Price"})]})]})}),e.jsx("div",{className:"flex items-center justify-center w-full flex-none",children:e.jsx("button",{className:"bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold",children:"Submit"})})]})})})})}export{P as default};
