import{r as l,a as g,u as d,aj as c,j as e,c as u}from"./app-7ce828bf.js";import{h as w,i as N}from"./products-thunk-71021430.js";import{g as b}from"./products-service-96e8b073.js";import{B as n}from"./Button-ead979ed.js";import{C}from"./Create-b6150f02.js";import{D as P}from"./Drawer-dac19da1.js";import{B as y}from"./Box-656f4b8e.js";import{C as D}from"./Close-d3a54593.js";import{T as f}from"./TextField-9b0e2868.js";import"./clsx-0839fdbe.js";import"./memoTheme-9e5d36f9.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-ce4a96ac.js";import"./TransitionGroupContext-3cc3afcd.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-1901faae.js";import"./useTheme-ac50545c.js";import"./Modal-4b1961da.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-686b7842.js";import"./utils-7875b360.js";import"./getReactElementRef-d2957806.js";import"./Paper-e874bdf8.js";import"./Slide-c765a1a8.js";import"./debounce-517eeb3c.js";import"./InputBase-91310372.js";import"./isHostComponent-73d6e646.js";import"./Popover-7c96c2c2.js";import"./Grow-ffea1b22.js";import"./useId-7d67d4e7.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-dfdeb226.js";import"./useControlled-9ad0c4a2.js";function ce({data:s}){const[o,i]=l.useState(!1),a=g(),{productForm:r}=d(t=>t.products),{toastStatus:p}=d(t=>t.app),x=window.location.href,m=new URL(x),h=m.searchParams.get("page"),j=m.searchParams.get("search");l.useEffect(()=>{o&&a(c({...r,id:s.id,barcode:s.barcode,description:s.description,quantity:s.quantity,price:s.price}))},[o]),l.useEffect(()=>{p.status=="success"&&i(!1)},[p.status]);function v(t){t.preventDefault(),u.dispatch(w()),u.dispatch(N(b(h,j??"")))}return e.jsxs("div",{children:[e.jsx(n,{variant:"contained",onClick:()=>i(!0),children:e.jsx(C,{})}),e.jsx(P,{anchor:"right",open:o,onClose:()=>i(!1),children:e.jsx(y,{className:" w-96",role:"presentation",children:e.jsxs("div",{className:"flex flex-col gap-4 w-full",children:[e.jsx("div",{className:"w-full flex items-end justify-end p-4",children:e.jsx(n,{onClick:()=>i(!1),variant:"contained",children:e.jsx(D,{})})}),e.jsx("div",{className:"w-full flex items-end justify-end px-3",children:e.jsxs("form",{onSubmit:v,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsxs("div",{className:"flex flex-col h-[85vh] justify-between mt-5 w-full",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(f,{className:"w-full",required:!0,value:r.description??"",onChange:t=>a(c({...r,description:t.target.value})),id:"description",label:"Description",variant:"outlined"}),e.jsx(f,{type:"number",className:"w-full",required:!0,value:r.price??"",onChange:t=>a(c({...r,price:t.target.value})),id:"price",label:"Price",variant:"outlined"})]}),e.jsx(n,{className:"w-full",type:"submit",variant:"contained",children:"Submit"})]})]})})]})})})]})}export{ce as default};
