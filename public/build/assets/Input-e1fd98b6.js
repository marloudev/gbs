import{r as l,j as r}from"./app-f825970e.js";import{T as c}from"./TextField-ac629078.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-54621e7a.js";import"./useSlot-e3a8322a.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-869efa20.js";import"./InputBase-edacf292.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-ab50631b.js";import"./Modal-0d0d51d5.js";import"./useTheme-bba71903.js";import"./utils-1ac319af.js";import"./getReactElementRef-07e65afb.js";import"./Paper-7c842704.js";import"./Grow-da31b0f0.js";import"./useId-7c7e1715.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-d61808db.js";import"./useControlled-700ac69a.js";import"./createSvgIcon-ccfd654c.js";function D({name:o,type:n,label:s,errorMessage:i,onChange:a,autofocus:e,value:d,inputRef:m}){return l.useEffect(()=>{const t=p=>{(p.key==="F"||p.key==="f")&&m.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),r.jsxs("div",{children:[r.jsx(c,{className:"w-full",ref:m,autoFocus:e,onChange:t=>a(t.target.value.replace(/[^0-9.]/g,"")),type:n,id:o,name:o,value:d,label:s,variant:"outlined"}),i&&r.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:i})]})}export{D as default};
