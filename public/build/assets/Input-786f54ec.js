import{r as l,j as r}from"./app-d83445b4.js";import{T as c}from"./TextField-9c745140.js";import"./clsx-0839fdbe.js";import"./memoTheme-ef93f696.js";import"./useSlot-355b7d74.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-30ebce75.js";import"./InputBase-c0a419e5.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-bac85e91.js";import"./Modal-805ae567.js";import"./useTheme-65a02dda.js";import"./utils-fbc5ef63.js";import"./Paper-df57c3e1.js";import"./Grow-4f0c8e91.js";import"./useId-176a4b05.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-67883397.js";import"./useControlled-8e7a9785.js";import"./createSvgIcon-d7f81846.js";function D({name:o,type:n,label:s,errorMessage:i,onChange:a,autofocus:e,value:d,inputRef:m}){return l.useEffect(()=>{const t=p=>{(p.key==="F"||p.key==="f")&&m.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),r.jsxs("div",{children:[r.jsx(c,{className:"w-full",ref:m,autoFocus:e,onChange:t=>a(t.target.value.replace(/[^0-9.]/g,"")),type:n,id:o,name:o,value:d,label:s,variant:"outlined"}),i&&r.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:i})]})}export{D as default};
