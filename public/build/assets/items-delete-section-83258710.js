import{r,j as t,c as a}from"./app-83ce7a51.js";import{d as f,g as h}from"./products-thunk-bdbd8845.js";import{B as i}from"./Button-59fde5d5.js";import{D as x}from"./Delete-3c431332.js";import{M as y}from"./Modal-76f8a6a0.js";import{B as j}from"./Box-2df3c5be.js";import{T as s}from"./Typography-83743ffc.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./memoTheme-00ea516b.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-e1f83af8.js";import"./TransitionGroupContext-fb3e6e27.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-86a84dd3.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-911808af.js";import"./useTheme-ba78349d.js";import"./utils-3726fa69.js";function H({data:n}){const[l,o]=r.useState(!1),d=()=>o(!0),m=()=>o(!1),[p,e]=r.useState(!1),c={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",boxShadow:24,p:4};async function u(b){e(!0);try{await a.dispatch(f(n.id)),await a.dispatch(h()),e(!1),o(!1)}catch{e(!1)}}return t.jsxs("div",{children:[t.jsx(i,{variant:"contained",color:"error",onClick:d,children:t.jsx(x,{})}),t.jsx(y,{open:l,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.jsxs(j,{sx:c,children:[t.jsx(s,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Are you sure you want to cancel this item?"}),t.jsx(s,{id:"modal-modal-description",className:"py-5",children:"Are you sure you want to delete your item? All of your data will be permanently removed. This action cannot be undone."}),t.jsx("div",{className:"w-full flex items-end justify-end",children:t.jsx(i,{disabled:p,variant:"contained",onClick:u,children:"Confirm"})})]})})]})}export{H as default};
