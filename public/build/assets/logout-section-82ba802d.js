import{r as c,l as m,m as x,j as r,d as Q}from"./app-7ce828bf.js";import{c as u}from"./clsx-0839fdbe.js";import{g as f,a as h,s as p,m as B,c as C,r as Z}from"./memoTheme-9e5d36f9.js";import{u as _}from"./useTheme-ac50545c.js";import{B as oo,M as to,F as eo}from"./Modal-4b1961da.js";import{P as A}from"./Paper-e874bdf8.js";import{u as so}from"./useId-7d67d4e7.js";import{T as N}from"./Typography-e68b8b27.js";import{B as P}from"./Button-ead979ed.js";import{S as ro}from"./Slide-c765a1a8.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./TransitionGroupContext-3cc3afcd.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-686b7842.js";import"./utils-7875b360.js";import"./getReactElementRef-d2957806.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-ce4a96ac.js";import"./isFocusVisible-e8076040.js";import"./debounce-517eeb3c.js";function ao(t){return f("MuiDialog",t)}const io=h("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=io,no=c.createContext({}),U=no,lo=p(oo,{name:"MuiDialog",slot:"Backdrop",overrides:(t,o)=>o.backdrop})({zIndex:-1}),co=t=>{const{classes:o,scroll:e,maxWidth:s,fullWidth:l,fullScreen:i}=t,n={root:["root"],container:["container",`scroll${m(e)}`],paper:["paper",`paperScroll${m(e)}`,`paperWidth${m(String(s))}`,l&&"paperFullWidth",i&&"paperFullScreen"]};return C(n,ao,o)},po=p(to,{name:"MuiDialog",slot:"Root",overridesResolver:(t,o)=>o.root})({"@media print":{position:"absolute !important"}}),uo=p("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.container,o[`scroll${m(e.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),go=p(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`scrollPaper${m(e.scroll)}`],o[`paperWidth${m(String(e.maxWidth))}`],e.fullWidth&&o.paperFullWidth,e.fullScreen&&o.paperFullScreen]}})(B(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:o})=>!o.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(o=>o!=="xs").map(o=>({props:{maxWidth:o},style:{maxWidth:`${t.breakpoints.values[o]}${t.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[o]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:o})=>o.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:o})=>o.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),mo=c.forwardRef(function(o,e){const s=x({props:o,name:"MuiDialog"}),l=_(),i={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":a,"aria-modal":d=!0,BackdropComponent:v,BackdropProps:F,children:I,className:L,disableEscapeKeyDown:M=!1,fullScreen:E=!1,fullWidth:O=!1,maxWidth:Y="sm",onBackdropClick:T,onClick:$,onClose:y,open:R,PaperComponent:X=A,PaperProps:W={},scroll:z="paper",TransitionComponent:G=eo,transitionDuration:j=i,TransitionProps:H,...K}=s,D={...s,disableEscapeKeyDown:M,fullScreen:E,fullWidth:O,maxWidth:Y,scroll:z},b=co(D),S=c.useRef(),V=g=>{S.current=g.target===g.currentTarget},q=g=>{$&&$(g),S.current&&(S.current=null,T&&T(g),y&&y(g,"backdropClick"))},w=so(a),J=c.useMemo(()=>({titleId:w}),[w]);return r.jsx(po,{className:u(b.root,L),closeAfterTransition:!0,components:{Backdrop:lo},componentsProps:{backdrop:{transitionDuration:j,as:v,...F}},disableEscapeKeyDown:M,onClose:y,open:R,ref:e,onClick:q,ownerState:D,...K,children:r.jsx(G,{appear:!0,in:R,timeout:j,role:"presentation",...H,children:r.jsx(uo,{className:u(b.container),onMouseDown:V,ownerState:D,children:r.jsx(go,{as:X,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":w,"aria-modal":d,...W,className:u(b.paper,W.className),ownerState:D,children:r.jsx(U.Provider,{value:J,children:I})})})})})}),xo=mo;function fo(t){return f("MuiDialogActions",t)}h("MuiDialogActions",["root","spacing"]);const ho=t=>{const{classes:o,disableSpacing:e}=t;return C({root:["root",!e&&"spacing"]},fo,o)},Co=p("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Do=c.forwardRef(function(o,e){const s=x({props:o,name:"MuiDialogActions"}),{className:l,disableSpacing:i=!1,...n}=s,a={...s,disableSpacing:i},d=ho(a);return r.jsx(Co,{className:u(d.root,l),ownerState:a,ref:e,...n})}),vo=Do;function yo(t){return f("MuiDialogContent",t)}h("MuiDialogContent",["root","dividers"]);function bo(t){return f("MuiDialogTitle",t)}const So=h("MuiDialogTitle",["root"]),wo=So,ko=t=>{const{classes:o,dividers:e}=t;return C({root:["root",e&&"dividers"]},yo,o)},Mo=p("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.dividers&&o.dividers]}})(B(({theme:t})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:o})=>o.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:o})=>!o.dividers,style:{[`.${wo.root} + &`]:{paddingTop:0}}}]}))),To=c.forwardRef(function(o,e){const s=x({props:o,name:"MuiDialogContent"}),{className:l,dividers:i=!1,...n}=s,a={...s,dividers:i},d=ko(a);return r.jsx(Mo,{className:u(d.root,l),ownerState:a,ref:e,...n})}),$o=To;function Ro(t){return f("MuiDialogContentText",t)}h("MuiDialogContentText",["root"]);const Wo=t=>{const{classes:o}=t,s=C({root:["root"]},Ro,o);return{...o,...s}},jo=p(N,{shouldForwardProp:t=>Z(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,o)=>o.root})({}),Po=c.forwardRef(function(o,e){const s=x({props:o,name:"MuiDialogContentText"}),{children:l,className:i,...n}=s,a=Wo(n);return r.jsx(jo,{component:"p",variant:"body1",color:"textSecondary",ref:e,ownerState:n,className:u(a.root,i),...s,classes:a})}),Bo=Po,Ao=t=>{const{classes:o}=t;return C({root:["root"]},bo,o)},No=p(N,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Uo=c.forwardRef(function(o,e){const s=x({props:o,name:"MuiDialogTitle"}),{className:l,id:i,...n}=s,a=s,d=Ao(a),{titleId:v=i}=c.useContext(U);return r.jsx(No,{component:"h2",className:u(d.root,l),ownerState:a,ref:e,variant:"h6",id:i??v,...n})}),Fo=Uo,Io=c.forwardRef(function(o,e){return r.jsx(ro,{direction:"up",ref:e,...o})});function it({open:t,setOpen:o}){const e=()=>{o(!1)};return r.jsx(c.Fragment,{children:r.jsxs(xo,{open:t,TransitionComponent:Io,keepMounted:!0,onClose:e,"aria-describedby":"alert-dialog-slide-description",children:[r.jsx(Fo,{children:"GBS Mini Mart Cashiering System"}),r.jsx($o,{children:r.jsx(Bo,{id:"alert-dialog-slide-description",children:"Are you sure want to logout?"})}),r.jsxs(vo,{children:[r.jsx(P,{onClick:e,children:"Cancel"}),r.jsx(Q,{method:"post",href:route("logout"),children:r.jsx(P,{variant:"contained",children:"LOGOUT"})})]})]})})}export{it as default};
