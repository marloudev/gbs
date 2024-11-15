import{r as g,j as O}from"./app-05ddd05a.js";import{u as q}from"./useTheme-04e79c76.js";import{T as A,r as D,g as C}from"./utils-2674f20f.js";import{a as G}from"./TransitionGroupContext-91378426.js";import{g as J}from"./getReactElementRef-c11325f7.js";import{o as v}from"./ownerWindow-03d1c82d.js";import{d as K}from"./debounce-517eeb3c.js";function M(o,s,d){const e=s.getBoundingClientRect(),n=d&&d.getBoundingClientRect(),E=v(s);let f;if(s.fakeTransform)f=s.fakeTransform;else{const i=E.getComputedStyle(s);f=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let u=0,l=0;if(f&&f!=="none"&&typeof f=="string"){const i=f.split("(")[1].split(")")[0].split(",");u=parseInt(i[4],10),l=parseInt(i[5],10)}return o==="left"?n?`translateX(${n.right+u-e.left}px)`:`translateX(${E.innerWidth+u-e.left}px)`:o==="right"?n?`translateX(-${e.right-n.left-u}px)`:`translateX(-${e.left+e.width-u}px)`:o==="up"?n?`translateY(${n.bottom+l-e.top}px)`:`translateY(${E.innerHeight+l-e.top}px)`:n?`translateY(-${e.top-n.top+e.height-l}px)`:`translateY(-${e.top+e.height-l}px)`}function N(o){return typeof o=="function"?o():o}function h(o,s,d){const e=N(d),n=M(o,s,e);n&&(s.style.webkitTransform=n,s.style.transform=n)}const Q=g.forwardRef(function(s,d){const e=q(),n={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},E={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:f,appear:u=!0,children:l,container:i,direction:c="down",easing:w=n,in:m,onEnter:T,onEntered:L,onEntering:R,onExit:b,onExited:k,onExiting:P,style:x,timeout:y=E,TransitionComponent:V=A,...X}=s,a=g.useRef(null),Y=G(J(l),a,d),p=t=>r=>{t&&(r===void 0?t(a.current):t(a.current,r))},z=p((t,r)=>{h(c,t,i),D(t),T&&T(t,r)}),W=p((t,r)=>{const S=C({timeout:y,style:x,easing:w},{mode:"enter"});t.style.webkitTransition=e.transitions.create("-webkit-transform",{...S}),t.style.transition=e.transitions.create("transform",{...S}),t.style.webkitTransform="none",t.style.transform="none",R&&R(t,r)}),j=p(L),B=p(P),I=p(t=>{const r=C({timeout:y,style:x,easing:w},{mode:"exit"});t.style.webkitTransition=e.transitions.create("-webkit-transform",r),t.style.transition=e.transitions.create("transform",r),h(c,t,i),b&&b(t)}),F=p(t=>{t.style.webkitTransition="",t.style.transition="",k&&k(t)}),H=t=>{f&&f(a.current,t)},$=g.useCallback(()=>{a.current&&h(c,a.current,i)},[c,i]);return g.useEffect(()=>{if(m||c==="down"||c==="right")return;const t=K(()=>{a.current&&h(c,a.current,i)}),r=v(a.current);return r.addEventListener("resize",t),()=>{t.clear(),r.removeEventListener("resize",t)}},[c,m,i]),g.useEffect(()=>{m||$()},[m,$]),O.jsx(V,{nodeRef:a,onEnter:z,onEntered:j,onEntering:W,onExit:I,onExited:F,onExiting:B,addEndListener:H,appear:u,in:m,timeout:y,...X,children:(t,r)=>g.cloneElement(l,{ref:Y,style:{visibility:t==="exited"&&!m?"hidden":void 0,...x,...l.props.style},...r})})}),it=Q;export{it as S};