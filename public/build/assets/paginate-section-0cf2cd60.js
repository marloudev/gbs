import{u as s,j as e,y as n}from"./app-b5484fde.js";import{S as p}from"./Stack-a9efe7f4.js";import{P as m}from"./Pagination-63eaac15.js";import"./memoTheme-eb6183d2.js";import"./clsx-0839fdbe.js";import"./useControlled-e20e46c0.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-e0985e18.js";import"./useSlot-961fb448.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-6dbbdfb2.js";import"./ButtonBase-4facb0cc.js";import"./isFocusVisible-e8076040.js";function U(){const{sales:t}=s(r=>r.sales),a=window.location.href,o=new URL(a).searchParams.get("page");return e.jsx("div",{className:"py-5 flex items-center justify-end",children:e.jsx(p,{spacing:2,children:e.jsx(m,{defaultPage:parseInt(o),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};
