import{r as l,j as r}from"./app-7ce828bf.js";import{T as c}from"./TextField-9b0e2868.js";import"./clsx-0839fdbe.js";import"./memoTheme-9e5d36f9.js";import"./useSlot-686b7842.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-3cc3afcd.js";import"./InputBase-91310372.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-7c96c2c2.js";import"./Modal-4b1961da.js";import"./useTheme-ac50545c.js";import"./utils-7875b360.js";import"./getReactElementRef-d2957806.js";import"./Paper-e874bdf8.js";import"./Grow-ffea1b22.js";import"./useId-7d67d4e7.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-dfdeb226.js";import"./useControlled-9ad0c4a2.js";import"./createSvgIcon-1901faae.js";function G({name:o,type:n,label:s,errorMessage:i,onChange:a,autofocus:e,value:d,inputRef:m}){return l.useEffect(()=>{const t=p=>{(p.key==="F"||p.key==="f")&&m.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),r.jsxs("div",{children:[r.jsx(c,{className:"w-full",ref:m,autoFocus:e,onChange:t=>a(t.target.value.replace(/[^0-9.]/g,"")),type:n,id:o,name:o,value:d,label:s,variant:"outlined"}),i&&r.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:i})]})}export{G as default};
