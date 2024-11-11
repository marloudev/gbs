import{k as d,r as h,l as E,t as H,j as s}from"./app-f65ae074.js";import{c as l}from"./clsx-0839fdbe.js";import{g as L,a as F,s as f,m as R,r as q,c as O}from"./memoTheme-3ed1ce72.js";import{u as V}from"./useTheme-a437e8b1.js";import{M as W}from"./Modal-548cc48d.js";import{P as Y}from"./Paper-dacd699a.js";import{S as G}from"./Slide-782b4996.js";import{c as J}from"./createSvgIcon-bb46f0d7.js";function K(o){return L("MuiDrawer",o)}F("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const A=(o,r)=>{const{ownerState:e}=o;return[r.root,(e.variant==="permanent"||e.variant==="persistent")&&r.docked,r.modal]},Q=o=>{const{classes:r,anchor:e,variant:a}=o,p={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${d(e)}`,a!=="temporary"&&`paperAnchorDocked${d(e)}`]};return O(p,K,r)},X=f(W,{name:"MuiDrawer",slot:"Root",overridesResolver:A})(R(({theme:o})=>({zIndex:(o.vars||o).zIndex.drawer}))),P=f("div",{shouldForwardProp:q,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:A})({flex:"0 0 auto"}),Z=f(Y,{name:"MuiDrawer",slot:"Paper",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.paper,r[`paperAnchor${d(e.anchor)}`],e.variant!=="temporary"&&r[`paperAnchorDocked${d(e.anchor)}`]]}})(R(({theme:o})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(o.vars||o).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:r})=>r.anchor==="left"&&r.variant!=="temporary",style:{borderRight:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="top"&&r.variant!=="temporary",style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="right"&&r.variant!=="temporary",style:{borderLeft:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="bottom"&&r.variant!=="temporary",style:{borderTop:`1px solid ${(o.vars||o).palette.divider}`}}]}))),C={left:"right",right:"left",top:"down",bottom:"up"};function _(o){return["left","right"].includes(o)}function rr({direction:o},r){return o==="rtl"&&_(r)?C[r]:r}const or=h.forwardRef(function(r,e){const a=E({props:r,name:"MuiDrawer"}),p=V(),M=H(),S={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{anchor:v="left",BackdropProps:b,children:B,className:m,elevation:D=16,hideBackdrop:$=!1,ModalProps:{BackdropProps:j,...z}={},onClose:T,open:u=!1,PaperProps:x={},SlideProps:I,TransitionComponent:N=G,transitionDuration:g=S,variant:i="temporary",...c}=a,w=h.useRef(!1);h.useEffect(()=>{w.current=!0},[]);const U=rr({direction:M?"rtl":"ltr"},v),n={...a,anchor:v,elevation:D,open:u,variant:i,...c},t=Q(n),k=s.jsx(Z,{elevation:i==="temporary"?D:0,square:!0,...x,className:l(t.paper,x.className),ownerState:n,children:B});if(i==="permanent")return s.jsx(P,{className:l(t.root,t.docked,m),ownerState:n,ref:e,...c,children:k});const y=s.jsx(N,{in:u,direction:C[U],timeout:g,appear:w.current,...I,children:k});return i==="persistent"?s.jsx(P,{className:l(t.root,t.docked,m),ownerState:n,ref:e,...c,children:y}):s.jsx(X,{BackdropProps:{...b,...j,transitionDuration:g},className:l(t.root,t.modal,m),open:u,ownerState:n,onClose:T,hideBackdrop:$,ref:e,...c,...z,children:y})}),dr=or,mr=J(s.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");export{mr as C,dr as D};
