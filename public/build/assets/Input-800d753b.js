import{r as l,j as r}from"./app-15ab478a.js";import{T as c}from"./TextField-6065ee20.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-00a2c87d.js";import"./useSlot-cf40afab.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-1ef98a35.js";import"./InputBase-ddcc49b5.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-ff0cb7fe.js";import"./Modal-b7bf893a.js";import"./useTheme-75d0d319.js";import"./utils-be36f58c.js";import"./getReactElementRef-92371454.js";import"./Paper-ae895174.js";import"./Grow-035b1dce.js";import"./useId-c66f7691.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-5e1e5ce7.js";import"./useControlled-7a74560a.js";import"./createSvgIcon-7d0e84c7.js";function D({name:o,type:n,label:s,errorMessage:i,onChange:a,autofocus:e,value:d,inputRef:m}){return l.useEffect(()=>{const t=p=>{(p.key==="F"||p.key==="f")&&m.current.focus()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),r.jsxs("div",{children:[r.jsx(c,{className:"w-full",ref:m,autoFocus:e,onChange:t=>a(t.target.value.replace(/[^0-9.]/g,"")),type:n,id:o,name:o,value:d,label:s,variant:"outlined"}),i&&r.jsx("p",{className:"text-red-500 text-sm mt-1.5 font-light",children:i})]})}export{D as default};