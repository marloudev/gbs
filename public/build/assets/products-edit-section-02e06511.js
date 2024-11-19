import{r as a,a as j,u as v,j as e,c as d}from"./app-e9ffdf05.js";import{u as w,l as b}from"./products-thunk-d207fdcf.js";import{B as c}from"./Button-5fecbe39.js";import{C as g}from"./Create-6fe3580c.js";import{D as y}from"./Drawer-cdf365a2.js";import{B as N}from"./Box-f3e353a4.js";import{C}from"./Close-42559685.js";import{T as m}from"./TextField-cfff8ff5.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./memoTheme-1e6d1a7e.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-7b0c8dbc.js";import"./TransitionGroupContext-05e26cd0.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-7c73fae7.js";import"./useTheme-1c22a1a5.js";import"./Modal-c4760527.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-504d2fc3.js";import"./utils-46566344.js";import"./getReactElementRef-92100902.js";import"./Paper-cdfaf708.js";import"./Slide-788367f3.js";import"./debounce-517eeb3c.js";import"./InputBase-cf4fbff5.js";import"./isHostComponent-73d6e646.js";import"./Popover-a3ec5621.js";import"./Grow-f0e2270b.js";import"./useId-92079488.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-5ca07708.js";import"./useControlled-02caa07a.js";function le({data:i}){const[l,r]=a.useState(!1);j();const[s,o]=a.useState({}),{toastStatus:p}=v(t=>t.app),[f,n]=a.useState(!1),x=window.location.href,u=new URL(x);u.searchParams.get("page"),u.searchParams.get("search"),a.useEffect(()=>{l&&o({...s,id:i.id,barcode:i.barcode,description:i.description,quantity:i.quantity,price:i.price})},[l]),a.useEffect(()=>{p.status=="success"&&r(!1)},[p.status]);async function h(t){t.preventDefault(),n(!0);try{await d.dispatch(w(s)),await d.dispatch(b()),r(!1),n(!1)}catch{n(!1)}}return e.jsxs("div",{children:[e.jsx(c,{variant:"contained",onClick:()=>r(!0),children:e.jsx(g,{})}),e.jsx(y,{anchor:"right",open:l,onClose:()=>r(!1),children:e.jsx(N,{className:" w-96",role:"presentation",children:e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx("div",{className:"w-full flex items-end justify-end p-4",children:e.jsx(c,{onClick:()=>r(!1),variant:"contained",children:e.jsx(C,{})})}),e.jsx("div",{className:"w-full flex items-end justify-end px-3",children:e.jsxs("form",{onSubmit:h,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsxs("div",{className:"flex flex-col h-[85vh] justify-between mt-5 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(m,{className:"w-full",required:!0,value:s.barcode??"",onChange:t=>o({...s,barcode:t.target.value}),id:"barcode",label:"Barcode",variant:"outlined"}),e.jsx(m,{className:"w-full",required:!0,value:s.description??"",onChange:t=>o({...s,description:t.target.value}),id:"description",label:"Description",variant:"outlined"}),e.jsx(m,{type:"number",className:"w-full",required:!0,value:s.quantity??"",onChange:t=>o({...s,quantity:t.target.value}),id:"quantity",label:"Quantity",variant:"outlined"})]}),e.jsx(c,{disabled:f,className:"w-full",type:"submit",variant:"contained",children:"Submit"})]})]})})]})})})]})}export{le as default};
