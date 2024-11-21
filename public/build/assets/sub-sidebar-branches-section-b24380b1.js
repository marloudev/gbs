import{R as j,r,q as V,u as A,j as t}from"./app-fd6d6e0e.js";import K from"./radio-group-component-7d4e0ad5.js";import{O as M,U as N,y as C,T as U,o as P,u as D,C as E,I as L}from"./use-flags-875e698a.js";import{I as F,b as z,o as y,r as W}from"./keyboard-6527c68e.js";import{T as Z}from"./use-resolve-button-type-1e55238f.js";import{s as _,d as I,u as q}from"./open-closed-8e8d889f.js";import"./UserGroupIcon-d90d84dd.js";import"./description-d79a4133.js";var O;let G=(O=j.startTransition)!=null?O:function(e){e()};var Q=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Q||{}),Y=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Y||{});let J={0:e=>({...e,disclosureState:D(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,l){return e.buttonId===l.buttonId?e:{...e,buttonId:l.buttonId}},3(e,l){return e.panelId===l.panelId?e:{...e,panelId:l.panelId}}},R=r.createContext(null);R.displayName="DisclosureContext";function $(e){let l=r.useContext(R);if(l===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,$),a}return l}let T=r.createContext(null);T.displayName="DisclosureAPIContext";function H(e){let l=r.useContext(T);if(l===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,H),a}return l}let B=r.createContext(null);B.displayName="DisclosurePanelContext";function X(){return r.useContext(B)}function ee(e,l){return D(l.type,J,e,l)}let te=r.Fragment;function le(e,l){let{defaultOpen:a=!1,...n}=e,m=r.useRef(null),s=C(l,U(c=>{m.current=c},e.as===void 0||e.as===r.Fragment)),o=r.useRef(null),x=r.useRef(null),u=r.useReducer(ee,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:x,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:f,buttonId:d},g]=u,p=P(c=>{g({type:1});let v=z(m);if(!v||!d)return;let i=(()=>c?c instanceof HTMLElement?c:c.current instanceof HTMLElement?c.current:v.getElementById(d):v.getElementById(d))();i==null||i.focus()}),w=r.useMemo(()=>({close:p}),[p]),h=r.useMemo(()=>({open:f===0,close:p}),[f,p]),k={ref:s};return j.createElement(R.Provider,{value:u},j.createElement(T.Provider,{value:w},j.createElement(_,{value:D(f,{0:I.Open,1:I.Closed})},E({ourProps:k,theirProps:n,slot:h,defaultTag:te,name:"Disclosure"}))))}let re="button";function ne(e,l){let a=F(),{id:n=`headlessui-disclosure-button-${a}`,...m}=e,[s,o]=$("Disclosure.Button"),x=X(),u=x===null?!1:x===s.panelId,f=r.useRef(null),d=C(f,l,u?null:s.buttonRef),g=L();r.useEffect(()=>{if(!u)return o({type:2,buttonId:n}),()=>{o({type:2,buttonId:null})}},[n,o,u]);let p=P(i=>{var b;if(u){if(s.disclosureState===1)return;switch(i.key){case y.Space:case y.Enter:i.preventDefault(),i.stopPropagation(),o({type:0}),(b=s.buttonRef.current)==null||b.focus();break}}else switch(i.key){case y.Space:case y.Enter:i.preventDefault(),i.stopPropagation(),o({type:0});break}}),w=P(i=>{switch(i.key){case y.Space:i.preventDefault();break}}),h=P(i=>{var b;W(i.currentTarget)||e.disabled||(u?(o({type:0}),(b=s.buttonRef.current)==null||b.focus()):o({type:0}))}),k=r.useMemo(()=>({open:s.disclosureState===0}),[s]),c=Z(e,f),v=u?{ref:d,type:c,onKeyDown:p,onClick:h}:{ref:d,id:n,type:c,"aria-expanded":s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:p,onKeyUp:w,onClick:h};return E({mergeRefs:g,ourProps:v,theirProps:m,slot:k,defaultTag:re,name:"Disclosure.Button"})}let se="div",ae=M.RenderStrategy|M.Static;function oe(e,l){let a=F(),{id:n=`headlessui-disclosure-panel-${a}`,...m}=e,[s,o]=$("Disclosure.Panel"),{close:x}=H("Disclosure.Panel"),u=L(),f=C(l,s.panelRef,h=>{G(()=>o({type:h?4:5}))});r.useEffect(()=>(o({type:3,panelId:n}),()=>{o({type:3,panelId:null})}),[n,o]);let d=q(),g=(()=>d!==null?(d&I.Open)===I.Open:s.disclosureState===0)(),p=r.useMemo(()=>({open:s.disclosureState===0,close:x}),[s,x]),w={ref:f,id:n};return j.createElement(B.Provider,{value:s.panelId},E({mergeRefs:u,ourProps:w,theirProps:m,slot:p,defaultTag:se,features:ae,visible:g,name:"Disclosure.Panel"}))}let ie=N(le),ue=N(ne),ce=N(oe),S=Object.assign(ie,{Button:ue,Panel:ce});function de({title:e,titleId:l,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":l},a),e?r.createElement("title",{id:l},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"}))}const pe=r.forwardRef(de),me=pe;function je(){const{url:e}=V(),l=e.split("/")[3],{branches:a}=A(n=>n.app);return t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"relative text-sm focus:outline-none group",children:[t.jsxs("div",{className:"flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-red-400 hover:text-white",children:[t.jsx("span",{className:"font-medium",children:"Dropdown"}),t.jsx("svg",{className:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),t.jsxs("div",{className:"absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex",children:[t.jsx("a",{className:"w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white",href:"#",children:"Menu Item 1"}),t.jsx("a",{className:"w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white",href:"#",children:"Menu Item 1"}),t.jsx("a",{className:"w-full px-4 py-2 text-left hover:bg-red-400 hover:text-white",href:"#",children:"Menu Item 1"})]})]}),t.jsx("div",{className:"flex flex-col flex-grow overflow-auto",children:a.map((n,m)=>t.jsx("div",{className:"w-full h-full",children:t.jsx("div",{className:"mx-auto w-full max-w-md rounded-2xl bg-white",children:t.jsx(S,{defaultOpen:l==n.id,children:({open:s})=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"flow-root  border-b border-gray-300 ",children:t.jsx(S.Button,{className:"flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500",children:t.jsxs("div",{className:`${l==n.id?"bg-red-500 text-white":" text-gray-500 hover:bg-gray-100"} flex items-center w-full px-5 py-2 transition-colors duration-200  gap-x-2  focus:outline-none`,children:[t.jsx("div",{className:` ${l==n.id?"text-white":"text-red-500"}`,children:t.jsx(me,{className:"h-6"})}),t.jsxs("div",{className:"text-left rtl:text-right",children:[t.jsx("h1",{className:"text-sm font-medium  capitalize ",children:n.branch_name}),t.jsx("p",{className:"text-xs ",children:"11.2 Followers"})]})]})})}),t.jsx(S.Panel,{className:"text-sm text-gray-500 mx-2",children:t.jsx(K,{branchid:n.id})})]})})})},m))}),t.jsxs("button",{className:"flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-red-500  hover:bg-red-600 text-white hover:text-white",href:"#",children:[t.jsx("svg",{className:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),t.jsx("span",{className:"ml-2 leading-none",children:"Create Branch"})]})]})}export{je as default};