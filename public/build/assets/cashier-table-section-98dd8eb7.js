import{r as n,u as j,j as r}from"./app-05ddd05a.js";import f from"./cashier-edit-modal-66b8d172.js";import u from"./cashier-delete-section-ecc2034f.js";import{T as b,a as w}from"./TableContainer-10ff0c92.js";import{P as T}from"./Paper-5fa38c0b.js";import{T as g,a as I,b as l,c as o}from"./TableRow-4c0fdbf9.js";import{P as N}from"./PencilIcon-86cf9db3.js";import{T as P}from"./TrashIcon-e24a6235.js";import"./Input-d7714d93.js";import"./TextField-9a84bcc6.js";import"./clsx-0839fdbe.js";import"./memoTheme-da397490.js";import"./useSlot-9a4a0be9.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-91378426.js";import"./InputBase-4c8fcebb.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-ba701528.js";import"./Modal-ffb00456.js";import"./useTheme-04e79c76.js";import"./utils-2674f20f.js";import"./getReactElementRef-c11325f7.js";import"./Grow-a8bfdecb.js";import"./useId-80eb637d.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-5727c2f2.js";import"./useControlled-0201a76a.js";import"./createSvgIcon-2cf123f3.js";import"./cashier-thunk-53e18b04.js";import"./sales-service-19b3eac2.js";import"./transition-948c1256.js";import"./use-flags-364307a8.js";import"./open-closed-4cd1727a.js";import"./dialog-fe8d6c3f.js";import"./use-root-containers-443486e8.js";import"./keyboard-31d72bd3.js";import"./description-0558fba1.js";function xr({inputRef:x}){const m=n.useRef([]),{cart:s}=j(t=>t.cashier),[i,p]=n.useState(0),[R,c]=n.useState(0);console.log("cart",s),n.useEffect(()=>{const t=m.current[i],e=a=>{a.key==="ArrowUp"&&i>0?(c(t==null?void 0:t.id),p(d=>d-1)):a.key==="ArrowDown"&&i<s.length-1&&(c(t==null?void 0:t.id),p(d=>d+1))};return t!=null&&t.id&&c(t==null?void 0:t.id),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[i,s]);const h=s;return r.jsx(r.Fragment,{children:r.jsx(b,{component:T,children:r.jsxs(g,{size:"small","aria-label":"a dense table",children:[r.jsx(I,{children:r.jsxs(l,{children:[r.jsx(o,{children:"Item ID"}),r.jsx(o,{children:"Quantity"}),r.jsx(o,{children:"Description"}),r.jsx(o,{children:"Price"}),r.jsx(o,{children:"Total"}),r.jsx(o,{children:"Action"})]})}),r.jsx(w,{children:h.map((t,e)=>r.jsxs(l,{id:t.randomId,ref:a=>m.current[e]=a,className:`${i===e?"bg-gray-300":""}`,sx:{"&:last-child td, &:last-child th":{border:0}},children:[r.jsx(o,{component:"th",scope:"row",children:t.id}),r.jsx(o,{component:"th",scope:"row",children:t.quantity}),r.jsxs(o,{children:[" ",t.product.description]}),r.jsxs(o,{children:[" ₱ ",t.price]}),r.jsxs(o,{children:[" ₱ ",t.total]}),r.jsx(o,{children:r.jsxs("div",{className:"flex gap-3",children:[i==e?r.jsx(f,{inputRef:x,selectedRow:i,index:e,data:t}):r.jsx("button",{className:"font-medium text-gray-800  ",children:r.jsx(N,{className:"h-6 text-blue-500"})}),i==e?r.jsx(u,{selectedRow:i,index:e,data:t}):r.jsx("button",{className:"font-medium text-gray-800 ",children:r.jsx(P,{className:"h-6 text-red-500"})})]})})]},e))})]})})})}export{xr as default};
