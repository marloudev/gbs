import{u as s,j as e,y as n}from"./app-fd6d6e0e.js";import{S as p}from"./Stack-1e2d83a1.js";import{P as m}from"./Pagination-3575bd74.js";import"./memoTheme-099903ef.js";import"./clsx-0839fdbe.js";import"./useControlled-4e3d8864.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-bc1c8089.js";import"./useSlot-57cd7625.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-8cc54e6b.js";import"./ButtonBase-df41acd6.js";import"./isFocusVisible-e8076040.js";function U(){const{sales:t}=s(r=>r.sales),a=window.location.href,o=new URL(a).searchParams.get("page");return e.jsx("div",{className:"py-5 flex items-center justify-end",children:e.jsx(p,{spacing:2,children:e.jsx(m,{defaultPage:parseInt(o),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};
