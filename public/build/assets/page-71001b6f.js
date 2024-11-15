import{r as P,j as s,k as m,l as G,i as A,V as K,as as W,W as ae}from"./app-05ddd05a.js";import{T as q}from"./TextField-9a84bcc6.js";import{c as F}from"./clsx-0839fdbe.js";import{g as M,a as D,s as C,r as Z,c as O,m as E}from"./memoTheme-da397490.js";import{u as oe}from"./InputBase-4c8fcebb.js";import{B as ie}from"./ButtonBase-ec27260f.js";import{u as ne}from"./useControlled-0201a76a.js";import{c as U}from"./createSvgIcon-2cf123f3.js";import{c as I}from"./createSimplePaletteValueFilter-697dba8e.js";import{B as ce}from"./Button-886dd74e.js";import"./useSlot-9a4a0be9.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-91378426.js";import"./Popover-ba701528.js";import"./isHostComponent-73d6e646.js";import"./Modal-ffb00456.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./useTheme-04e79c76.js";import"./utils-2674f20f.js";import"./getReactElementRef-c11325f7.js";import"./Paper-5fa38c0b.js";import"./debounce-517eeb3c.js";import"./Grow-a8bfdecb.js";import"./useId-80eb637d.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-5727c2f2.js";import"./isFocusVisible-e8076040.js";function le(e){return M("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const de=e=>{const{classes:t,checked:a,disabled:i,edge:r}=e,n={root:["root",a&&"checked",i&&"disabled",r&&`edge${m(r)}`],input:["input"]};return O(n,le,t)},pe=C(ie)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:t})=>e==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:t})=>e==="end"&&t.size!=="small",style:{marginRight:-12}}]}),me=C("input",{shouldForwardProp:Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ue=P.forwardRef(function(t,a){const{autoFocus:i,checked:r,checkedIcon:n,className:c,defaultChecked:o,disabled:y,disableFocusRipple:l=!1,edge:d=!1,icon:v,id:w,inputProps:u,inputRef:f,name:h,onBlur:x,onChange:g,onFocus:S,readOnly:J,required:Q=!1,tabIndex:X,type:$,value:V,...Y}=t,[L,_]=ne({controlled:r,default:!!o,name:"SwitchBase",state:"checked"}),b=oe(),ee=p=>{S&&S(p),b&&b.onFocus&&b.onFocus(p)},te=p=>{x&&x(p),b&&b.onBlur&&b.onBlur(p)},se=p=>{if(p.nativeEvent.defaultPrevented)return;const H=p.target.checked;_(H),g&&g(p,H)};let j=y;b&&typeof j>"u"&&(j=b.disabled);const re=$==="checkbox"||$==="radio",B={...t,checked:L,disabled:j,disableFocusRipple:l,edge:d},T=de(B);return s.jsxs(pe,{component:"span",className:F(T.root,c),centerRipple:!0,focusRipple:!l,disabled:j,tabIndex:null,role:void 0,onFocus:ee,onBlur:te,ownerState:B,ref:a,...Y,children:[s.jsx(me,{autoFocus:i,checked:r,defaultChecked:o,className:T.input,disabled:j,id:re?w:void 0,name:h,onChange:se,readOnly:J,ref:f,required:Q,ownerState:B,tabIndex:X,type:$,...$==="checkbox"&&V===void 0?{}:{value:V},...u}),L?n:v]})}),fe=ue,he=U(s.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),xe=U(s.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ge=U(s.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function be(e){return M("MuiCheckbox",e)}const ke=D("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),R=ke,ve=e=>{const{classes:t,indeterminate:a,color:i,size:r}=e,n={root:["root",a&&"indeterminate",`color${m(i)}`,`size${m(r)}`]},c=O(n,be,t);return{...t,...c}},ye=C(fe,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.indeterminate&&t.indeterminate,t[`size${m(a.size)}`],a.color!=="default"&&t[`color${m(a.color)}`]]}})(E(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(I()).map(([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette[t].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(I()).map(([t])=>({props:{color:t},style:{[`&.${R.checked}, &.${R.indeterminate}`]:{color:(e.vars||e).palette[t].main},[`&.${R.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Ce=s.jsx(xe,{}),we=s.jsx(he,{}),Se=s.jsx(ge,{}),je=P.forwardRef(function(t,a){const i=G({props:t,name:"MuiCheckbox"}),{checkedIcon:r=Ce,color:n="primary",icon:c=we,indeterminate:o=!1,indeterminateIcon:y=Se,inputProps:l,size:d="medium",disableRipple:v=!1,className:w,...u}=i,f=o?y:c,h=o?y:r,x={...i,disableRipple:v,color:n,indeterminate:o,size:d},g=ve(x);return s.jsx(ye,{type:"checkbox",inputProps:{"data-indeterminate":o,...l},icon:P.cloneElement(f,{fontSize:f.props.fontSize??d}),checkedIcon:P.cloneElement(h,{fontSize:h.props.fontSize??d}),ownerState:x,ref:a,className:F(g.root,w),disableRipple:v,...u,classes:g})}),Pe=je;function $e(e){return M("MuiCircularProgress",e)}D("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const k=44,z=K`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,N=K`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,Be=typeof z!="string"?W`
        animation: ${z} 1.4s linear infinite;
      `:null,Re=typeof N!="string"?W`
        animation: ${N} 1.4s ease-in-out infinite;
      `:null,Ie=e=>{const{classes:t,variant:a,color:i,disableShrink:r}=e,n={root:["root",a,`color${m(i)}`],svg:["svg"],circle:["circle",`circle${m(a)}`,r&&"circleDisableShrink"]};return O(n,$e,t)},ze=C("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`color${m(a.color)}`]]}})(E(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:Be||{animation:`${z} 1.4s linear infinite`}},...Object.entries(e.palette).filter(I()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),Ne=C("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),Fe=C("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.circle,t[`circle${m(a.variant)}`],a.disableShrink&&t.circleDisableShrink]}})(E(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink,style:Re||{animation:`${N} 1.4s ease-in-out infinite`}}]}))),Me=P.forwardRef(function(t,a){const i=G({props:t,name:"MuiCircularProgress"}),{className:r,color:n="primary",disableShrink:c=!1,size:o=40,style:y,thickness:l=3.6,value:d=0,variant:v="indeterminate",...w}=i,u={...i,color:n,disableShrink:c,size:o,thickness:l,value:d,variant:v},f=Ie(u),h={},x={},g={};if(v==="determinate"){const S=2*Math.PI*((k-l)/2);h.strokeDasharray=S.toFixed(3),g["aria-valuenow"]=Math.round(d),h.strokeDashoffset=`${((100-d)/100*S).toFixed(3)}px`,x.transform="rotate(-90deg)"}return s.jsx(ze,{className:F(f.root,r),style:{width:o,height:o,...x,...y},ownerState:u,ref:a,role:"progressbar",...g,...w,children:s.jsx(Ne,{className:f.svg,ownerState:u,viewBox:`${k/2} ${k/2} ${k} ${k}`,children:s.jsx(Fe,{className:f.circle,style:h,ownerState:u,cx:k,cy:k,r:(k-l)/2,fill:"none",strokeWidth:l})})})}),De=Me;function dt(){const{data:e,setData:t,post:a,processing:i,errors:r,reset:n}=ae({email:"",password:"",remember:!1}),c=o=>{o.preventDefault(),console.log("data",e),a(route("login.auth"),{onFinish:()=>n("password")})};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute inset-0 -z-10 items-center px-5 py-24 bg-gray-300"}),s.jsx("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ",children:s.jsxs("div",{className:"mt-20 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5 rounded-md",children:[s.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center",children:s.jsx("div",{className:"flex items-center justify-center flex-col text-4xl m py-5 font-black",children:"GBS MINIMART"})}),s.jsxs("form",{onSubmit:c,className:"space-y-6",children:[s.jsx(q,{className:"w-full",onChange:o=>t("email",o.target.value),error:!!(r!=null&&r.email),helperText:(r==null?void 0:r.email)??"",name:"email",type:"text",id:"outlined-basic",label:"Email",variant:"outlined"}),s.jsx(q,{className:"w-full",onChange:o=>t("password",o.target.value),error:!!(r!=null&&r.password),helperText:(r==null?void 0:r.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),s.jsx("div",{className:"block mt-4",children:s.jsxs("label",{className:"flex items-center",children:[s.jsx(Pe,{name:"remember",checked:e.remember,onChange:o=>t("remember",o.target.checked)}),s.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),s.jsx("div",{children:s.jsx(ce,{type:"submit",disabled:i,variant:"contained",className:"w-full",children:i?s.jsx(De,{size:24,color:"inherit"}):" Sign in"})})]})]})})]})}export{dt as default};
