import{r as n,u as j,j as t}from"./app-7c96f7a6.js";import u from"./cashier-edit-modal-b709949d.js";import f from"./cashier-delete-section-c02cb186.js";import{T as b,a as w,b as T,c as m,d as e,e as g}from"./TableRow-7ceb6060.js";import{P as I}from"./Paper-6ef798f6.js";import{P as N}from"./PencilIcon-da8d5b19.js";import{T as P}from"./TrashIcon-ee6e3261.js";import"./Input-4c03bb05.js";import"./TextField-13867fb1.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-82d37645.js";import"./useSlot-ee5018f7.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-ab7b30e1.js";import"./InputBase-36c9654e.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-23b65036.js";import"./Modal-4513895c.js";import"./useTheme-39c4097e.js";import"./utils-56b80d8d.js";import"./Grow-681d826d.js";import"./useId-30bc7803.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-95b7c483.js";import"./useControlled-dd03a0a9.js";import"./createSvgIcon-488b6a9d.js";import"./cashier-thunk-99cb0d93.js";import"./sales-service-19b3eac2.js";import"./transition-c7a34dda.js";import"./use-flags-f5d6bc5f.js";import"./open-closed-d1530b0c.js";import"./dialog-db20f73f.js";import"./use-root-containers-09a66fae.js";import"./keyboard-47d8ed84.js";import"./description-7ec14522.js";function lt({inputRef:x}){const l=n.useRef([]),{cart:s}=j(r=>r.cashier),[i,p]=n.useState(0),[R,c]=n.useState(0);console.log("cart",s),n.useEffect(()=>{const r=l.current[i],o=a=>{a.key==="ArrowUp"&&i>0?(c(r==null?void 0:r.id),p(d=>d-1)):a.key==="ArrowDown"&&i<s.length-1&&(c(r==null?void 0:r.id),p(d=>d+1))};return r!=null&&r.id&&c(r==null?void 0:r.id),window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[i,s]);const h=s;return t.jsx(t.Fragment,{children:t.jsx(b,{component:I,children:t.jsxs(w,{size:"small","aria-label":"a dense table",children:[t.jsx(T,{children:t.jsxs(m,{children:[t.jsx(e,{children:"Item ID"}),t.jsx(e,{children:"Quantity"}),t.jsx(e,{children:"Description"}),t.jsx(e,{children:"Price"}),t.jsx(e,{children:"Total"}),t.jsx(e,{children:"Action"})]})}),t.jsx(g,{children:h.map((r,o)=>t.jsxs(m,{id:r.randomId,ref:a=>l.current[o]=a,className:`${i===o?"bg-gray-300":""}`,sx:{"&:last-child td, &:last-child th":{border:0}},children:[t.jsx(e,{component:"th",scope:"row",children:r.id}),t.jsx(e,{component:"th",scope:"row",children:r.quantity}),t.jsxs(e,{children:[" ",r.product.description]}),t.jsxs(e,{children:[" ₱ ",r.price]}),t.jsxs(e,{children:[" ₱ ",r.total]}),t.jsx(e,{children:t.jsxs("div",{className:"flex gap-3",children:[i==o?t.jsx(u,{inputRef:x,selectedRow:i,index:o,data:r}):t.jsx("button",{className:"font-medium text-gray-800  ",children:t.jsx(N,{className:"h-6 text-blue-500"})}),i==o?t.jsx(f,{selectedRow:i,index:o,data:r}):t.jsx("button",{className:"font-medium text-gray-800 ",children:t.jsx(P,{className:"h-6 text-red-500"})})]})})]},o))})]})})})}export{lt as default};
