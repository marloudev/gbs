import{r as P,m as y,j as g,k as u,M as c}from"./app-7ce828bf.js";import{c as x}from"./clsx-0839fdbe.js";import{u as w}from"./useTheme-ac50545c.js";import{g as b,a as R,s as C,m as $,c as h}from"./memoTheme-9e5d36f9.js";function k(e){return b("MuiPaper",e)}R("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const M=e=>{const{square:a,elevation:o,variant:r,classes:t}=e,n={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${o}`]};return h(n,k,t)},q=C("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})($(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),S=P.forwardRef(function(a,o){var d;const r=y({props:a,name:"MuiPaper"}),t=w(),{className:n,component:i="div",elevation:s=1,square:m=!1,variant:l="elevation",...v}=r,p={...r,component:i,elevation:s,square:m,variant:l},f=M(p);return g.jsx(q,{as:i,ownerState:p,className:x(f.root,n),ref:o,...v,style:{...l==="elevation"&&{"--Paper-shadow":(t.vars||t).shadows[s],...t.vars&&{"--Paper-overlay":(d=t.vars.overlays)==null?void 0:d[s]},...!t.vars&&t.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${u("#fff",c(s))}, ${u("#fff",c(s))})`}},...v.style}})}),T=S;export{T as P};
