import{a as n,r as o,j as r,c as a}from"./app-ffb1b877.js";import{d}from"./cashier-thunk-7994e9b3.js";import{T as c}from"./TrashIcon-1282d64f.js";import"./sales-service-19b3eac2.js";function p({data:t}){n();function s(e){a.dispatch(d(e))}return o.useEffect(()=>{const e=i=>{(i.key==="V"||i.key==="v")&&s(parseInt(t.id))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t.id]),r.jsx("div",{children:r.jsx("button",{onClick:()=>s(t.id),className:"font-medium text-gray-800 ",children:r.jsx(c,{className:"h-6 text-red-500"})})})}export{p as default};