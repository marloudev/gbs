import{k as a,r as m,l as b,j as z,i as d}from"./app-18fb0b2d.js";import{c as I}from"./clsx-0839fdbe.js";import{g as R,a as $,s as C,m as u,c as x}from"./memoTheme-b62c7c40.js";import{c as g}from"./createSimplePaletteValueFilter-697dba8e.js";import{B as S}from"./ButtonBase-b7ee7f41.js";function O(o){return R("MuiIconButton",o)}const j=$("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),k=j,M=o=>{const{classes:t,disabled:e,color:r,edge:s,size:n}=o,i={root:["root",e&&"disabled",r!=="default"&&`color${a(r)}`,s&&`edge${a(s)}`,`size${a(n)}`]};return x(i,O,t)},w=C(S,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:e}=o;return[t.root,e.color!=="default"&&t[`color${a(e.color)}`],e.edge&&t[`edge${a(e.edge)}`],t[`size${a(e.size)}`]]}})(u(({theme:o})=>({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:d(o.palette.action.active,o.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),u(({theme:o})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(o.palette).filter(g()).map(([t])=>({props:{color:t},style:{color:(o.vars||o).palette[t].main}})),...Object.entries(o.palette).filter(g()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":o.vars?`rgba(${(o.vars||o).palette[t].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:d((o.vars||o).palette[t].main,o.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:o.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:o.typography.pxToRem(28)}}],[`&.${k.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}}))),E=m.forwardRef(function(t,e){const r=b({props:t,name:"MuiIconButton"}),{edge:s=!1,children:n,className:i,color:f="default",disabled:l=!1,disableFocusRipple:c=!1,size:v="medium",...y}=r,p={...r,edge:s,color:f,disabled:l,disableFocusRipple:c,size:v},B=M(p);return z.jsx(w,{className:I(B.root,i),centerRipple:!0,focusRipple:!c,disabled:l,ref:e,...y,ownerState:p,children:n})}),F=E;export{F as I};