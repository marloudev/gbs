import{r as l,j as r}from"./app-cdc2bbc2.js";import{T as c}from"./TextField-45adc967.js";import"./clsx-0839fdbe.js";import"./memoTheme-94a116cc.js";import"./useSlot-efd34fd5.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-baeba7e0.js";import"./InputBase-76ac33e1.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-52c345be.js";import"./Modal-fa952988.js";import"./useTheme-823ef09d.js";import"./utils-e3bb4ca5.js";import"./getReactElementRef-c772a0bf.js";import"./Paper-1de06b18.js";import"./Grow-8a4fde25.js";import"./useId-59ef5e6d.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-7aa6e35b.js";import"./useControlled-6ce35e87.js";import"./createSvgIcon-97b83657.js";function G({name:o,type:n,label:s,errorMessage:i,onChange:a,autofocus:e,value:d,inputRef:m}){return l.useEffect(()=>{const t=p=>{(p.key==="F"||p.key==="f")&&m.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),r.jsxs("div",{children:[r.jsx(c,{className:"w-full",ref:m,autoFocus:e,onChange:t=>a(t.target.value.replace(/[^0-9.]/g,"")),type:n,id:o,name:o,value:d,label:s,variant:"outlined"}),i&&r.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:i})]})}export{G as default};