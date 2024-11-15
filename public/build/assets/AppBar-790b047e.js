import{k as p,r as B,l as y,j as g}from"./app-cdc2bbc2.js";import{c as A}from"./clsx-0839fdbe.js";import{g as f,a as x,s as k,m as v,c as b}from"./memoTheme-94a116cc.js";import{c as C}from"./createSimplePaletteValueFilter-697dba8e.js";import{P as S}from"./Paper-1de06b18.js";function I(o){return f("MuiAppBar",o)}x("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const z=o=>{const{color:r,position:a,classes:t}=o,s={root:["root",`color${p(r)}`,`position${p(a)}`]};return b(s,I,t)},i=(o,r)=>o?`${o==null?void 0:o.replace(")","")}, ${r})`:r,$=k(S,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[`position${p(a.position)}`],r[`color${p(a.color)}`]]}})(v(({theme:o})=>({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,variants:[{props:{position:"fixed"},style:{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}}},{props:{position:"absolute"},style:{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"sticky"},style:{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0}},{props:{position:"static"},style:{position:"static"}},{props:{position:"relative"},style:{position:"relative"}},{props:{color:"inherit"},style:{"--AppBar-color":"inherit"}},{props:{color:"default"},style:{"--AppBar-background":o.vars?o.vars.palette.AppBar.defaultBg:o.palette.grey[100],"--AppBar-color":o.vars?o.vars.palette.text.primary:o.palette.getContrastText(o.palette.grey[100]),...o.applyStyles("dark",{"--AppBar-background":o.vars?o.vars.palette.AppBar.defaultBg:o.palette.grey[900],"--AppBar-color":o.vars?o.vars.palette.text.primary:o.palette.getContrastText(o.palette.grey[900])})}},...Object.entries(o.palette).filter(C(["contrastText"])).map(([r])=>({props:{color:r},style:{"--AppBar-background":(o.vars??o).palette[r].main,"--AppBar-color":(o.vars??o).palette[r].contrastText}})),{props:r=>r.enableColorOnDark===!0&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)"}},{props:r=>r.enableColorOnDark===!1&&!["inherit","transparent"].includes(r.color),style:{backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...o.applyStyles("dark",{backgroundColor:o.vars?i(o.vars.palette.AppBar.darkBg,"var(--AppBar-background)"):null,color:o.vars?i(o.vars.palette.AppBar.darkColor,"var(--AppBar-color)"):null})}},{props:{color:"transparent"},style:{"--AppBar-background":"transparent","--AppBar-color":"inherit",backgroundColor:"var(--AppBar-background)",color:"var(--AppBar-color)",...o.applyStyles("dark",{backgroundImage:"none"})}}]}))),D=B.forwardRef(function(r,a){const t=y({props:r,name:"MuiAppBar"}),{className:s,color:n="primary",enableColorOnDark:c=!1,position:l="fixed",...u}=t,e={...t,color:n,position:l,enableColorOnDark:c},d=z(e);return g.jsx($,{square:!0,component:"header",ownerState:e,elevation:4,className:A(d.root,s,l==="fixed"&&"mui-fixed"),ref:a,...u})}),M=D;export{M as A};