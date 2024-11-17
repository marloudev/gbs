var Se=Object.defineProperty;var we=(n,e,t)=>e in n?Se(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var se=(n,e,t)=>(we(n,typeof e!="symbol"?e+"":e,t),t);import{r as l,R as H,j as N,V as Q,m as ue}from"./app-7ce828bf.js";import{c as x}from"./clsx-0839fdbe.js";import{_ as De,a as ce,s as Z,g as $e,c as Le}from"./memoTheme-9e5d36f9.js";import{_ as je,d as ke,T as re,e as Ne,c as ve,a as ae,b as _}from"./TransitionGroupContext-3cc3afcd.js";import{i as le}from"./isFocusVisible-e8076040.js";function Fe(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ee(n,e){var t=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){a[o.key]=t(o)}),a}function Ie(n,e){n=n||{},e=e||{};function t(f){return f in e?e[f]:n[f]}var a=Object.create(null),o=[];for(var i in n)i in e?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var d=a[u][s];p[a[u][s]]=t(d)}p[u]=t(u)}for(s=0;s<o.length;s++)p[o[s]]=t(o[s]);return p}function k(n,e,t){return t[e]!=null?t[e]:n.props[e]}function Ue(n,e){return ee(n.children,function(t){return l.cloneElement(t,{onExited:e.bind(null,t),in:!0,appear:k(t,"appear",n),enter:k(t,"enter",n),exit:k(t,"exit",n)})})}function ze(n,e,t){var a=ee(n.children),o=Ie(e,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in e,u=i in a,d=e[i],f=l.isValidElement(d)&&!d.props.in;u&&(!p||f)?o[i]=l.cloneElement(s,{onExited:t.bind(null,s),in:!0,exit:k(s,"exit",n),enter:k(s,"enter",n)}):!u&&p&&!f?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(d)&&(o[i]=l.cloneElement(s,{onExited:t.bind(null,s),in:d.props.in,exit:k(s,"exit",n),enter:k(s,"enter",n)}))}}),o}var Oe=Object.values||function(n){return Object.keys(n).map(function(e){return n[e]})},Xe={component:"div",childFactory:function(e){return e}},te=function(n){je(e,n);function e(a,o){var i;i=n.call(this,a,o)||this;var s=i.handleExited.bind(Fe(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Ue(o,p):ze(o,s,p),firstRender:!1}},t.handleExited=function(o,i){var s=ee(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=De({},p.children);return delete u[o.key],{children:u}}))},t.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=ke(o,["component","childFactory"]),u=this.state.contextValue,d=Oe(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?H.createElement(re.Provider,{value:u},d):H.createElement(re.Provider,{value:u},H.createElement(i,p,d))},e}(H.Component);te.propTypes={};te.defaultProps=Xe;const Ye=te;class G{constructor(){se(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=Ne(G.create).current,[t,a]=l.useState(!1);return e.shouldMount=t,e.setShouldMount=a,l.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=Ke(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.start(...e)})}stop(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.stop(...e)})}pulsate(...e){this.mount().then(()=>{var t;return(t=this.ref.current)==null?void 0:t.pulsate(...e)})}}function Ae(){return G.use()}function Ke(){let n,e;const t=new Promise((a,o)=>{n=a,e=o});return t.resolve=n,t.reject=e,t}function We(n){const{className:e,classes:t,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:d}=n,[f,M]=l.useState(!1),g=x(e,t.ripple,t.rippleVisible,a&&t.ripplePulsate),B={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},h=x(t.child,f&&t.childLeaving,a&&t.childPulsate);return!p&&!f&&M(!0),l.useEffect(()=>{if(!p&&u!=null){const D=setTimeout(u,d);return()=>{clearTimeout(D)}}},[u,p,d]),N.jsx("span",{className:g,style:B,children:N.jsx("span",{className:h})})}const He=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=He,J=550,_e=80,Ge=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,qe=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Je=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qe=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ze=Z(We,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ge};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${qe};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Je};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,et=l.forwardRef(function(e,t){const a=ue({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,d]=l.useState([]),f=l.useRef(0),M=l.useRef(null);l.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=l.useRef(!1),B=ve(),h=l.useRef(null),D=l.useRef(null),y=l.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:I,rippleSize:$,cb:U}=c;d(E=>[...E,N.jsx(Ze,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:I,rippleSize:$},f.current)]),f.current+=1,M.current=U},[i]),v=l.useCallback((c={},R={},b=()=>{})=>{const{pulsate:I=!1,center:$=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const E=U?null:D.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,w;if($||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(V.width/2),C=Math.round(V.height/2);else{const{clientX:z,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-V.left),C=Math.round(L-V.top)}if($)w=Math.sqrt((2*V.width**2+V.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;w=Math.sqrt(z**2+L**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{y({pulsate:I,rippleX:S,rippleY:C,rippleSize:w,cb:b})},B.start(_e,()=>{h.current&&(h.current(),h.current=null)})):y({pulsate:I,rippleX:S,rippleY:C,rippleSize:w,cb:b})},[o,y,B]),A=l.useCallback(()=>{v({},{pulsate:!0})},[v]),F=l.useCallback((c,R)=>{if(B.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,B.start(0,()=>{F(c,R)});return}h.current=null,d(b=>b.length>0?b.slice(1):b),M.current=R},[B]);return l.useImperativeHandle(t,()=>({pulsate:A,start:v,stop:F}),[A,v,F]),N.jsx(Qe,{className:x(m.root,i.root,s),ref:D,...p,children:N.jsx(Ye,{component:null,exit:!0,children:u})})}),tt=et;function nt(n){return $e("MuiButtonBase",n)}const ot=ce("MuiButtonBase",["root","disabled","focusVisible"]),it=ot,st=n=>{const{disabled:e,focusVisible:t,focusVisibleClassName:a,classes:o}=n,s=Le({root:["root",e&&"disabled",t&&"focusVisible"]},nt,o);return t&&a&&(s.root+=` ${a}`),s},rt=Z("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${it.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),at=l.forwardRef(function(e,t){const a=ue({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:d=!1,disableRipple:f=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:B,LinkComponent:h="a",onBlur:D,onClick:y,onContextMenu:v,onDragLeave:A,onFocus:F,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:I,onMouseLeave:$,onMouseUp:U,onTouchEnd:E,onTouchMove:V,onTouchStart:S,tabIndex:C=0,TouchRippleProps:w,touchRippleRef:z,type:L,...O}=a,X=l.useRef(null),T=Ae(),pe=ae(T.ref,z),[j,K]=l.useState(!1);d&&j&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),X.current.focus()}}),[]);const de=T.shouldMount&&!f&&!d;l.useEffect(()=>{j&&g&&!f&&T.pulsate()},[f,g,j,T]);function P(r,oe,Ve=M){return _(ie=>(oe&&oe(ie),Ve||T[r](ie),!0))}const fe=P("start",I),he=P("stop",v),me=P("stop",A),ge=P("stop",U),be=P("stop",r=>{j&&r.preventDefault(),$&&$(r)}),Me=P("start",S),Re=P("stop",E),Ee=P("stop",V),xe=P("stop",r=>{le(r.target)||K(!1),D&&D(r)},!1),ye=_(r=>{X.current||(X.current=r.currentTarget),le(r.target)&&(K(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=X.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ce=_(r=>{g&&!r.repeat&&j&&r.key===" "&&T.stop(r,()=>{T.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),R&&R(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!d&&(r.preventDefault(),y&&y(r))}),Te=_(r=>{g&&r.key===" "&&j&&!r.defaultPrevented&&T.stop(r,()=>{T.pulsate(r)}),b&&b(r),y&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&y(r)});let W=u;W==="button"&&(O.href||O.to)&&(W=h);const Y={};W==="button"?(Y.type=L===void 0?"button":L,Y.disabled=d):(!O.href&&!O.to&&(Y.role="button"),d&&(Y["aria-disabled"]=d));const Pe=ae(t,X),ne={...a,centerRipple:i,component:u,disabled:d,disableRipple:f,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:j},Be=st(ne);return N.jsxs(rt,{as:W,className:x(Be.root,p),ownerState:ne,onBlur:xe,onClick:y,onContextMenu:he,onFocus:ye,onKeyDown:Ce,onKeyUp:Te,onMouseDown:fe,onMouseLeave:be,onMouseUp:ge,onDragLeave:me,onTouchEnd:Re,onTouchMove:Ee,onTouchStart:Me,ref:Pe,tabIndex:d?-1:C,type:L,...Y,...O,children:[s,de?N.jsx(tt,{ref:pe,center:i,...w}):null]})}),mt=at;export{mt as B};
