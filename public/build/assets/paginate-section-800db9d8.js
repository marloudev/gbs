import{u as s,j as o,y as n}from"./app-83ce7a51.js";import{S as p}from"./Stack-2aa3a163.js";import{P as m}from"./Pagination-3d2a3730.js";import"./memoTheme-00ea516b.js";import"./clsx-0839fdbe.js";import"./useControlled-6066eed7.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-86a84dd3.js";import"./useSlot-911808af.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-fb3e6e27.js";import"./ButtonBase-e1f83af8.js";import"./isFocusVisible-e8076040.js";function U(){const{items:t}=s(r=>r.products),a=window.location.href,e=new URL(a).searchParams.get("page");return console.log("page",e),o.jsx("div",{className:"py-5 flex items-center justify-end",children:o.jsx(p,{spacing:2,children:o.jsx(m,{defaultPage:parseInt(e),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};
