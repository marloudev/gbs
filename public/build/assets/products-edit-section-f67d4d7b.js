import{r as n,a as g,u as d,aj as a,j as e,c as f}from"./app-cdc2bbc2.js";import{h as b,i as w}from"./products-thunk-3181325e.js";import{g as N}from"./products-service-96e8b073.js";import{B as u}from"./Button-2cc0e296.js";import{C as y}from"./Create-7df3ebf8.js";import{D as C}from"./Drawer-f1c28d69.js";import{B as q}from"./Box-d881667d.js";import{C as P}from"./Close-20a9efe3.js";import{T as l}from"./TextField-45adc967.js";import"./clsx-0839fdbe.js";import"./memoTheme-94a116cc.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-33d31d58.js";import"./TransitionGroupContext-baeba7e0.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-97b83657.js";import"./useTheme-823ef09d.js";import"./Modal-fa952988.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-efd34fd5.js";import"./utils-e3bb4ca5.js";import"./getReactElementRef-c772a0bf.js";import"./Paper-1de06b18.js";import"./Slide-1e847422.js";import"./debounce-517eeb3c.js";import"./InputBase-76ac33e1.js";import"./isHostComponent-73d6e646.js";import"./Popover-52c345be.js";import"./Grow-8a4fde25.js";import"./useId-59ef5e6d.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-7aa6e35b.js";import"./useControlled-6ce35e87.js";function ce({data:i}){const[c,o]=n.useState(!1),s=g(),{productForm:r}=d(t=>t.products),{toastStatus:m}=d(t=>t.app),x=window.location.href,p=new URL(x),h=p.searchParams.get("page"),j=p.searchParams.get("search");n.useEffect(()=>{c&&s(a({...r,id:i.id,barcode:i.barcode,description:i.description,quantity:i.quantity,price:i.price}))},[c]),n.useEffect(()=>{m.status=="success"&&o(!1)},[m.status]);function v(t){t.preventDefault(),f.dispatch(b()),f.dispatch(w(N(h,j??"")))}return e.jsxs("div",{children:[e.jsx(u,{variant:"contained",onClick:()=>o(!0),children:e.jsx(y,{})}),e.jsx(C,{anchor:"right",open:c,onClose:()=>o(!1),children:e.jsx(q,{className:" w-96",role:"presentation",children:e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx("div",{className:"w-full flex items-end justify-end p-4",children:e.jsx(u,{onClick:()=>o(!1),variant:"contained",children:e.jsx(P,{})})}),e.jsx("div",{className:"w-full flex items-end justify-end px-3",children:e.jsxs("form",{onSubmit:v,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsxs("div",{className:"flex flex-col h-[85vh] justify-between mt-5 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{className:"w-full",required:!0,value:r.barcode??"",onChange:t=>s(a({...r,barcode:t.target.value})),id:"barcode",label:"Barcode",variant:"outlined"}),e.jsx(l,{className:"w-full",required:!0,value:r.description??"",onChange:t=>s(a({...r,description:t.target.value})),id:"description",label:"Description",variant:"outlined"}),e.jsx(l,{type:"number",className:"w-full",required:!0,value:r.quantity??"",onChange:t=>s(a({...r,quantity:t.target.value})),id:"quantity",label:"Quantity",variant:"outlined"}),e.jsx(l,{type:"number",className:"w-full",required:!0,value:r.price??"",onChange:t=>s(a({...r,price:t.target.value})),id:"price",label:"Price",variant:"outlined"})," "]}),e.jsx(u,{className:"w-full",type:"submit",variant:"contained",children:"Submit"})]})]})})]})})})]})}export{ce as default};