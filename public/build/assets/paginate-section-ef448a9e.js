import{u as s,j as e,y as n}from"./app-a300b9d6.js";import{S as p}from"./Stack-2bbd6b69.js";import{P as m}from"./Pagination-d200b20a.js";import"./createSimplePaletteValueFilter-bf21cfab.js";import"./clsx-0839fdbe.js";import"./useControlled-902ff1a4.js";import"./createSvgIcon-a22404b8.js";import"./useSlot-13832f49.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-9de14e5c.js";import"./ButtonBase-cc60b464.js";import"./isFocusVisible-e8076040.js";function U(){const{warehouses:t}=s(r=>r.products),a=window.location.href,o=new URL(a).searchParams.get("page");return console.log("page",o),e.jsx("div",{className:"py-5 flex items-center justify-end",children:e.jsx(p,{spacing:2,children:e.jsx(m,{defaultPage:parseInt(o),onChange:(r,i)=>n.visit("?page="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{U as default};