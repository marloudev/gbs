import{r as i,j as t,c as a}from"./app-83ce7a51.js";import{h as f,b as u}from"./products-thunk-bdbd8845.js";import{B as r}from"./Button-59fde5d5.js";import{M as x}from"./Modal-76f8a6a0.js";import{B as j}from"./Box-2df3c5be.js";import{T as s}from"./Typography-83743ffc.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./memoTheme-00ea516b.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-e1f83af8.js";import"./TransitionGroupContext-fb3e6e27.js";import"./isFocusVisible-e8076040.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-911808af.js";import"./useTheme-ba78349d.js";import"./utils-3726fa69.js";function z({data:n}){const[d,e]=i.useState(!1),l=()=>e(!0),m=()=>e(!1),[c,o]=i.useState(!1),p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4};async function h(v){o(!0);try{await a.dispatch(f({...n,status:"Received"})),await a.dispatch(u()),o(!1),e(!1)}catch{o(!1)}}return t.jsxs("div",{children:[t.jsx(r,{variant:"contained",onClick:l,children:"Received Item"}),t.jsx(x,{open:d,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsxs(j,{sx:p,children:[t.jsx(s,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Are you sure you want to received this item?"}),t.jsx(s,{id:"modal-modal-description",sx:{mt:2},children:"Please confirm if you'd like to proceed with this item."}),t.jsx("div",{className:"w-full flex items-end justify-end",children:t.jsx(r,{disabled:c,variant:"contained",onClick:h,children:"Confirm"})})]})})]})}export{z as default};