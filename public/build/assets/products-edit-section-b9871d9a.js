import{r,a as j,u as v,j as e,c as d}from"./app-83ce7a51.js";import{o as w,n as b}from"./products-thunk-bdbd8845.js";import{B as c}from"./Button-59fde5d5.js";import{C as g}from"./Create-50ba21e9.js";import{D as y}from"./Drawer-b14f8ca7.js";import{B as N}from"./Box-2df3c5be.js";import{C}from"./Close-3966a9fd.js";import{T as m}from"./TextField-b7aec146.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./memoTheme-00ea516b.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-e1f83af8.js";import"./TransitionGroupContext-fb3e6e27.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-86a84dd3.js";import"./useTheme-ba78349d.js";import"./Modal-76f8a6a0.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-911808af.js";import"./utils-3726fa69.js";import"./Paper-372ed738.js";import"./Slide-f2ac3716.js";import"./debounce-517eeb3c.js";import"./InputBase-684800d7.js";import"./isHostComponent-73d6e646.js";import"./Popover-490ee6a9.js";import"./Grow-ccdca679.js";import"./useId-34abe647.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-3b23461a.js";import"./useControlled-6066eed7.js";function oe({data:i}){const[l,a]=r.useState(!1);j();const[s,o]=r.useState({}),{toastStatus:p}=v(t=>t.app),[f,n]=r.useState(!1),x=window.location.href,u=new URL(x);u.searchParams.get("page"),u.searchParams.get("search"),r.useEffect(()=>{l&&o({...s,id:i.id,barcode:i.barcode,description:i.description,quantity:i.quantity,price:i.price})},[l]),r.useEffect(()=>{p.status=="success"&&a(!1)},[p.status]);async function h(t){t.preventDefault(),n(!0);try{await d.dispatch(w(s)),await d.dispatch(b()),a(!1),n(!1)}catch{n(!1)}}return e.jsxs("div",{children:[e.jsx(c,{variant:"contained",onClick:()=>a(!0),children:e.jsx(g,{})}),e.jsx(y,{anchor:"right",open:l,onClose:()=>a(!1),children:e.jsx(N,{className:" w-96",role:"presentation",children:e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx("div",{className:"w-full flex items-end justify-end p-4",children:e.jsx(c,{onClick:()=>a(!1),variant:"contained",children:e.jsx(C,{})})}),e.jsx("div",{className:"w-full flex items-end justify-end px-3",children:e.jsxs("form",{onSubmit:h,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsxs("div",{className:"flex flex-col h-[85vh] justify-between mt-5 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(m,{className:"w-full",required:!0,value:s.barcode??"",onChange:t=>o({...s,barcode:t.target.value}),id:"barcode",label:"Barcode",variant:"outlined"}),e.jsx(m,{className:"w-full",required:!0,value:s.description??"",onChange:t=>o({...s,description:t.target.value}),id:"description",label:"Description",variant:"outlined"}),e.jsx(m,{type:"number",className:"w-full",required:!0,value:s.quantity??"",onChange:t=>o({...s,quantity:t.target.value}),id:"quantity",label:"Quantity",variant:"outlined"})]}),e.jsx(c,{disabled:f,className:"w-full",type:"submit",variant:"contained",children:"Submit"})]})]})})]})})})]})}export{oe as default};
