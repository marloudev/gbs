import{r as l,j as r}from"./app-18fb0b2d.js";import{T as c}from"./TextField-997ba68d.js";import"./clsx-0839fdbe.js";import"./memoTheme-b62c7c40.js";import"./useSlot-1912aba8.js";import"./TransitionGroupContext-7f6bb1e5.js";import"./resolveComponentProps-3112ecbb.js";import"./InputBase-5da70f22.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-d1d6bead.js";import"./Modal-2a75b66f.js";import"./useTheme-93a79cbd.js";import"./Paper-e1330b79.js";import"./Grow-6fcdfd0b.js";import"./useId-9860e0b6.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-ea5665a6.js";import"./createSvgIcon-fa6f9c66.js";function A({name:o,type:n,label:s,errorMessage:i,onChange:a,autofocus:e,value:d,inputRef:m}){return l.useEffect(()=>{const t=p=>{(p.key==="F"||p.key==="f")&&m.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),r.jsxs("div",{children:[r.jsx(c,{className:"w-full",ref:m,autoFocus:e,onChange:t=>a(t.target.value.replace(/[^0-9.]/g,"")),type:n,id:o,name:o,value:d,label:s,variant:"outlined"}),i&&r.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:i})]})}export{A as default};
