import{u as s,j as o,y as n}from"./app-01fe8dc7.js";import{S as p}from"./Stack-7f8c2886.js";import{P as m}from"./Pagination-3962ecd0.js";import"./memoTheme-a980a695.js";import"./clsx-0839fdbe.js";import"./useControlled-1ecb8d44.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./createSvgIcon-a9b7435a.js";import"./useSlot-6557445d.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-5f46303c.js";import"./ButtonBase-1cfb664c.js";import"./isFocusVisible-e8076040.js";function v(){const{receives:t}=s(a=>a.products),e=window.location.href,r=new URL(e).searchParams.get("page");return console.log("page",r),o.jsx("div",{className:"py-5 flex items-center justify-end",children:o.jsx(p,{spacing:2,children:o.jsx(m,{defaultPage:parseInt(r),onChange:(a,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{v as default};
