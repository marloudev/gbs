import{r as n,u as j,j as r}from"./app-7ce828bf.js";import f from"./cashier-edit-modal-ad4495cb.js";import u from"./cashier-delete-section-f25ff54d.js";import{T as b,a as w}from"./TableContainer-f8b3090b.js";import{P as T}from"./Paper-e874bdf8.js";import{T as g,a as I,b as l,c as o}from"./TableRow-c4ec7470.js";import{P as N}from"./PencilIcon-def26a6a.js";import{T as P}from"./TrashIcon-9c69a046.js";import"./Input-140b2542.js";import"./TextField-9b0e2868.js";import"./clsx-0839fdbe.js";import"./memoTheme-9e5d36f9.js";import"./useSlot-686b7842.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-3cc3afcd.js";import"./InputBase-91310372.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-7c96c2c2.js";import"./Modal-4b1961da.js";import"./useTheme-ac50545c.js";import"./utils-7875b360.js";import"./getReactElementRef-d2957806.js";import"./Grow-ffea1b22.js";import"./useId-7d67d4e7.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-dfdeb226.js";import"./useControlled-9ad0c4a2.js";import"./createSvgIcon-1901faae.js";import"./cashier-thunk-a1e1ea15.js";import"./sales-service-19b3eac2.js";import"./transition-51a6aea8.js";import"./use-flags-173dad15.js";import"./open-closed-880bdb0b.js";import"./dialog-ce133907.js";import"./use-root-containers-db2cafc6.js";import"./keyboard-1f53a23a.js";import"./description-dcdfe744.js";function xr({inputRef:x}){const m=n.useRef([]),{cart:s}=j(t=>t.cashier),[i,p]=n.useState(0),[R,c]=n.useState(0);console.log("cart",s),n.useEffect(()=>{const t=m.current[i],e=a=>{a.key==="ArrowUp"&&i>0?(c(t==null?void 0:t.id),p(d=>d-1)):a.key==="ArrowDown"&&i<s.length-1&&(c(t==null?void 0:t.id),p(d=>d+1))};return t!=null&&t.id&&c(t==null?void 0:t.id),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[i,s]);const h=s;return r.jsx(r.Fragment,{children:r.jsx(b,{component:T,children:r.jsxs(g,{size:"small","aria-label":"a dense table",children:[r.jsx(I,{children:r.jsxs(l,{children:[r.jsx(o,{children:"Item ID"}),r.jsx(o,{children:"Quantity"}),r.jsx(o,{children:"Description"}),r.jsx(o,{children:"Price"}),r.jsx(o,{children:"Total"}),r.jsx(o,{children:"Action"})]})}),r.jsx(w,{children:h.map((t,e)=>r.jsxs(l,{id:t.randomId,ref:a=>m.current[e]=a,className:`${i===e?"bg-gray-300":""}`,sx:{"&:last-child td, &:last-child th":{border:0}},children:[r.jsx(o,{component:"th",scope:"row",children:t.id}),r.jsx(o,{component:"th",scope:"row",children:t.quantity}),r.jsxs(o,{children:[" ",t.product.description]}),r.jsxs(o,{children:[" ₱ ",t.price]}),r.jsxs(o,{children:[" ₱ ",t.total]}),r.jsx(o,{children:r.jsxs("div",{className:"flex gap-3",children:[i==e?r.jsx(f,{inputRef:x,selectedRow:i,index:e,data:t}):r.jsx("button",{className:"font-medium text-gray-800  ",children:r.jsx(N,{className:"h-6 text-blue-500"})}),i==e?r.jsx(u,{selectedRow:i,index:e,data:t}):r.jsx("button",{className:"font-medium text-gray-800 ",children:r.jsx(P,{className:"h-6 text-red-500"})})]})})]},e))})]})})})}export{xr as default};
