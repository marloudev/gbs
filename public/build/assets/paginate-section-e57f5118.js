import{u as s,j as o,y as n}from"./app-bae3473d.js";import{S as p}from"./Stack-9fa580c6.js";import{P as m}from"./Pagination-f83a56bc.js";import"./memoTheme-dbf6671b.js";import"./clsx-0839fdbe.js";import"./useControlled-6316117f.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-d9e8efe8.js";import"./useSlot-326d0688.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-34585f9b.js";import"./ButtonBase-c3d95dbf.js";import"./isFocusVisible-e8076040.js";function v(){const{receives:t}=s(a=>a.products),e=window.location.href,r=new URL(e).searchParams.get("page");return console.log("page",r),o.jsx("div",{className:"py-5 flex items-center justify-end",children:o.jsx(p,{spacing:2,children:o.jsx(m,{defaultPage:parseInt(r),onChange:(a,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{v as default};
