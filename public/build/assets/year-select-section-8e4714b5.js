import{a as l,j as r,s as c}from"./app-f36650ec.js";function u(){const s=l();for(var o=new Date().getFullYear(),t=[],a=2023;a<=o;a++)t.push(a);return r.jsx("div",{children:r.jsxs("select",{onChange:e=>s(c(e.target.value)),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 mr-2",children:[r.jsx("option",{disabled:!0,selected:!0,children:"Choose Year..."}),t.map((e,n)=>r.jsxs("option",{value:e,children:["Year ",e]},n))]})})}export{u as default};
