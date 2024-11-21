import{r as l,a as N,u as v,j as e,c as d}from"./app-fd6d6e0e.js";import{e as S,b as C,f as _}from"./products-thunk-803032ab.js";import{B as m}from"./Button-10b26728.js";import{D as T}from"./Drawer-22ddce71.js";import{B as D}from"./Box-c0268820.js";import{C as I}from"./Close-52d48e15.js";import{T as k,a as B,b as f,c as i}from"./TableRow-7a3a0f6b.js";import{T as b}from"./TextField-db3b16ac.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./memoTheme-099903ef.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-df41acd6.js";import"./TransitionGroupContext-8cc54e6b.js";import"./isFocusVisible-e8076040.js";import"./useTheme-cd2043a8.js";import"./Modal-4ab866e2.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-57cd7625.js";import"./utils-b1122307.js";import"./Paper-4a8af81c.js";import"./Slide-cc15fa33.js";import"./debounce-517eeb3c.js";import"./createSvgIcon-bc1c8089.js";import"./InputBase-14cc39ee.js";import"./isHostComponent-73d6e646.js";import"./Popover-acdf90d7.js";import"./Grow-b8595bd3.js";import"./useId-5948e6bd.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-2ab5594d.js";import"./useControlled-4e3d8864.js";function fe(){const[n,r]=l.useState(!1);N();const[p,o]=l.useState(null);l.useState(null);const[x,c]=l.useState(!1),[g,u]=l.useState(!1),{item:t}=v(s=>s.products),{toastStatus:h}=v(s=>s.app),[a,j]=l.useState({});l.useEffect(()=>{h.status=="success"&&r(!1)},[h.status]);async function q(s){s.preventDefault(),u(!0);try{await d.dispatch(S({...a,...t,item_count:a.quantity,quantity:(t==null?void 0:t.quantity)??0,total_quantity:((t==null?void 0:t.quantity)??0)*((a==null?void 0:a.quantity)??0)})),await d.dispatch(C()),u(!1),r(!1)}catch{u(!1)}}l.useEffect(()=>{n&&(j({}),o(null))},[n]);async function y(s){s.preventDefault(),c(!0);try{await d.dispatch(_(p)),c(!1)}catch{c(!1)}}return l.useEffect(()=>{t||o(null)},[t]),e.jsxs("div",{children:[e.jsx(m,{variant:"contained",onClick:()=>r(!0),children:"Product Order Item"}),e.jsx(T,{anchor:"bottom",open:n,onClose:()=>r(!1),children:e.jsx(D,{className:"h-[93vh] w-full",role:"presentation",children:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("div",{className:"w-full flex items-end justify-end p-4",children:e.jsx(m,{onClick:()=>r(!1),variant:"contained",children:e.jsx(I,{})})}),e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("div",{className:"w-1/4 flex items-end justify-end px-3 ",children:e.jsxs("div",{className:" flex flex-col w-full h-full gap-4",children:[e.jsxs("div",{className:"flex-none",children:[e.jsx("div",{className:"text-2xl font-bold",children:"Create Product Order Item"}),e.jsx(k,{"aria-label":"simple table",children:e.jsxs(B,{children:[e.jsxs(f,{children:[e.jsx(i,{children:"Item Name"}),e.jsxs(i,{align:"right",children:[t==null?void 0:t.name," ",t==null?void 0:t.description]})]}),e.jsxs(f,{children:[e.jsx(i,{children:"Quantity"}),e.jsxs(i,{align:"right",children:[t==null?void 0:t.uom," ",t==null?void 0:t.quantity]})]}),e.jsxs(f,{children:[e.jsx(i,{children:"Total Order Quantity"}),e.jsx(i,{align:"right",children:((t==null?void 0:t.quantity)??0)*((a==null?void 0:a.quantity)??0)})]})]})})]}),!x&&t==null&&e.jsx("div",{className:"text-red-500",children:"Item not found!"}),e.jsxs("div",{className:"flex flex-1 flex-col gap-4 w-full",children:[e.jsx("form",{onCutCapture:y,onSubmit:y,children:e.jsx(b,{className:"w-full",required:!0,value:p??"",onChange:s=>o(s.target.value),id:"barcode",label:x?"Loading...":"Item Barcode",variant:"outlined"})}),e.jsxs("form",{onSubmit:q,children:[e.jsx(b,{required:!0,type:"number",className:"w-full",value:a.quantity??"",onChange:s=>j({...a,quantity:s.target.value.replace(/[^0-9.]/g,"")}),id:"quantity",label:"Count Item",variant:"outlined"}),a.quantity!=0&&t!=null&&a.quantity&&e.jsx("div",{className:"w-full flex-none mt-3",children:e.jsx(m,{disabled:g,size:"large",type:"submit",variant:"contained",className:"w-full",children:"Submit"})})]})]})]})})})]})})})]})}export{fe as default};