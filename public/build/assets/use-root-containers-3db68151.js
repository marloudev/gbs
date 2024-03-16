import{r as l,R as v,o as N}from"./app-73e956c4.js";import{h as A,T as H,o as F,f as y,s as T}from"./keyboard-4d9875ee.js";import{s as h,o as m,d as S,U as $,y as C,T as k,e as P,b as I,l as w,C as R}from"./use-flags-22cb74dc.js";function B(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function D(){return/Android/gi.test(window.navigator.userAgent)}function U(){return B()||D()}function p(e,r,u){let n=h(r);l.useEffect(()=>{function o(i){n.current(i)}return document.addEventListener(e,o,u),()=>document.removeEventListener(e,o,u)},[e,u])}function M(e,r,u){let n=h(r);l.useEffect(()=>{function o(i){n.current(i)}return window.addEventListener(e,o,u),()=>window.removeEventListener(e,o,u)},[e,u])}function Z(e,r,u=!0){let n=l.useRef(!1);l.useEffect(()=>{requestAnimationFrame(()=>{n.current=u})},[u]);function o(t,a){if(!n.current||t.defaultPrevented)return;let c=a(t);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let d=function f(s){return typeof s=="function"?f(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let f of d){if(f===null)continue;let s=f instanceof HTMLElement?f:f.current;if(s!=null&&s.contains(c)||t.composed&&t.composedPath().includes(s))return}return!A(c,H.Loose)&&c.tabIndex!==-1&&t.preventDefault(),r(t,c)}let i=l.useRef(null);p("pointerdown",t=>{var a,c;n.current&&(i.current=((c=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:c[0])||t.target)},!0),p("mousedown",t=>{var a,c;n.current&&(i.current=((c=(a=t.composedPath)==null?void 0:a.call(t))==null?void 0:c[0])||t.target)},!0),p("click",t=>{U()||i.current&&(o(t,()=>i.current),i.current=null)},!0),p("touchend",t=>o(t,()=>t.target instanceof HTMLElement?t.target:null),!0),M("blur",t=>o(t,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function g(...e){return l.useMemo(()=>F(...e),[...e])}function ee(e,r,u,n){let o=h(u);l.useEffect(()=>{e=e??window;function i(t){o.current(t)}return e.addEventListener(r,i,n),()=>e.removeEventListener(r,i,n)},[e,r,n])}function j(e){let r=m(e),u=l.useRef(!1);l.useEffect(()=>(u.current=!1,()=>{u.current=!0,S(()=>{u.current&&r()})}),[r])}var q=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(q||{});function te(){let e=l.useRef(0);return M("keydown",r=>{r.key==="Tab"&&(e.current=r.shiftKey?1:0)},!0),e}let b=l.createContext(!1);function G(){return l.useContext(b)}function ne(e){return v.createElement(b.Provider,{value:e.force},e.children)}function O(e){let r=G(),u=l.useContext(x),n=g(e),[o,i]=l.useState(()=>{if(!r&&u!==null||P.isServer)return null;let t=n==null?void 0:n.getElementById("headlessui-portal-root");if(t)return t;if(n===null)return null;let a=n.createElement("div");return a.setAttribute("id","headlessui-portal-root"),n.body.appendChild(a)});return l.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),l.useEffect(()=>{r||u!==null&&i(u.current)},[u,i,r]),o}let K=l.Fragment;function _(e,r){let u=e,n=l.useRef(null),o=C(k(f=>{n.current=f}),r),i=g(n),t=O(n),[a]=l.useState(()=>{var f;return P.isServer?null:(f=i==null?void 0:i.createElement("div"))!=null?f:null}),c=l.useContext(E),d=I();return w(()=>{!t||!a||t.contains(a)||(a.setAttribute("data-headlessui-portal",""),t.appendChild(a))},[t,a]),w(()=>{if(a&&c)return c.register(a)},[c,a]),j(()=>{var f;!t||!a||(a instanceof Node&&t.contains(a)&&t.removeChild(a),t.childNodes.length<=0&&((f=t.parentElement)==null||f.removeChild(t)))}),d?!t||!a?null:N.createPortal(R({ourProps:{ref:o},theirProps:u,defaultTag:K,name:"Portal"}),a):null}let z=l.Fragment,x=l.createContext(null);function J(e,r){let{target:u,...n}=e,o={ref:C(r)};return v.createElement(x.Provider,{value:u},R({ourProps:o,theirProps:n,defaultTag:z,name:"Popover.Group"}))}let E=l.createContext(null);function re(){let e=l.useContext(E),r=l.useRef([]),u=m(i=>(r.current.push(i),e&&e.register(i),()=>n(i))),n=m(i=>{let t=r.current.indexOf(i);t!==-1&&r.current.splice(t,1),e&&e.unregister(i)}),o=l.useMemo(()=>({register:u,unregister:n,portals:r}),[u,n,r]);return[r,l.useMemo(()=>function({children:i}){return v.createElement(E.Provider,{value:o},i)},[o])]}let Q=$(_),V=$(J),ue=Object.assign(Q,{Group:V});function oe({defaultContainers:e=[],portals:r,mainTreeNodeRef:u}={}){var n;let o=l.useRef((n=u==null?void 0:u.current)!=null?n:null),i=g(o),t=m(()=>{var a,c,d;let f=[];for(let s of e)s!==null&&(s instanceof HTMLElement?f.push(s):"current"in s&&s.current instanceof HTMLElement&&f.push(s.current));if(r!=null&&r.current)for(let s of r.current)f.push(s);for(let s of(a=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?a:[])s!==document.body&&s!==document.head&&s instanceof HTMLElement&&s.id!=="headlessui-portal-root"&&(s.contains(o.current)||s.contains((d=(c=o.current)==null?void 0:c.getRootNode())==null?void 0:d.host)||f.some(L=>s.contains(L))||f.push(s));return f});return{resolveContainers:t,contains:m(a=>t().some(c=>c.contains(a))),mainTreeNodeRef:o,MainTreeNode:l.useMemo(()=>function(){return u!=null?null:v.createElement(y,{features:T.Hidden,ref:o})},[o,u])}}function le(){let e=l.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:l.useMemo(()=>function(){return v.createElement(y,{features:T.Hidden,ref:e})},[e])}}export{ee as E,oe as N,te as a,ue as b,j as c,le as d,re as e,ne as l,g as n,q as s,B as t,Z as y};
