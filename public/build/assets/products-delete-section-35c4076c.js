import{r,j as o,c as a}from"./app-d2f94336.js";import{f,a as h}from"./products-thunk-d0cb31ba.js";import{B as i}from"./Button-0fd80c87.js";import{D as x}from"./Delete-c29e6f59.js";import{M as y}from"./Modal-14b1a5aa.js";import{B as j}from"./Box-644d6b35.js";import{T as s}from"./Typography-0f2432fd.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-39e11d80.js";import"./ButtonBase-d06350ab.js";import"./TransitionGroupContext-df4d4d4a.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-698b8aa5.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-ff6059aa.js";import"./useTheme-3499fc40.js";import"./utils-205345aa.js";import"./getReactElementRef-38341dc0.js";function H({data:n}){const[l,e]=r.useState(!1),d=()=>e(!0),m=()=>e(!1),[c,t]=r.useState(!1),p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",boxShadow:24,p:4};async function u(b){t(!0);try{await a.dispatch(f(n)),await a.dispatch(h()),t(!1),e(!1)}catch{t(!1)}}return o.jsxs("div",{children:[o.jsx(i,{variant:"contained",color:"error",onClick:d,children:o.jsx(x,{})}),o.jsx(y,{open:l,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o.jsxs(j,{sx:p,children:[o.jsx(s,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Are you sure you want to cancel this order?"}),o.jsx(s,{id:"modal-modal-description",className:"py-5",children:"Are you sure you want to delete your products? All of your data will be permanently removed. This action cannot be undone."}),o.jsx("div",{className:"w-full flex items-end justify-end",children:o.jsx(i,{disabled:c,variant:"contained",onClick:u,children:"Confirm"})})]})})]})}export{H as default};
