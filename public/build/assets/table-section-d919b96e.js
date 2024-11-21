import{i as j,k as c,l as w,r as m,m as V,j as t,u as F,c as M,h as k}from"./app-fd6d6e0e.js";import{g as P}from"./account-thunk-28162eb8.js";import{T as B,a as E}from"./TableContainer-5601fe11.js";import{P as N}from"./Paper-4a8af81c.js";import{T as U,a as Y,b as v,c as o}from"./TableRow-7a3a0f6b.js";import{c as z}from"./clsx-0839fdbe.js";import{u as H}from"./useTheme-cd2043a8.js";import{g as W,a as O,s as q,m as G,c as I}from"./memoTheme-099903ef.js";import{c as J}from"./createSimplePaletteValueFilter-697dba8e.js";import{T as K}from"./Typography-8361d930.js";import{i as T}from"./isFocusVisible-e8076040.js";import"./account-details-6f223d90.js";import"./account-service-c4694cfb.js";function Q(e){return W("MuiLink",e)}const X=O("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=X,_=({theme:e,ownerState:r})=>{const n=r.color,s=j(e,`palette.${n}`,!1)||r.color,a=j(e,`palette.${n}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:c(s,.4)},ee=_,L={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},re=e=>{const{classes:r,component:n,focusVisible:s,underline:a}=e,u={root:["root",`underline${w(a)}`,n==="button"&&"button",s&&"focusVisible"]};return I(u,Q,r)},te=q(K,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`underline${w(n.underline)}`],n.component==="button"&&r.button]}})(G(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:n})=>r==="always"&&n.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(J()).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:c(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:c(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:c(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Z.focusVisible}`]:{outline:"auto"}}}]}))),ne=m.forwardRef(function(r,n){const s=V({props:r,name:"MuiLink"}),a=H(),{className:u,color:i="primary",component:x="a",onBlur:y,onFocus:f,TypographyClasses:D,underline:b="always",variant:h="inherit",sx:d,...C}=s,[$,g]=m.useState(!1),S=l=>{T(l.target)||g(!1),y&&y(l)},A=l=>{T(l.target)&&g(!0),f&&f(l)},p={...s,color:i,component:x,focusVisible:$,underline:b,variant:h},R=re(p);return t.jsx(te,{color:i,className:z(R.root,u),classes:D,component:x,onBlur:S,onFocus:A,ref:n,ownerState:p,variant:h,...C,sx:[...L[i]===void 0?[{color:i}]:[],...Array.isArray(d)?d:[d]],style:{...C.style,...b==="always"&&i!=="inherit"&&!L[i]&&{"--Link-underlineColor":ee({theme:a,ownerState:p})}}})}),oe=ne;function he(){const{accounts:e}=F(r=>r.accounts);return m.useEffect(()=>{M.dispatch(P())},[]),t.jsx(B,{component:N,children:t.jsxs(U,{sx:{minWidth:650},"aria-label":"simple table",children:[t.jsx(Y,{children:t.jsxs(v,{children:[t.jsx(o,{children:"Fullname"}),t.jsx(o,{children:"Email"}),t.jsx(o,{children:"Role"}),t.jsx(o,{children:"Contact #"}),t.jsx(o,{children:"Status"}),t.jsx(o,{children:"Action"})]})}),t.jsx(E,{children:e==null?void 0:e.map((r,n)=>{const s=k(r.dob,"YYYY-MM-DD");return k().diff(s,"years"),t.jsxs(v,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(o,{children:t.jsx(oe,{href:"/administrator/accounts/"+r.id,className:"font-medium text-gray-800",children:r.name})}),t.jsx(o,{children:r.email}),t.jsx(o,{children:r.role}),t.jsx(o,{children:r.contact}),t.jsx(o,{children:r.status}),t.jsx(o,{align:"right",children:"ss"})]},n)})})]})})}export{he as default};