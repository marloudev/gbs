import{r,j as o,c as a}from"./app-7ce828bf.js";import{f,a as h}from"./products-thunk-71021430.js";import{B as i}from"./Button-ead979ed.js";import{D as x}from"./Delete-a574e91e.js";import{M as y}from"./Modal-4b1961da.js";import{B as j}from"./Box-656f4b8e.js";import{T as s}from"./Typography-e68b8b27.js";import"./products-service-96e8b073.js";import"./clsx-0839fdbe.js";import"./memoTheme-9e5d36f9.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-ce4a96ac.js";import"./TransitionGroupContext-3cc3afcd.js";import"./isFocusVisible-e8076040.js";import"./createSvgIcon-1901faae.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-686b7842.js";import"./useTheme-ac50545c.js";import"./utils-7875b360.js";import"./getReactElementRef-d2957806.js";function I({data:n}){const[l,t]=r.useState(!1),d=()=>t(!0),m=()=>t(!1),[c,e]=r.useState(!1),p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",boxShadow:24,p:4};async function u(b){e(!0);try{await a.dispatch(f(n)),await a.dispatch(h()),e(!1),t(!1)}catch{e(!1)}}return o.jsxs("div",{children:[o.jsx(i,{variant:"contained",color:"error",onClick:d,children:o.jsx(x,{})}),o.jsx(y,{open:l,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:o.jsxs(j,{sx:p,children:[o.jsx(s,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Are you sure you want to cancel this order?"}),o.jsx(s,{id:"modal-modal-description",className:"py-5",children:"Are you sure you want to delete your products? All of your data will be permanently removed. This action cannot be undone."}),o.jsx("div",{className:"w-full flex items-end justify-end",children:o.jsx(i,{disabled:c,variant:"contained",onClick:u,children:"Confirm"})})]})})]})}export{I as default};
