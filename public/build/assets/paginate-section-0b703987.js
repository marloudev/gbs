import{u as s,j as e,y as n}from"./app-bae3473d.js";import{S as p}from"./Stack-9fa580c6.js";import{P as m}from"./Pagination-f83a56bc.js";import"./memoTheme-dbf6671b.js";import"./clsx-0839fdbe.js";import"./useControlled-6316117f.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-d9e8efe8.js";import"./useSlot-326d0688.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-34585f9b.js";import"./ButtonBase-c3d95dbf.js";import"./isFocusVisible-e8076040.js";function U(){const{sales:t}=s(r=>r.sales),a=window.location.href,o=new URL(a).searchParams.get("page");return e.jsx("div",{className:"py-5 flex items-center justify-end",children:e.jsx(p,{spacing:2,children:e.jsx(m,{defaultPage:parseInt(o),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};
