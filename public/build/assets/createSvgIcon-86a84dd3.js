import{l as y,r as z,m as C,j as h}from"./app-83ce7a51.js";import{c as w}from"./clsx-0839fdbe.js";import{g as R,a as b,s as j,m as $,c as M}from"./memoTheme-00ea516b.js";function N(o){return R("MuiSvgIcon",o)}b("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const A=o=>{const{color:e,fontSize:t,classes:i}=o,r={root:["root",e!=="inherit"&&`color${y(e)}`,`fontSize${y(t)}`]};return M(r,N,i)},E=j("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${y(t.color)}`],e[`fontSize${y(t.fontSize)}`]]}})($(({theme:o})=>{var e,t,i,r,l,d,n,u,c,f,a,S,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(r=(e=o.transitions)==null?void 0:e.create)==null?void 0:r.call(e,"fill",{duration:(i=(t=(o.vars??o).transitions)==null?void 0:t.duration)==null?void 0:i.shorter}),variants:[{props:s=>!s.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((d=(l=o.typography)==null?void 0:l.pxToRem)==null?void 0:d.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((u=(n=o.typography)==null?void 0:n.pxToRem)==null?void 0:u.call(n,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((f=(c=o.typography)==null?void 0:c.pxToRem)==null?void 0:f.call(c,35))||"2.1875rem"}},...Object.entries((o.vars??o).palette).filter(([,s])=>s&&s.main).map(([s])=>{var m,v;return{props:{color:s},style:{color:(v=(m=(o.vars??o).palette)==null?void 0:m[s])==null?void 0:v.main}}}),{props:{color:"action"},style:{color:(S=(a=(o.vars??o).palette)==null?void 0:a.action)==null?void 0:S.active}},{props:{color:"disabled"},style:{color:(p=(g=(o.vars??o).palette)==null?void 0:g.action)==null?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),x=z.forwardRef(function(e,t){const i=C({props:e,name:"MuiSvgIcon"}),{children:r,className:l,color:d="inherit",component:n="svg",fontSize:u="medium",htmlColor:c,inheritViewBox:f=!1,titleAccess:a,viewBox:S="0 0 24 24",...g}=i,p=z.isValidElement(r)&&r.type==="svg",s={...i,color:d,component:n,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:S,hasSvgAsChild:p},m={};f||(m.viewBox=S);const v=A(s);return h.jsxs(E,{as:n,className:w(v.root,l),focusable:"false",color:c,"aria-hidden":a?void 0:!0,role:a?"img":void 0,ref:t,...m,...g,...p&&r.props,ownerState:s,children:[p?r.props.children:r,a?h.jsx("title",{children:a}):null]})});x&&(x.muiName="SvgIcon");const I=x;function k(o,e){function t(i,r){return h.jsx(I,{"data-testid":`${e}Icon`,ref:r,...i,children:o})}return t.muiName=I.muiName,z.memo(z.forwardRef(t))}export{k as c};