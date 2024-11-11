import{r as a,u as d,j as t}from"./app-18fb0b2d.js";import p from"./cashier-edit-modal-bb4e674e.js";import h from"./cashier-delete-section-d8d7a2c9.js";import{P as f}from"./PencilIcon-a7b75850.js";import{T as j}from"./TrashIcon-72a51776.js";import"./Input-91dccdf5.js";import"./TextField-997ba68d.js";import"./clsx-0839fdbe.js";import"./memoTheme-b62c7c40.js";import"./useSlot-1912aba8.js";import"./TransitionGroupContext-7f6bb1e5.js";import"./resolveComponentProps-3112ecbb.js";import"./InputBase-5da70f22.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-d1d6bead.js";import"./Modal-2a75b66f.js";import"./useTheme-93a79cbd.js";import"./Paper-e1330b79.js";import"./Grow-6fcdfd0b.js";import"./useId-9860e0b6.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-ea5665a6.js";import"./createSvgIcon-fa6f9c66.js";import"./cashier-thunk-68412f2f.js";import"./sales-service-19b3eac2.js";import"./transition-bd4f077b.js";import"./use-flags-d4c59463.js";import"./open-closed-d0b8f1fd.js";import"./dialog-ed07efa7.js";import"./use-root-containers-701bd57a.js";import"./keyboard-7da6c275.js";import"./description-5dec1398.js";function tt({inputRef:n}){const m=a.useRef([]),{cart:r}=d(e=>e.cashier),[i,x]=a.useState(0),[w,c]=a.useState(0);return console.log("cart",r),a.useEffect(()=>{const e=m.current[i],s=o=>{o.key==="ArrowUp"&&i>0?(c(e==null?void 0:e.id),x(l=>l-1)):o.key==="ArrowDown"&&i<r.length-1&&(c(e==null?void 0:e.id),x(l=>l+1))};return e!=null&&e.id&&c(e==null?void 0:e.id),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[i,r]),t.jsx("section",{className:"container mx-auto",children:t.jsx("div",{className:"flex flex-col ",children:t.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:t.jsx("div",{className:" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:t.jsx("div",{className:"overflow-auto h-[66.8vh] border border-gray-200  ",children:t.jsxs("table",{className:"min-w-full relative divide-y divide-gray-200 ",children:[t.jsx("thead",{className:"bg-red-500 sticky top-0 text-white ",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Item ID"}),t.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Quantity"}),t.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Description"}),t.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Price"}),t.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Total"}),t.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Action"})]})}),t.jsx("tbody",{className:"bg-white divide-y divide-gray-200  ",children:r.map((e,s)=>t.jsxs("tr",{id:e.randomId,ref:o=>m.current[s]=o,className:`${i===s?"bg-gray-300":""}`,children:[t.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:t.jsx("div",{children:t.jsx("h2",{className:"font-medium text-gray-800 ",children:e.id})})}),t.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:t.jsx("h2",{className:"font-medium text-gray-800 ",children:e.quantity})}),t.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:t.jsx("h2",{className:"font-medium text-gray-800 ",children:e.product.description})}),t.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:t.jsx("div",{children:t.jsxs("h2",{className:"font-medium text-gray-800 ",children:["₱ ",e.price]})})}),t.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:t.jsx("div",{children:t.jsxs("h2",{className:"font-medium text-gray-800 ",children:["₱ ",e.total]})})}),t.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:t.jsxs("div",{className:"flex gap-4",children:[i==s?t.jsx(p,{inputRef:n,selectedRow:i,index:s,data:e}):t.jsx("button",{className:"font-medium text-gray-800  ",children:t.jsx(f,{className:"h-6 text-blue-500"})}),i==s?t.jsx(h,{selectedRow:i,index:s,data:e}):t.jsx("button",{className:"font-medium text-gray-800 ",children:t.jsx(j,{className:"h-6 text-red-500"})})]})})]},s))})]})})})})})})}export{tt as default};