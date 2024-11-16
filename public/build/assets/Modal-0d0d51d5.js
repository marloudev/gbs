import{r as c,j as I,L as xe,l as ce}from"./app-f825970e.js";import{c as G}from"./clsx-0839fdbe.js";import{g as le,a as de,s as X,c as ue,m as ye}from"./createSimplePaletteValueFilter-54621e7a.js";import{o as Y}from"./ownerWindow-03d1c82d.js";import{o as j}from"./ownerDocument-613eb639.js";import{a as $,u as te,s as ne,b as oe}from"./TransitionGroupContext-869efa20.js";import{e as Re}from"./resolveComponentProps-3112ecbb.js";import{u as q}from"./useSlot-e3a8322a.js";import{u as Te}from"./useTheme-bba71903.js";import{T as Pe,r as ve,g as re}from"./utils-1ac319af.js";import{g as J}from"./getReactElementRef-07e65afb.js";function se(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function ke(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}function Se(e){return typeof e=="function"?e():e}const Ce=c.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[i,a]=c.useState(null),f=$(c.isValidElement(n)?J(n):null,o);if(te(()=>{r||a(Se(s)||document.body)},[s,r]),te(()=>{if(i&&!r)return ne(o,i),()=>{ne(o,null)}},[o,i,r]),r){if(c.isValidElement(n)){const g={ref:f};return c.cloneElement(n,g)}return I.jsx(c.Fragment,{children:n})}return I.jsx(c.Fragment,{children:i&&xe.createPortal(n,i)})}),we=Ce,Ie={entering:{opacity:1},entered:{opacity:1}},Me=c.forwardRef(function(t,o){const n=Te(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:a,easing:f,in:g,onEnter:v,onEntered:E,onEntering:T,onExit:h,onExited:p,onExiting:M,style:x,timeout:P=s,TransitionComponent:k=Pe,...d}=t,m=c.useRef(null),S=$(m,J(a),o),y=b=>l=>{if(b){const u=m.current;l===void 0?b(u):b(u,l)}},R=y(T),w=y((b,l)=>{ve(b);const u=re({style:x,timeout:P,easing:f},{mode:"enter"});b.style.webkitTransition=n.transitions.create("opacity",u),b.style.transition=n.transitions.create("opacity",u),v&&v(b,l)}),C=y(E),F=y(M),O=y(b=>{const l=re({style:x,timeout:P,easing:f},{mode:"exit"});b.style.webkitTransition=n.transitions.create("opacity",l),b.style.transition=n.transitions.create("opacity",l),h&&h(b)}),B=y(p),D=b=>{r&&r(m.current,b)};return I.jsx(k,{appear:i,in:g,nodeRef:m,onEnter:w,onEntered:C,onEntering:R,onExit:O,onExited:B,onExiting:F,addEndListener:D,timeout:P,...d,children:(b,l)=>c.cloneElement(a,{style:{opacity:0,visibility:b==="exited"&&!g?"hidden":void 0,...Ie[b],...x,...a.props.style},ref:S,...l})})}),Ne=Me;function Fe(e){return le("MuiBackdrop",e)}de("MuiBackdrop",["root","invisible"]);const Ae=e=>{const{ownerState:t,...o}=e;return o},Oe=e=>{const{classes:t,invisible:o}=e;return ue({root:["root",o&&"invisible"]},Fe,t)},Be=X("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Le=c.forwardRef(function(t,o){const n=ce({props:t,name:"MuiBackdrop"}),{children:s,className:r,component:i="div",invisible:a=!1,open:f,components:g={},componentsProps:v={},slotProps:E={},slots:T={},TransitionComponent:h,transitionDuration:p,...M}=n,x={...n,component:i,invisible:a},P=Oe(x),k={transition:h,root:g.Root,...T},d={...v,...E},m={slots:k,slotProps:d},[S,y]=q("root",{elementType:Be,externalForwardedProps:m,className:G(P.root,r),ownerState:x}),[R,w]=q("transition",{elementType:Ne,externalForwardedProps:m,ownerState:x}),C=Ae(w);return I.jsx(R,{in:f,timeout:p,...M,...C,children:I.jsx(S,{"aria-hidden":!0,...y,classes:P,ref:o,children:s})})}),De=Le;function je(e){const t=j(e);return t.body===e?Y(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ie(e){return parseInt(Y(e).getComputedStyle(e).paddingRight,10)||0}function Ue(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function ae(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const a=!r.includes(i),f=!Ue(i);a&&f&&K(i,s)})}function V(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ke(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(je(n)){const i=ke(Y(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ie(n)+i}px`;const a=j(n).querySelectorAll(".mui-fixed");[].forEach.call(a,f=>{o.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${ie(f)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const i=n.parentElement,a=Y(n);r=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:a})=>{r?i.style.setProperty(a,r):i.style.removeProperty(a)})}}function $e(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class We{constructor(){this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=$e(o);ae(o,t.mount,t.modalRef,s,!0);const r=V(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=V(this.containers,r=>r.modals.includes(t)),s=this.containers[n];s.restore||(s.restore=Ke(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=V(this.containers,i=>i.modals.includes(t)),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,o),ae(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const ze=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function He(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ye(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function qe(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ye(e))}function Ve(e){const t=[],o=[];return Array.from(e.querySelectorAll(ze)).forEach((n,s)=>{const r=He(n);r===-1||!qe(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Ge(){return!0}function Xe(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Ve,isEnabled:i=Ge,open:a}=e,f=c.useRef(!1),g=c.useRef(null),v=c.useRef(null),E=c.useRef(null),T=c.useRef(null),h=c.useRef(!1),p=c.useRef(null),M=$(J(t),p),x=c.useRef(null);c.useEffect(()=>{!a||!p.current||(h.current=!o)},[o,a]),c.useEffect(()=>{if(!a||!p.current)return;const d=j(p.current);return p.current.contains(d.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),h.current&&p.current.focus()),()=>{s||(E.current&&E.current.focus&&(f.current=!0,E.current.focus()),E.current=null)}},[a]),c.useEffect(()=>{if(!a||!p.current)return;const d=j(p.current),m=R=>{x.current=R,!(n||!i()||R.key!=="Tab")&&d.activeElement===p.current&&R.shiftKey&&(f.current=!0,v.current&&v.current.focus())},S=()=>{var C,F;const R=p.current;if(R===null)return;if(!d.hasFocus()||!i()||f.current){f.current=!1;return}if(R.contains(d.activeElement)||n&&d.activeElement!==g.current&&d.activeElement!==v.current)return;if(d.activeElement!==T.current)T.current=null;else if(T.current!==null)return;if(!h.current)return;let w=[];if((d.activeElement===g.current||d.activeElement===v.current)&&(w=r(p.current)),w.length>0){const O=!!((C=x.current)!=null&&C.shiftKey&&((F=x.current)==null?void 0:F.key)==="Tab"),B=w[0],D=w[w.length-1];typeof B!="string"&&typeof D!="string"&&(O?D.focus():B.focus())}else R.focus()};d.addEventListener("focusin",S),d.addEventListener("keydown",m,!0);const y=setInterval(()=>{d.activeElement&&d.activeElement.tagName==="BODY"&&S()},50);return()=>{clearInterval(y),d.removeEventListener("focusin",S),d.removeEventListener("keydown",m,!0)}},[o,n,s,i,a,r]);const P=d=>{E.current===null&&(E.current=d.relatedTarget),h.current=!0,T.current=d.target;const m=t.props.onFocus;m&&m(d)},k=d=>{E.current===null&&(E.current=d.relatedTarget),h.current=!0};return I.jsxs(c.Fragment,{children:[I.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:g,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:M,onFocus:P}),I.jsx("div",{tabIndex:a?0:-1,onFocus:k,ref:v,"data-testid":"sentinelEnd"})]})}function Je(e){return typeof e=="function"?e():e}function Qe(e){return e?e.props.hasOwnProperty("in"):!1}const H=new We;function Ze(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,closeAfterTransition:s=!1,onTransitionEnter:r,onTransitionExited:i,children:a,onClose:f,open:g,rootRef:v}=e,E=c.useRef({}),T=c.useRef(null),h=c.useRef(null),p=$(h,v),[M,x]=c.useState(!g),P=Qe(a);let k=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(k=!1);const d=()=>j(T.current),m=()=>(E.current.modalRef=h.current,E.current.mount=T.current,E.current),S=()=>{H.mount(m(),{disableScrollLock:n}),h.current&&(h.current.scrollTop=0)},y=oe(()=>{const l=Je(t)||d().body;H.add(m(),l),h.current&&S()}),R=()=>H.isTopModal(m()),w=oe(l=>{T.current=l,l&&(g&&R()?S():h.current&&K(h.current,k))}),C=c.useCallback(()=>{H.remove(m(),k)},[k]);c.useEffect(()=>()=>{C()},[C]),c.useEffect(()=>{g?y():(!P||!s)&&C()},[g,C,P,s,y]);const F=l=>u=>{var N;(N=l.onKeyDown)==null||N.call(l,u),!(u.key!=="Escape"||u.which===229||!R())&&(o||(u.stopPropagation(),f&&f(u,"escapeKeyDown")))},O=l=>u=>{var N;(N=l.onClick)==null||N.call(l,u),u.target===u.currentTarget&&f&&f(u,"backdropClick")};return{getRootProps:(l={})=>{const u=Re(e);delete u.onTransitionEnter,delete u.onTransitionExited;const N={...u,...l};return{role:"presentation",...N,onKeyDown:F(N),ref:p}},getBackdropProps:(l={})=>{const u=l;return{"aria-hidden":!0,...u,onClick:O(u),open:g}},getTransitionProps:()=>{const l=()=>{x(!1),r&&r()},u=()=>{x(!0),i&&i(),s&&C()};return{onEnter:se(l,a==null?void 0:a.props.onEnter),onExited:se(u,a==null?void 0:a.props.onExited)}},rootRef:p,portalRef:w,isTopModal:R,exited:M,hasTransition:P}}function _e(e){return le("MuiModal",e)}de("MuiModal",["root","hidden","backdrop"]);const et=e=>{const{open:t,exited:o,classes:n}=e;return ue({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},_e,n)},tt=X("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(ye(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),nt=X(De,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ot=c.forwardRef(function(t,o){const n=ce({name:"MuiModal",props:t}),{BackdropComponent:s=nt,BackdropProps:r,classes:i,className:a,closeAfterTransition:f=!1,children:g,container:v,component:E,components:T={},componentsProps:h={},disableAutoFocus:p=!1,disableEnforceFocus:M=!1,disableEscapeKeyDown:x=!1,disablePortal:P=!1,disableRestoreFocus:k=!1,disableScrollLock:d=!1,hideBackdrop:m=!1,keepMounted:S=!1,onBackdropClick:y,onClose:R,onTransitionEnter:w,onTransitionExited:C,open:F,slotProps:O={},slots:B={},theme:D,...b}=n,l={...n,closeAfterTransition:f,disableAutoFocus:p,disableEnforceFocus:M,disableEscapeKeyDown:x,disablePortal:P,disableRestoreFocus:k,disableScrollLock:d,hideBackdrop:m,keepMounted:S},{getRootProps:u,getBackdropProps:N,getTransitionProps:fe,portalRef:pe,isTopModal:me,exited:Q,hasTransition:Z}=Ze({...l,rootRef:o}),U={...l,exited:Q},A=et(U),W={};if(g.props.tabIndex===void 0&&(W.tabIndex="-1"),Z){const{onEnter:L,onExited:z}=fe();W.onEnter=L,W.onExited=z}const _={...b,slots:{root:T.Root,backdrop:T.Backdrop,...B},slotProps:{...h,...O}},[he,be]=q("root",{elementType:tt,externalForwardedProps:_,getSlotProps:u,additionalProps:{ref:o,as:E},ownerState:U,className:G(a,A==null?void 0:A.root,!U.open&&U.exited&&(A==null?void 0:A.hidden))}),[ge,ee]=q("backdrop",{elementType:s,externalForwardedProps:_,additionalProps:r,getSlotProps:L=>N({...L,onClick:z=>{y&&y(z),L!=null&&L.onClick&&L.onClick(z)}}),className:G(r==null?void 0:r.className,A==null?void 0:A.backdrop),ownerState:U}),Ee=$(r==null?void 0:r.ref,ee.ref);return!S&&!F&&(!Z||Q)?null:I.jsx(we,{ref:pe,container:v,disablePortal:P,children:I.jsxs(he,{...be,children:[!m&&s?I.jsx(ge,{...ee,ref:Ee}):null,I.jsx(Xe,{disableEnforceFocus:M,disableAutoFocus:p,disableRestoreFocus:k,isEnabled:me,open:F,children:c.cloneElement(g,W)})]})})}),ht=ot;export{De as B,Ne as F,ht as M,we as P,ke as g};
