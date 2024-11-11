import{r as s,l as se,j as C}from"./app-18fb0b2d.js";import{c as k}from"./clsx-0839fdbe.js";import{g as re,a as ie,s as N,c as ae}from"./memoTheme-b62c7c40.js";import{i as be}from"./isHostComponent-73d6e646.js";import{u as Q}from"./useSlot-1912aba8.js";import{M as ye}from"./Modal-2a75b66f.js";import{P as we}from"./Paper-e1330b79.js";import{o as Z}from"./ownerDocument-613eb639.js";import{o as ee}from"./ownerWindow-03d1c82d.js";import{d as xe}from"./debounce-517eeb3c.js";import{a as Ce}from"./TransitionGroupContext-7f6bb1e5.js";import{G as Ee}from"./Grow-6fcdfd0b.js";function _e(e,t){var o,c,p;return s.isValidElement(e)&&t.indexOf(e.type.muiName??((p=(c=(o=e.type)==null?void 0:o._payload)==null?void 0:c.value)==null?void 0:p.muiName))!==-1}function qe({controlled:e,default:t,name:o,state:c="value"}){const{current:p}=s.useRef(e!==void 0),[i,f]=s.useState(t),h=p?e:i,d=s.useCallback(y=>{p||f(y)},[]);return[h,d]}const Re=s.createContext({}),Le=Re;function Me(e){return re("MuiList",e)}ie("MuiList",["root","padding","dense","subheader"]);const Se=e=>{const{classes:t,disablePadding:o,dense:c,subheader:p}=e;return ae({root:["root",!o&&"padding",c&&"dense",p&&"subheader"]},Me,t)},Te=N("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),Oe=s.forwardRef(function(t,o){const c=se({props:t,name:"MuiList"}),{children:p,className:i,component:f="ul",dense:h=!1,disablePadding:d=!1,subheader:y,...R}=c,L=s.useMemo(()=>({dense:h}),[h]),w={...c,component:f,dense:h,disablePadding:d},a=Se(w);return C.jsx(Le.Provider,{value:L,children:C.jsxs(Te,{as:f,className:k(a.root,i),ref:o,ownerState:w,...R,children:[y,p]})})}),Je=Oe;function ze(e){return re("MuiPopover",e)}ie("MuiPopover",["root","paper"]);function te(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function ne(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function j(e){return typeof e=="function"?e():e}const je=e=>{const{classes:t}=e;return ae({root:["root"],paper:["paper"]},ze,t)},ke=N(ye,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ne=N(we,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ue=s.forwardRef(function(t,o){const c=se({props:t,name:"MuiPopover"}),{action:p,anchorEl:i,anchorOrigin:f={vertical:"top",horizontal:"left"},anchorPosition:h,anchorReference:d="anchorEl",children:y,className:R,container:L,elevation:w=8,marginThreshold:a=16,open:g,PaperProps:le={},slots:ce={},slotProps:E={},transformOrigin:x={vertical:"top",horizontal:"left"},TransitionComponent:M=Ee,transitionDuration:S="auto",TransitionProps:{onEntering:U,...W}={},disableScrollLock:T=!1,...pe}=c,P=(E==null?void 0:E.paper)??le,O=s.useRef(),z={...c,anchorOrigin:f,anchorReference:d,elevation:w,marginThreshold:a,externalPaperSlotProps:P,transformOrigin:x,TransitionComponent:M,transitionDuration:S,TransitionProps:W},$=je(z),D=s.useCallback(()=>{if(d==="anchorPosition")return h;const n=j(i),l=(n&&n.nodeType===1?n:Z(O.current).body).getBoundingClientRect();return{top:l.top+te(l,f.vertical),left:l.left+oe(l,f.horizontal)}},[i,f.horizontal,f.vertical,h,d]),H=s.useCallback(n=>({vertical:te(n,x.vertical),horizontal:oe(n,x.horizontal)}),[x.horizontal,x.vertical]),A=s.useCallback(n=>{const r={width:n.offsetWidth,height:n.offsetHeight},l=H(r);if(d==="none")return{top:null,left:null,transformOrigin:ne(l)};const X=D();let v=X.top-l.vertical,b=X.left-l.horizontal;const Y=v+r.height,_=b+r.width,q=ee(j(i)),J=q.innerHeight-a,K=q.innerWidth-a;if(a!==null&&v<a){const u=v-a;v-=u,l.vertical+=u}else if(a!==null&&Y>J){const u=Y-J;v-=u,l.vertical+=u}if(a!==null&&b<a){const u=b-a;b-=u,l.horizontal+=u}else if(_>K){const u=_-K;b-=u,l.horizontal+=u}return{top:`${Math.round(v)}px`,left:`${Math.round(b)}px`,transformOrigin:ne(l)}},[i,d,D,H,a]),[ue,V]=s.useState(g),m=s.useCallback(()=>{const n=O.current;if(!n)return;const r=A(n);r.top!==null&&n.style.setProperty("top",r.top),r.left!==null&&(n.style.left=r.left),n.style.transformOrigin=r.transformOrigin,V(!0)},[A]);s.useEffect(()=>(T&&window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)),[i,T,m]);const fe=(n,r)=>{U&&U(n,r),m()},de=()=>{V(!1)};s.useEffect(()=>{g&&m()}),s.useImperativeHandle(p,()=>g?{updatePosition:()=>{m()}}:null,[g,m]),s.useEffect(()=>{if(!g)return;const n=xe(()=>{m()}),r=ee(i);return r.addEventListener("resize",n),()=>{n.clear(),r.removeEventListener("resize",n)}},[i,g,m]);let I=S;S==="auto"&&!M.muiSupportAuto&&(I=void 0);const me=L||(i?Z(j(i)).body:void 0),B={slots:ce,slotProps:{...E,paper:P}},[he,F]=Q("paper",{elementType:Ne,externalForwardedProps:B,additionalProps:{elevation:w,className:k($.paper,P==null?void 0:P.className),style:ue?P.style:{...P.style,opacity:0}},ownerState:z}),[G,{slotProps:ge,...Pe}]=Q("root",{elementType:ke,externalForwardedProps:B,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:me,open:g},ownerState:z,className:k($.root,R)}),ve=Ce(O,F.ref);return C.jsx(G,{...Pe,...!be(G)&&{slotProps:ge,disableScrollLock:T},...pe,ref:o,children:C.jsx(M,{appear:!0,in:g,onEntering:fe,onExited:de,timeout:I,...W,children:C.jsx(he,{...F,ref:ve,children:y})})})}),Ke=Ue;export{Je as L,Ke as P,Ne as a,Le as b,_e as i,qe as u};