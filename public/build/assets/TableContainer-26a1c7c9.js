import{r as p,m as d,j as c}from"./app-ffb1b877.js";import{c as b}from"./clsx-0839fdbe.js";import{d as f}from"./TableRow-151b1c8b.js";import{g as m,a as y,s as T,c as C}from"./memoTheme-ae4ae452.js";function v(o){return m("MuiTableBody",o)}y("MuiTableBody",["root"]);const w=o=>{const{classes:t}=o;return C({root:["root"]},v,t)},x=T("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,t)=>t.root})({display:"table-row-group"}),B={variant:"body"},u="tbody",R=p.forwardRef(function(t,e){const a=d({props:t,name:"MuiTableBody"}),{className:n,component:s=u,...l}=a,r={...a,component:s},i=w(r);return c.jsx(f.Provider,{value:B,children:c.jsx(x,{className:b(i.root,n),as:s,ref:e,role:s===u?null:"rowgroup",ownerState:r,...l})})}),E=R;function M(o){return m("MuiTableContainer",o)}y("MuiTableContainer",["root"]);const g=o=>{const{classes:t}=o;return C({root:["root"]},M,t)},U=T("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,t)=>t.root})({width:"100%",overflowX:"auto"}),j=p.forwardRef(function(t,e){const a=d({props:t,name:"MuiTableContainer"}),{className:n,component:s="div",...l}=a,r={...a,component:s},i=g(r);return c.jsx(U,{ref:e,as:s,className:b(i.root,n),ownerState:r,...l})}),P=j;export{P as T,E as a};