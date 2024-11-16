import{k as $t,r as c,l as pt,j as u,t as jt,a as te,u as ee,ag as _}from"./app-f825970e.js";import{P as ct}from"./index-a1811ec0.js";import{u as zt}from"./useTheme-bba71903.js";import{B as oe}from"./Box-ac6d3dec.js";import{A as re}from"./AppBar-0e60f904.js";import"./react-is.production.min-a192e302.js";import{c as W}from"./clsx-0839fdbe.js";import{a as bt,g as ft,s as N,m as ht,c as mt}from"./createSimplePaletteValueFilter-54621e7a.js";import{u as le,b as dt}from"./TransitionGroupContext-869efa20.js";import{d as At}from"./debounce-517eeb3c.js";import{o as Lt}from"./ownerWindow-03d1c82d.js";import{u as ot}from"./useSlotProps-d61808db.js";import{c as Nt}from"./createSvgIcon-ccfd654c.js";import{B as Dt}from"./ButtonBase-a4f006d0.js";import{o as ne}from"./ownerDocument-613eb639.js";import"./Paper-7c842704.js";import"./resolveComponentProps-3112ecbb.js";import"./isFocusVisible-e8076040.js";function se(e){return ft("MuiTab",e)}const ae=bt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),g=ae,ie=e=>{const{classes:t,textColor:l,fullWidth:s,wrapped:n,icon:d,label:f,selected:h,disabled:b}=e,S={root:["root",d&&f&&"labelIcon",`textColor${$t(l)}`,s&&"fullWidth",n&&"wrapped",h&&"selected",b&&"disabled"],icon:["iconWrapper","icon"]};return mt(S,se,t)},ce=N(Dt,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.label&&l.icon&&t.labelIcon,t[`textColor${$t(l.textColor)}`],l.fullWidth&&t.fullWidth,l.wrapped&&t.wrapped,{[`& .${g.iconWrapper}`]:t.iconWrapper},{[`& .${g.icon}`]:t.icon}]}})(ht(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:l})=>t.icon&&t.label&&l==="top",style:{[`& > .${g.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:l})=>t.icon&&t.label&&l==="bottom",style:{[`& > .${g.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:l})=>t.icon&&t.label&&l==="start",style:{[`& > .${g.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:t,iconPosition:l})=>t.icon&&t.label&&l==="end",style:{[`& > .${g.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${g.selected}`]:{opacity:1},[`&.${g.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${g.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${g.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${g.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),de=c.forwardRef(function(t,l){const s=pt({props:t,name:"MuiTab"}),{className:n,disabled:d=!1,disableFocusRipple:f=!1,fullWidth:h,icon:b,iconPosition:S="top",indicator:v,label:x,onChange:m,onClick:B,onFocus:P,selected:C,selectionFollowsFocus:y,textColor:D="inherit",value:E,wrapped:rt=!1,...F}=s,O={...s,disabled:d,disableFocusRipple:f,selected:C,icon:!!b,iconPosition:S,label:!!x,fullWidth:h,textColor:D,wrapped:rt},H=ie(O),$=b&&x&&c.isValidElement(b)?c.cloneElement(b,{className:W(H.icon,b.props.className)}):b,q=M=>{!C&&m&&m(M,E),B&&B(M)},X=M=>{y&&!C&&m&&m(M,E),P&&P(M)};return u.jsxs(ce,{focusRipple:!f,className:W(H.root,n),ref:l,role:"tab","aria-selected":C,disabled:d,onClick:q,onFocus:X,ownerState:O,tabIndex:C?0:-1,...F,children:[S==="top"||S==="start"?u.jsxs(c.Fragment,{children:[$,x]}):u.jsxs(c.Fragment,{children:[x,$]}),v]})}),tt=de,ue=Nt(u.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),pe=Nt(u.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function be(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function fe(e,t,l,s={},n=()=>{}){const{ease:d=be,duration:f=300}=s;let h=null;const b=t[e];let S=!1;const v=()=>{S=!0},x=m=>{if(S){n(new Error("Animation cancelled"));return}h===null&&(h=m);const B=Math.min(1,(m-h)/f);if(t[e]=d(B)*(l-b)+b,B>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(x)};return b===l?(n(new Error("Element already at target position")),v):(requestAnimationFrame(x),v)}const he={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function me(e){const{onChange:t,...l}=e,s=c.useRef(),n=c.useRef(null),d=()=>{s.current=n.current.offsetHeight-n.current.clientHeight};return le(()=>{const f=At(()=>{const b=s.current;d(),b!==s.current&&t(s.current)}),h=Lt(n.current);return h.addEventListener("resize",f),()=>{f.clear(),h.removeEventListener("resize",f)}},[t]),c.useEffect(()=>{d(),t(s.current)},[t]),u.jsx("div",{style:he,ref:n,...l})}function Se(e){return ft("MuiTabScrollButton",e)}const ve=bt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),xe=ve,ye=e=>{const{classes:t,orientation:l,disabled:s}=e;return mt({root:["root",l,s&&"disabled"]},Se,t)},ge=N(Dt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.orientation&&t[l.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${xe.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),we=c.forwardRef(function(t,l){const s=pt({props:t,name:"MuiTabScrollButton"}),{className:n,slots:d={},slotProps:f={},direction:h,orientation:b,disabled:S,...v}=s,x=jt(),m={isRtl:x,...s},B=ye(m),P=d.StartScrollButtonIcon??ue,C=d.EndScrollButtonIcon??pe,y=ot({elementType:P,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m}),D=ot({elementType:C,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m});return u.jsx(ge,{component:"div",className:W(B.root,n),ref:l,role:null,ownerState:m,tabIndex:null,...v,style:{...v.style,...b==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${x?-90:90}deg)`}},children:h==="left"?u.jsx(P,{...y}):u.jsx(C,{...D})})}),Be=we;function Ce(e){return ft("MuiTabs",e)}const Te=bt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ut=Te,kt=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Wt=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,et=(e,t,l)=>{let s=!1,n=l(e,t);for(;n;){if(n===e.firstChild){if(s)return;s=!0}const d=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||d)n=l(e,n);else{n.focus();return}}},Ie=e=>{const{vertical:t,fixed:l,hideScrollbar:s,scrollableX:n,scrollableY:d,centered:f,scrollButtonsHideMobile:h,classes:b}=e;return mt({root:["root",t&&"vertical"],scroller:["scroller",l&&"fixed",s&&"hideScrollbar",n&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",f&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",h&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Ce,b)},Ee=N("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[{[`& .${ut.scrollButtons}`]:t.scrollButtons},{[`& .${ut.scrollButtons}`]:l.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,l.vertical&&t.vertical]}})(ht(({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${ut.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]}))),Me=N("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.scroller,l.fixed&&t.fixed,l.hideScrollbar&&t.hideScrollbar,l.scrollableX&&t.scrollableX,l.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),Re=N("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.flexContainer,l.vertical&&t.flexContainerVertical,l.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),ke=N("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(ht(({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),We=N(me)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Pt={},Pe=c.forwardRef(function(t,l){const s=pt({props:t,name:"MuiTabs"}),n=zt(),d=jt(),{"aria-label":f,"aria-labelledby":h,action:b,centered:S=!1,children:v,className:x,component:m="div",allowScrollButtonsMobile:B=!1,indicatorColor:P="primary",onChange:C,orientation:y="horizontal",ScrollButtonComponent:D=Be,scrollButtons:E="auto",selectionFollowsFocus:rt,slots:F={},slotProps:O={},TabIndicatorProps:H={},TabScrollButtonProps:$={},textColor:q="primary",value:X,variant:M="standard",visibleScrollbar:lt=!1,...Ft}=s,T=M==="scrollable",w=y==="vertical",U=w?"scrollTop":"scrollLeft",G=w?"top":"left",Q=w?"bottom":"right",nt=w?"clientHeight":"clientWidth",Y=w?"height":"width",j={...s,component:m,allowScrollButtonsMobile:B,indicatorColor:P,orientation:y,vertical:w,scrollButtons:E,textColor:q,variant:M,visibleScrollbar:lt,fixed:!T,hideScrollbar:T&&!lt,scrollableX:T&&!w,scrollableY:T&&w,centered:S&&!T,scrollButtonsHideMobile:!B},k=Ie(j),Ht=ot({elementType:F.StartScrollButtonIcon,externalSlotProps:O.startScrollButtonIcon,ownerState:j}),Xt=ot({elementType:F.EndScrollButtonIcon,externalSlotProps:O.endScrollButtonIcon,ownerState:j}),[St,Ot]=c.useState(!1),[z,vt]=c.useState(Pt),[xt,Ut]=c.useState(!1),[yt,Yt]=c.useState(!1),[gt,Vt]=c.useState(!1),[wt,Kt]=c.useState({overflow:"hidden",scrollbarWidth:0}),Bt=new Map,R=c.useRef(null),A=c.useRef(null),Ct=()=>{const o=R.current;let r;if(o){const a=o.getBoundingClientRect();r={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let i;if(o&&X!==!1){const a=A.current.children;if(a.length>0){const p=a[Bt.get(X)];i=p?p.getBoundingClientRect():null}}return{tabsMeta:r,tabMeta:i}},V=dt(()=>{const{tabsMeta:o,tabMeta:r}=Ct();let i=0,a;w?(a="top",r&&o&&(i=r.top-o.top+o.scrollTop)):(a=d?"right":"left",r&&o&&(i=(d?-1:1)*(r[a]-o[a]+o.scrollLeft)));const p={[a]:i,[Y]:r?r[Y]:0};if(typeof z[a]!="number"||typeof z[Y]!="number")vt(p);else{const I=Math.abs(z[a]-p[a]),L=Math.abs(z[Y]-p[Y]);(I>=1||L>=1)&&vt(p)}}),st=(o,{animation:r=!0}={})=>{r?fe(U,R.current,o,{duration:n.transitions.duration.standard}):R.current[U]=o},Tt=o=>{let r=R.current[U];w?r+=o:r+=o*(d?-1:1),st(r)},It=()=>{const o=R.current[nt];let r=0;const i=Array.from(A.current.children);for(let a=0;a<i.length;a+=1){const p=i[a];if(r+p[nt]>o){a===0&&(r=o);break}r+=p[nt]}return r},qt=()=>{Tt(-1*It())},Gt=()=>{Tt(It())},Qt=c.useCallback(o=>{Kt({overflow:null,scrollbarWidth:o})},[]),Jt=()=>{const o={};o.scrollbarSizeListener=T?u.jsx(We,{onChange:Qt,className:W(k.scrollableX,k.hideScrollbar)}):null;const i=T&&(E==="auto"&&(xt||yt)||E===!0);return o.scrollButtonStart=i?u.jsx(D,{slots:{StartScrollButtonIcon:F.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Ht},orientation:y,direction:d?"right":"left",onClick:qt,disabled:!xt,...$,className:W(k.scrollButtons,$.className)}):null,o.scrollButtonEnd=i?u.jsx(D,{slots:{EndScrollButtonIcon:F.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Xt},orientation:y,direction:d?"left":"right",onClick:Gt,disabled:!yt,...$,className:W(k.scrollButtons,$.className)}):null,o},Et=dt(o=>{const{tabsMeta:r,tabMeta:i}=Ct();if(!(!i||!r)){if(i[G]<r[G]){const a=r[U]+(i[G]-r[G]);st(a,{animation:o})}else if(i[Q]>r[Q]){const a=r[U]+(i[Q]-r[Q]);st(a,{animation:o})}}}),J=dt(()=>{T&&E!==!1&&Vt(!gt)});c.useEffect(()=>{const o=At(()=>{R.current&&V()});let r;const i=I=>{I.forEach(L=>{L.removedNodes.forEach(K=>{r==null||r.unobserve(K)}),L.addedNodes.forEach(K=>{r==null||r.observe(K)})}),o(),J()},a=Lt(R.current);a.addEventListener("resize",o);let p;return typeof ResizeObserver<"u"&&(r=new ResizeObserver(o),Array.from(A.current.children).forEach(I=>{r.observe(I)})),typeof MutationObserver<"u"&&(p=new MutationObserver(i),p.observe(A.current,{childList:!0})),()=>{o.clear(),a.removeEventListener("resize",o),p==null||p.disconnect(),r==null||r.disconnect()}},[V,J]),c.useEffect(()=>{const o=Array.from(A.current.children),r=o.length;if(typeof IntersectionObserver<"u"&&r>0&&T&&E!==!1){const i=o[0],a=o[r-1],p={root:R.current,threshold:.99},I=it=>{Ut(!it[0].isIntersecting)},L=new IntersectionObserver(I,p);L.observe(i);const K=it=>{Yt(!it[0].isIntersecting)},Rt=new IntersectionObserver(K,p);return Rt.observe(a),()=>{L.disconnect(),Rt.disconnect()}}},[T,E,gt,v==null?void 0:v.length]),c.useEffect(()=>{Ot(!0)},[]),c.useEffect(()=>{V()}),c.useEffect(()=>{Et(Pt!==z)},[Et,z]),c.useImperativeHandle(b,()=>({updateIndicator:V,updateScrollButtons:J}),[V,J]);const Mt=u.jsx(ke,{...H,className:W(k.indicator,H.className),ownerState:j,style:{...z,...H.style}});let Z=0;const Zt=c.Children.map(v,o=>{if(!c.isValidElement(o))return null;const r=o.props.value===void 0?Z:o.props.value;Bt.set(r,Z);const i=r===X;return Z+=1,c.cloneElement(o,{fullWidth:M==="fullWidth",indicator:i&&!St&&Mt,selected:i,selectionFollowsFocus:rt,onChange:C,textColor:q,value:r,...Z===1&&X===!1&&!o.props.tabIndex?{tabIndex:0}:{}})}),_t=o=>{const r=A.current,i=ne(r).activeElement;if(i.getAttribute("role")!=="tab")return;let p=y==="horizontal"?"ArrowLeft":"ArrowUp",I=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&d&&(p="ArrowRight",I="ArrowLeft"),o.key){case p:o.preventDefault(),et(r,i,Wt);break;case I:o.preventDefault(),et(r,i,kt);break;case"Home":o.preventDefault(),et(r,null,kt);break;case"End":o.preventDefault(),et(r,null,Wt);break}},at=Jt();return u.jsxs(Ee,{className:W(k.root,x),ownerState:j,ref:l,as:m,...Ft,children:[at.scrollButtonStart,at.scrollbarSizeListener,u.jsxs(Me,{className:k.scroller,ownerState:j,style:{overflow:wt.overflow,[w?`margin${d?"Left":"Right"}`:"marginBottom"]:lt?void 0:-wt.scrollbarWidth},ref:R,children:[u.jsx(Re,{"aria-label":f,"aria-labelledby":h,"aria-orientation":y==="vertical"?"vertical":null,className:k.flexContainer,ownerState:j,onKeyDown:_t,ref:A,role:"tablist",children:Zt}),St&&Mt]}),at.scrollButtonEnd]})}),$e=Pe;ct.node,ct.number.isRequired,ct.number.isRequired;function Ze(){zt();const[e,t]=c.useState(0),l=(n,d)=>{t(d)},s=te();return ee(n=>n.dashboard),u.jsx(oe,{sx:{bgcolor:"background.paper",width:500},className:"my-5",children:u.jsx(re,{position:"static",children:u.jsxs($e,{value:e,onChange:l,indicatorColor:"primary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[u.jsx(tt,{label:"Daily",onClick:()=>s(_("daily"))}),u.jsx(tt,{label:"Weekly",onClick:()=>s(_("weekly"))}),u.jsx(tt,{label:"Monthly",onClick:()=>s(_("monthly"))}),u.jsx(tt,{label:"Quarterly",onClick:()=>s(_("quarterly"))})]})})})}export{Ze as default};
