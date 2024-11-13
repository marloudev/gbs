import{r as p,k as r,S as O,l as L,j as g,i as c}from"./app-db503ed8.js";import{c as $}from"./clsx-0839fdbe.js";import{g as T,a as V,s as S,r as j,m as G,c as F}from"./memoTheme-ab4b9a8d.js";import{c as U}from"./createSimplePaletteValueFilter-697dba8e.js";import{B as D}from"./ButtonBase-675d3a31.js";function H(o){return T("MuiButton",o)}const A=V("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),e=A,q=p.createContext({}),J=q,K=p.createContext(void 0),Q=K,X=o=>{const{color:t,disableElevation:a,fullWidth:n,size:i,variant:s,classes:l}=o,v={root:["root",s,`${s}${r(t)}`,`size${r(i)}`,`${s}Size${r(i)}`,`color${r(t)}`,a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${r(i)}`],endIcon:["icon","endIcon",`iconSize${r(i)}`]},x=F(v,H,l);return{...l,...x}},I=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Y=S(D,{shouldForwardProp:o=>j(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.root,t[a.variant],t[`${a.variant}${r(a.color)}`],t[`size${r(a.size)}`],t[`${a.variant}Size${r(a.size)}`],a.color==="inherit"&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})(G(({theme:o})=>{const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],a=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${e.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${e.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${e.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${e.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter(U()).map(([n])=>({props:{color:n},style:{"--variant-textColor":(o.vars||o).palette[n].main,"--variant-outlinedColor":(o.vars||o).palette[n].main,"--variant-outlinedBorder":o.vars?`rgba(${o.vars.palette[n].mainChannel} / 0.5)`:c(o.palette[n].main,.5),"--variant-containedColor":(o.vars||o).palette[n].contrastText,"--variant-containedBg":(o.vars||o).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[n].dark,"--variant-textBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette[n].main,o.palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[n].main,"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette[n].main,o.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:a,"--variant-textBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette.text.primary,o.palette.action.hoverOpacity),"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette.text.primary,o.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${e.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${e.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),Z=S("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.startIcon,t[`iconSize${r(a.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...I]}),_=S("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.endIcon,t[`iconSize${r(a.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...I]}),oo=p.forwardRef(function(t,a){const n=p.useContext(J),i=p.useContext(Q),s=O(n,t),l=L({props:s,name:"MuiButton"}),{children:v,color:x="primary",component:b="button",className:w,disabled:y=!1,disableElevation:R=!1,disableFocusRipple:f=!1,endIcon:z,focusVisibleClassName:m,fullWidth:E=!1,size:h="medium",startIcon:C,type:B,variant:P="text",...W}=l,u={...l,color:x,component:b,disabled:y,disableElevation:R,disableFocusRipple:f,fullWidth:E,size:h,type:B,variant:P},d=X(u),k=C&&g.jsx(Z,{className:d.startIcon,ownerState:u,children:C}),M=z&&g.jsx(_,{className:d.endIcon,ownerState:u,children:z}),N=i||"";return g.jsxs(Y,{ownerState:u,className:$(n.className,d.root,w,N),component:b,disabled:y,focusRipple:!f,focusVisibleClassName:$(d.focusVisible,m),ref:a,type:B,...W,classes:d,children:[k,v,M]})}),eo=oo;export{eo as B};
