import{u as s,j as e,y as n}from"./app-2de8a389.js";import{S as p}from"./Stack-ddc75382.js";import{P as m}from"./Pagination-ee1e6a8b.js";import"./memoTheme-31083844.js";import"./clsx-0839fdbe.js";import"./useControlled-6234c698.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-37e59595.js";import"./useSlot-b30b0351.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-efc6633f.js";import"./ButtonBase-da80a59f.js";import"./isFocusVisible-e8076040.js";function U(){const{sales:t}=s(r=>r.sales),a=window.location.href,o=new URL(a).searchParams.get("page");return e.jsx("div",{className:"py-5 flex items-center justify-end",children:e.jsx(p,{spacing:2,children:e.jsx(m,{defaultPage:parseInt(o),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};
