import{r as s,m as re,j as x}from"./app-7ce828bf.js";import{c as N}from"./clsx-0839fdbe.js";import{g as se,a as ie,s as k,c as ae}from"./memoTheme-9e5d36f9.js";import{i as ye}from"./isHostComponent-73d6e646.js";import{u as Q}from"./useSlot-686b7842.js";import{M as be}from"./Modal-4b1961da.js";import{P as we}from"./Paper-e874bdf8.js";import{o as Z}from"./ownerDocument-613eb639.js";import{o as ee}from"./ownerWindow-03d1c82d.js";import{d as xe}from"./debounce-517eeb3c.js";import{a as Ee}from"./TransitionGroupContext-3cc3afcd.js";import{G as Re}from"./Grow-ffea1b22.js";function _e(e,t){var o,p,d;return s.isValidElement(e)&&t.indexOf(e.type.muiName??((d=(p=(o=e.type)==null?void 0:o._payload)==null?void 0:p.value)==null?void 0:d.muiName))!==-1}const Le=s.createContext({}),Ce=Le;function Me(e){return se("MuiList",e)}ie("MuiList",["root","padding","dense","subheader"]);const Te=e=>{const{classes:t,disablePadding:o,dense:p,subheader:d}=e;return ae({root:["root",!o&&"padding",p&&"dense",d&&"subheader"]},Me,t)},Oe=k("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),Se=s.forwardRef(function(t,o){const p=re({props:t,name:"MuiList"}),{children:d,className:l,component:u="ul",dense:P=!1,disablePadding:h=!1,subheader:R,...L}=p,C=s.useMemo(()=>({dense:P}),[P]),b={...p,component:u,dense:P,disablePadding:h},i=Te(b);return x.jsx(Ce.Provider,{value:C,children:x.jsxs(Oe,{as:u,className:N(i.root,l),ref:o,ownerState:b,...L,children:[R,d]})})}),qe=Se;function ze(e){return se("MuiPopover",e)}ie("MuiPopover",["root","paper"]);function te(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function ne(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function j(e){return typeof e=="function"?e():e}const je=e=>{const{classes:t}=e;return ae({root:["root"],paper:["paper"]},ze,t)},Ne=k(be,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ke=k(we,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),We=s.forwardRef(function(t,o){const p=re({props:t,name:"MuiPopover"}),{action:d,anchorEl:l,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:P,anchorReference:h="anchorEl",children:R,className:L,container:C,elevation:b=8,marginThreshold:i=16,open:m,PaperProps:le={},slots:ce={},slotProps:E={},transformOrigin:w={vertical:"top",horizontal:"left"},TransitionComponent:M=Re,transitionDuration:T="auto",TransitionProps:{onEntering:W,...$}={},disableScrollLock:O=!1,...pe}=p,g=(E==null?void 0:E.paper)??le,S=s.useRef(),z={...p,anchorOrigin:u,anchorReference:h,elevation:b,marginThreshold:i,externalPaperSlotProps:g,transformOrigin:w,TransitionComponent:M,transitionDuration:T,TransitionProps:$},D=je(z),H=s.useCallback(()=>{if(h==="anchorPosition")return P;const n=j(l),a=(n&&n.nodeType===1?n:Z(S.current).body).getBoundingClientRect();return{top:a.top+te(a,u.vertical),left:a.left+oe(a,u.horizontal)}},[l,u.horizontal,u.vertical,P,h]),U=s.useCallback(n=>({vertical:te(n,w.vertical),horizontal:oe(n,w.horizontal)}),[w.horizontal,w.vertical]),A=s.useCallback(n=>{const r={width:n.offsetWidth,height:n.offsetHeight},a=U(r);if(h==="none")return{top:null,left:null,transformOrigin:ne(a)};const X=H();let v=X.top-a.vertical,y=X.left-a.horizontal;const Y=v+r.height,_=y+r.width,q=ee(j(l)),J=q.innerHeight-i,K=q.innerWidth-i;if(i!==null&&v<i){const c=v-i;v-=c,a.vertical+=c}else if(i!==null&&Y>J){const c=Y-J;v-=c,a.vertical+=c}if(i!==null&&y<i){const c=y-i;y-=c,a.horizontal+=c}else if(_>K){const c=_-K;y-=c,a.horizontal+=c}return{top:`${Math.round(v)}px`,left:`${Math.round(y)}px`,transformOrigin:ne(a)}},[l,h,H,U,i]),[fe,B]=s.useState(m),f=s.useCallback(()=>{const n=S.current;if(!n)return;const r=A(n);r.top!==null&&n.style.setProperty("top",r.top),r.left!==null&&(n.style.left=r.left),n.style.transformOrigin=r.transformOrigin,B(!0)},[A]);s.useEffect(()=>(O&&window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)),[l,O,f]);const de=(n,r)=>{W&&W(n,r),f()},ue=()=>{B(!1)};s.useEffect(()=>{m&&f()}),s.useImperativeHandle(d,()=>m?{updatePosition:()=>{f()}}:null,[m,f]),s.useEffect(()=>{if(!m)return;const n=xe(()=>{f()}),r=ee(l);return r.addEventListener("resize",n),()=>{n.clear(),r.removeEventListener("resize",n)}},[l,m,f]);let F=T;T==="auto"&&!M.muiSupportAuto&&(F=void 0);const me=C||(l?Z(j(l)).body:void 0),G={slots:ce,slotProps:{...E,paper:g}},[he,I]=Q("paper",{elementType:ke,externalForwardedProps:G,additionalProps:{elevation:b,className:N(D.paper,g==null?void 0:g.className),style:fe?g.style:{...g.style,opacity:0}},ownerState:z}),[V,{slotProps:ge,...Pe}]=Q("root",{elementType:Ne,externalForwardedProps:G,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:me,open:m},ownerState:z,className:N(D.root,L)}),ve=Ee(S,I.ref);return x.jsx(V,{...Pe,...!ye(V)&&{slotProps:ge,disableScrollLock:O},...pe,ref:o,children:x.jsx(M,{appear:!0,in:m,onEntering:de,onExited:ue,timeout:F,...$,children:x.jsx(he,{...I,ref:ve,children:R})})})}),Je=We;export{qe as L,Je as P,ke as a,Ce as b,_e as i};
