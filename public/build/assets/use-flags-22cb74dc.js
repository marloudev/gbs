import{r as s,R,n as E}from"./app-73e956c4.js";var C=Object.defineProperty,$=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>($(e,typeof t!="symbol"?t+"":t,n),n);let A=class{constructor(){b(this,"current",this.detect()),b(this,"handoffState","pending"),b(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},y=new A,w=(e,t)=>{y.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function x(e){let t=s.useRef(e);return w(()=>{t.current=e},[e]),t}let P=function(e){let t=x(e);return R.useCallback((...n)=>t.current(...n),[t])};function q(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function F(){let e=[],t={addEventListener(n,r,a,u){return n.addEventListener(r,a,u),t.add(()=>n.removeEventListener(r,a,u))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return q(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,a){let u=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:a}),this.add(()=>{Object.assign(n.style,{[r]:u})})},group(n){let r=F();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let a of e.splice(r,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}function W(){let[e]=s.useState(F);return s.useEffect(()=>()=>e.dispose(),[e]),e}function H(){let e=typeof document>"u";return"useSyncExternalStore"in E?(t=>t.useSyncExternalStore)(E)(()=>()=>{},()=>!1,()=>!e):!1}function Y(){let e=H(),[t,n]=s.useState(y.isHandoffComplete);return t&&y.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>y.handoff(),[]),e?!1:t}function k(e,t,...n){if(e in t){let a=t[e];return typeof a=="function"?a(...n):a}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,k),r}let N=Symbol();function z(e,t=!0){return Object.assign(e,{[N]:t})}function D(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=P(r=>{for(let a of t.current)a!=null&&(typeof a=="function"?a(r):a.current=r)});return e.every(r=>r==null||(r==null?void 0:r[N]))?void 0:n}function S(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var I=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(I||{}),L=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(L||{});function G({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:a,visible:u=!0,name:l,mergeRefs:i}){i=i??M;let o=T(t,e);if(u)return g(o,n,r,l,i);let f=a??0;if(f&2){let{static:c=!1,...p}=o;if(c)return g(p,n,r,l,i)}if(f&1){let{unmount:c=!0,...p}=o;return k(c?0:1,{0(){return null},1(){return g({...p,hidden:!0,style:{display:"none"}},n,r,l,i)}})}return g(o,n,r,l,i)}function g(e,t={},n,r,a){let{as:u=n,children:l,refName:i="ref",...o}=j(e,["unmount","static"]),f=e.ref!==void 0?{[i]:e.ref}:{},c=typeof l=="function"?l(t):l;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let p={};if(t){let d=!1,h=[];for(let[v,m]of Object.entries(t))typeof m=="boolean"&&(d=!0),m===!0&&h.push(v);d&&(p["data-headlessui-state"]=h.join(" "))}if(u===s.Fragment&&Object.keys(O(o)).length>0){if(!s.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let d=c.props,h=typeof(d==null?void 0:d.className)=="function"?(...m)=>S(d==null?void 0:d.className(...m),o.className):S(d==null?void 0:d.className,o.className),v=h?{className:h}:{};return s.cloneElement(c,Object.assign({},T(c.props,O(j(o,["ref"]))),p,f,{ref:a(c.ref,f.ref)},v))}return s.createElement(u,Object.assign({},j(o,["ref"]),u!==s.Fragment&&f,u!==s.Fragment&&p),c)}function J(){let e=s.useRef([]),t=s.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function M(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function T(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let a in r)a.startsWith("on")&&typeof r[a]=="function"?(n[a]!=null||(n[a]=[]),n[a].push(r[a])):t[a]=r[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](a,...u){let l=n[r];for(let i of l){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;i(a,...u)}}});return t}function K(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function O(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function j(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function U(){let e=s.useRef(!1);return w(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Q(e=0){let[t,n]=s.useState(e),r=U(),a=s.useCallback(o=>{r.current&&n(f=>f|o)},[t,r]),u=s.useCallback(o=>!!(t&o),[t]),l=s.useCallback(o=>{r.current&&n(f=>f&~o)},[n,r]),i=s.useCallback(o=>{r.current&&n(f=>f^o)},[n]);return{flags:t,addFlag:a,hasFlag:u,removeFlag:l,toggleFlag:i}}export{G as C,J as I,I as O,z as T,K as U,F as a,Y as b,Q as c,q as d,y as e,U as f,w as l,P as o,W as p,x as s,S as t,k as u,L as v,O as x,D as y};
