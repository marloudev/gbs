import{r as n,a as g,u as d,aj as a,j as e,c as f}from"./app-15ab478a.js";import{h as b,i as w}from"./products-thunk-bf9450b1.js";import{g as N}from"./products-service-96e8b073.js";import{B as u}from"./Button-d237e5ec.js";import{C as y}from"./Create-342dada3.js";import{D as C}from"./Drawer-9c03a126.js";import{B as q}from"./Box-48cf9779.js";import{C as P}from"./Close-d8d4619c.js";import{T as l}from"./TextField-6065ee20.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-00a2c87d.js";import"./ButtonBase-7d01a9d7.js";import"./TransitionGroupContext-1ef98a35.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-7d0e84c7.js";import"./useTheme-75d0d319.js";import"./Modal-b7bf893a.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-cf40afab.js";import"./utils-be36f58c.js";import"./getReactElementRef-92371454.js";import"./Paper-ae895174.js";import"./Slide-62e85ba9.js";import"./debounce-517eeb3c.js";import"./InputBase-ddcc49b5.js";import"./isHostComponent-73d6e646.js";import"./Popover-ff0cb7fe.js";import"./Grow-035b1dce.js";import"./useId-c66f7691.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-5e1e5ce7.js";import"./useControlled-7a74560a.js";function le({data:i}){const[c,o]=n.useState(!1),s=g(),{productForm:r}=d(t=>t.products),{toastStatus:m}=d(t=>t.app),x=window.location.href,p=new URL(x),h=p.searchParams.get("page"),j=p.searchParams.get("search");n.useEffect(()=>{c&&s(a({...r,id:i.id,barcode:i.barcode,description:i.description,quantity:i.quantity,price:i.price}))},[c]),n.useEffect(()=>{m.status=="success"&&o(!1)},[m.status]);function v(t){t.preventDefault(),f.dispatch(b()),f.dispatch(w(N(h,j??"")))}return e.jsxs("div",{children:[e.jsx(u,{variant:"contained",onClick:()=>o(!0),children:e.jsx(y,{})}),e.jsx(C,{anchor:"right",open:c,onClose:()=>o(!1),children:e.jsx(q,{className:" w-96",role:"presentation",children:e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx("div",{className:"w-full flex items-end justify-end p-4",children:e.jsx(u,{onClick:()=>o(!1),variant:"contained",children:e.jsx(P,{})})}),e.jsx("div",{className:"w-full flex items-end justify-end px-3",children:e.jsxs("form",{onSubmit:v,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsxs("div",{className:"flex flex-col h-[85vh] justify-between mt-5 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(l,{className:"w-full",required:!0,value:r.barcode??"",onChange:t=>s(a({...r,barcode:t.target.value})),id:"barcode",label:"Barcode",variant:"outlined"}),e.jsx(l,{className:"w-full",required:!0,value:r.description??"",onChange:t=>s(a({...r,description:t.target.value})),id:"description",label:"Description",variant:"outlined"}),e.jsx(l,{type:"number",className:"w-full",required:!0,value:r.quantity??"",onChange:t=>s(a({...r,quantity:t.target.value})),id:"quantity",label:"Quantity",variant:"outlined"}),e.jsx(l,{type:"number",className:"w-full",required:!0,value:r.price??"",onChange:t=>s(a({...r,price:t.target.value})),id:"price",label:"Price",variant:"outlined"})," "]}),e.jsx(u,{className:"w-full",type:"submit",variant:"contained",children:"Submit"})]})]})})]})})})]})}export{le as default};