import{e as R,c as V,g as b,s as D}from"./memoTheme-3ed1ce72.js";import{S as B,O as E,E as F,a9 as v,aa as u,ab as M,p as O,ac as $,r as p,a8 as G,j as N,ad as h,l as U}from"./app-f65ae074.js";import{c as A}from"./clsx-0839fdbe.js";const L=R(),q=L;function z(e){const{theme:s,name:o,props:t}=e;return!s||!s.components||!s.components[o]||!s.components[o].defaultProps?t:B(s.components[o].defaultProps,t)}function H({props:e,name:s,defaultTheme:o,themeId:t}){let n=E(o);return t&&(n=n[t]||n),z({theme:n,name:s,props:e})}const I=F(),J=q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function K(e){return H({props:e,name:"MuiStack",defaultTheme:I})}function Q(e,s){const o=p.Children.toArray(e).filter(Boolean);return o.reduce((t,n,a)=>(t.push(n),a<o.length-1&&t.push(p.cloneElement(s,{key:`separator-${a}`})),t),[])}const W=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],X=({ownerState:e,theme:s})=>{let o={display:"flex",flexDirection:"column",...v({theme:s},u({values:e.direction,breakpoints:s.breakpoints.values}),t=>({flexDirection:t}))};if(e.spacing){const t=M(s),n=Object.keys(s.breakpoints.values).reduce((r,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(r[c]=!0),r),{}),a=u({values:e.direction,base:n}),m=u({values:e.spacing,base:n});typeof a=="object"&&Object.keys(a).forEach((r,c,i)=>{if(!a[r]){const l=c>0?a[i[c-1]]:"column";a[r]=l}}),o=O(o,v({theme:s},m,(r,c)=>e.useFlexGap?{gap:h(t,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${W(c?a[c]:e.direction)}`]:h(t,r)}}))}return o=$(s.breakpoints,o),o};function Y(e={}){const{createStyledComponent:s=J,useThemeProps:o=K,componentName:t="MuiStack"}=e,n=()=>V({root:["root"]},r=>b(t,r),{}),a=s(X);return p.forwardRef(function(r,c){const i=o(r),f=G(i),{component:l="div",direction:k="column",spacing:S=0,divider:y,children:g,className:P,useFlexGap:x=!1,...j}=f,C={direction:k,spacing:S,useFlexGap:x},T=n();return N.jsx(a,{as:l,ownerState:C,ref:c,className:A(T.root,P),...j,children:y?Q(g,y):g})})}const Z=Y({createStyledComponent:D("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>U({props:e,name:"MuiStack"})}),se=Z;export{se as S,z as g};
