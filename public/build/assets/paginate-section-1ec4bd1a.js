import{u as s,j as o,y as n}from"./app-7282ed66.js";import{S as p}from"./Stack-96f95776.js";import{P as m}from"./Pagination-167eb23c.js";import"./memoTheme-9c9795b4.js";import"./clsx-0839fdbe.js";import"./useControlled-04f9bb6f.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-f32eb966.js";import"./useSlot-1f8daf3f.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-ae2c60f9.js";import"./ButtonBase-d72c5240.js";import"./isFocusVisible-e8076040.js";function U(){const{items:t}=s(r=>r.products),a=window.location.href,e=new URL(a).searchParams.get("page");return console.log("page",e),o.jsx("div",{className:"py-5 flex items-center justify-end",children:o.jsx(p,{spacing:2,children:o.jsx(m,{defaultPage:parseInt(e),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};
