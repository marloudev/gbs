import{r as a,R as E}from"./app-73e956c4.js";import{u as $,a as Y,f as re,p as te,s as D,l as K,O as pe,U as _,y as ne,v as L,b as le,c as he,o as w,t as Z,C as ie}from"./use-flags-22cb74dc.js";import{s as be,d as R,u as ae}from"./open-closed-740145de.js";function ge(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}function z(r,...e){r&&e.length>0&&r.classList.add(...e)}function G(r,...e){r&&e.length>0&&r.classList.remove(...e)}function Ee(r,e){let t=Y();if(!r)return t.dispose;let{transitionDuration:i,transitionDelay:v}=getComputedStyle(r),[h,m]=[i,v].map(o=>{let[l=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,b)=>b-u);return l}),d=h+m;if(d!==0){t.group(l=>{l.setTimeout(()=>{e(),l.dispose()},d),l.addEventListener(r,"transitionrun",u=>{u.target===u.currentTarget&&l.dispose()})});let o=t.addEventListener(r,"transitionend",l=>{l.target===l.currentTarget&&(e(),o())})}else e();return t.add(()=>e()),t.dispose}function Te(r,e,t,i){let v=t?"enter":"leave",h=Y(),m=i!==void 0?ge(i):()=>{};v==="enter"&&(r.removeAttribute("hidden"),r.style.display="");let d=$(v,{enter:()=>e.enter,leave:()=>e.leave}),o=$(v,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),l=$(v,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return G(r,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),z(r,...e.base,...d,...l),h.nextFrame(()=>{G(r,...e.base,...d,...l),z(r,...e.base,...d,...o),Ee(r,()=>(G(r,...e.base,...d),z(r,...e.base,...e.entered),m()))}),h.dispose}function Fe({immediate:r,container:e,direction:t,classes:i,onStart:v,onStop:h}){let m=re(),d=te(),o=D(t);K(()=>{r&&(o.current="enter")},[r]),K(()=>{let l=Y();d.add(l.dispose);let u=e.current;if(u&&o.current!=="idle"&&m.current)return l.dispose(),v.current(o.current),l.add(Te(u,i.current,o.current==="enter",()=>{l.dispose(),h.current(o.current)})),l.dispose},[t])}function F(r=""){return r.split(/\s+/).filter(e=>e.length>1)}let A=a.createContext(null);A.displayName="TransitionContext";var Re=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Re||{});function $e(){let r=a.useContext(A);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}function we(){let r=a.useContext(q);if(r===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return r}let q=a.createContext(null);q.displayName="NestingContext";function B(r){return"children"in r?B(r.children):r.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function se(r,e){let t=D(r),i=a.useRef([]),v=re(),h=te(),m=w((f,s=L.Hidden)=>{let c=i.current.findIndex(({el:n})=>n===f);c!==-1&&($(s,{[L.Unmount](){i.current.splice(c,1)},[L.Hidden](){i.current[c].state="hidden"}}),h.microTask(()=>{var n;!B(i)&&v.current&&((n=t.current)==null||n.call(t))}))}),d=w(f=>{let s=i.current.find(({el:c})=>c===f);return s?s.state!=="visible"&&(s.state="visible"):i.current.push({el:f,state:"visible"}),()=>m(f,L.Unmount)}),o=a.useRef([]),l=a.useRef(Promise.resolve()),u=a.useRef({enter:[],leave:[],idle:[]}),b=w((f,s,c)=>{o.current.splice(0),e&&(e.chains.current[s]=e.chains.current[s].filter(([n])=>n!==f)),e==null||e.chains.current[s].push([f,new Promise(n=>{o.current.push(n)})]),e==null||e.chains.current[s].push([f,new Promise(n=>{Promise.all(u.current[s].map(([S,N])=>N)).then(()=>n())})]),s==="enter"?l.current=l.current.then(()=>e==null?void 0:e.wait.current).then(()=>c(s)):c(s)}),g=w((f,s,c)=>{Promise.all(u.current[s].splice(0).map(([n,S])=>S)).then(()=>{var n;(n=o.current.shift())==null||n()}).then(()=>c(s))});return a.useMemo(()=>({children:i,register:d,unregister:m,onStart:b,onStop:g,wait:l,chains:u}),[d,m,i,b,g,u,l])}function xe(){}let Ce=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ee(r){var e;let t={};for(let i of Ce)t[i]=(e=r[i])!=null?e:xe;return t}function Le(r){let e=a.useRef(ee(r));return a.useEffect(()=>{e.current=ee(r)},[r]),e}let Se="div",ue=pe.RenderStrategy;function Ne(r,e){var t,i;let{beforeEnter:v,afterEnter:h,beforeLeave:m,afterLeave:d,enter:o,enterFrom:l,enterTo:u,entered:b,leave:g,leaveFrom:f,leaveTo:s,...c}=r,n=a.useRef(null),S=ne(n,e),N=(t=c.unmount)==null||t?L.Unmount:L.Hidden,{show:p,appear:x,initial:J}=$e(),[C,j]=a.useState(p?"visible":"hidden"),W=we(),{register:O,unregister:H}=W;a.useEffect(()=>O(n),[O,n]),a.useEffect(()=>{if(N===L.Hidden&&n.current){if(p&&C!=="visible"){j("visible");return}return $(C,{hidden:()=>H(n),visible:()=>O(n)})}},[C,n,O,H,p,N]);let k=D({base:F(c.className),enter:F(o),enterFrom:F(l),enterTo:F(u),entered:F(b),leave:F(g),leaveFrom:F(f),leaveTo:F(s)}),U=Le({beforeEnter:v,afterEnter:h,beforeLeave:m,afterLeave:d}),I=le();a.useEffect(()=>{if(I&&C==="visible"&&n.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[n,C,I]);let ce=J&&!x,X=x&&p&&J,de=(()=>!I||ce?"idle":p?"enter":"leave")(),y=he(0),fe=w(T=>$(T,{enter:()=>{y.addFlag(R.Opening),U.current.beforeEnter()},leave:()=>{y.addFlag(R.Closing),U.current.beforeLeave()},idle:()=>{}})),ve=w(T=>$(T,{enter:()=>{y.removeFlag(R.Opening),U.current.afterEnter()},leave:()=>{y.removeFlag(R.Closing),U.current.afterLeave()},idle:()=>{}})),M=se(()=>{j("hidden"),H(n)},W),V=a.useRef(!1);Fe({immediate:X,container:n,classes:k,direction:de,onStart:D(T=>{V.current=!0,M.onStart(n,T,fe)}),onStop:D(T=>{V.current=!1,M.onStop(n,T,ve),T==="leave"&&!B(M)&&(j("hidden"),H(n))})});let P=c,me={ref:S};return X?P={...P,className:Z(c.className,...k.current.enter,...k.current.enterFrom)}:V.current&&(P.className=Z(c.className,(i=n.current)==null?void 0:i.className),P.className===""&&delete P.className),E.createElement(q.Provider,{value:M},E.createElement(be,{value:$(C,{visible:R.Open,hidden:R.Closed})|y.flags},ie({ourProps:me,theirProps:P,defaultTag:Se,features:ue,visible:C==="visible",name:"Transition.Child"})))}function Pe(r,e){let{show:t,appear:i=!1,unmount:v=!0,...h}=r,m=a.useRef(null),d=ne(m,e);le();let o=ae();if(t===void 0&&o!==null&&(t=(o&R.Open)===R.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,u]=a.useState(t?"visible":"hidden"),b=se(()=>{u("hidden")}),[g,f]=a.useState(!0),s=a.useRef([t]);K(()=>{g!==!1&&s.current[s.current.length-1]!==t&&(s.current.push(t),f(!1))},[s,t]);let c=a.useMemo(()=>({show:t,appear:i,initial:g}),[t,i,g]);a.useEffect(()=>{if(t)u("visible");else if(!B(b))u("hidden");else{let p=m.current;if(!p)return;let x=p.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&u("hidden")}},[t,b]);let n={unmount:v},S=w(()=>{var p;g&&f(!1),(p=r.beforeEnter)==null||p.call(r)}),N=w(()=>{var p;g&&f(!1),(p=r.beforeLeave)==null||p.call(r)});return E.createElement(q.Provider,{value:b},E.createElement(A.Provider,{value:c},ie({ourProps:{...n,as:a.Fragment,children:E.createElement(oe,{ref:d,...n,...h,beforeEnter:S,beforeLeave:N})},theirProps:{},defaultTag:a.Fragment,features:ue,visible:l==="visible",name:"Transition"})))}function ye(r,e){let t=a.useContext(A)!==null,i=ae()!==null;return E.createElement(E.Fragment,null,!t&&i?E.createElement(Q,{ref:e,...r}):E.createElement(oe,{ref:e,...r}))}let Q=_(Pe),oe=_(Ne),De=_(ye),Me=Object.assign(Q,{Child:De,Root:Q});export{Me as q};
