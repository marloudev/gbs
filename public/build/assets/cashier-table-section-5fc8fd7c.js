import{r as a,u as p,b as f,j as e,E as w}from"./app-73e956c4.js";import y from"./cashier-edit-modal-5c5fd160.js";import{T as j}from"./TrashIcon-6366f4db.js";import"./Input-35b64ebb.js";import"./PencilIcon-eb2bdc31.js";import"./transition-8e5df15e.js";import"./use-flags-22cb74dc.js";import"./open-closed-740145de.js";import"./dialog-38320a1c.js";import"./use-root-containers-3db68151.js";import"./keyboard-4d9875ee.js";import"./description-0fe789bd.js";function A(){const x=a.useRef([]),{cart:c}=p(t=>t.cashier),h=f(),[r,m]=a.useState(0),[n,o]=a.useState(0);function l(t){if(window.confirm("Are you sure want to delete?")){const s=c.filter(i=>i.randomId!==t);h(w(s))}}return a.useEffect(()=>{const t=x.current[r],s=i=>{i.key==="ArrowUp"&&r>0?(o(t==null?void 0:t.id),m(d=>d-1)):i.key==="ArrowDown"&&r<c.length-1&&(o(t==null?void 0:t.id),m(d=>d+1))};return t!=null&&t.id&&o(t==null?void 0:t.id),window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[r,c]),a.useEffect(()=>{const t=s=>{(s.key==="D"||s.key==="d"||s.key==="E"||s.key==="e")&&l(parseInt(n))};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[n]),e.jsx("section",{className:"container mx-auto",children:e.jsx("div",{className:"flex flex-col ",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-auto h-[66.8vh] border border-gray-200  ",children:e.jsxs("table",{className:"min-w-full relative divide-y divide-gray-200 ",children:[e.jsx("thead",{className:"bg-red-500 sticky top-0 text-white ",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Item ID"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Quantity"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Description"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Price"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Total"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ",children:"Action"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200  ",children:c.map((t,s)=>e.jsxs("tr",{id:t.randomId,ref:i=>x.current[s]=i,className:`${r===s?"bg-gray-300":""}`,children:[e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h2",{className:"font-medium text-gray-800 ",children:t.id})})}),e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800 ",children:t.quantity})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800 ",children:t.description})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("div",{children:e.jsxs("h2",{className:"font-medium text-gray-800 ",children:["₱ ",t.price]})})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("div",{children:e.jsxs("h2",{className:"font-medium text-gray-800 ",children:["₱ ",t.total]})})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(y,{data:t}),e.jsx("button",{onClick:()=>l(t.randomId),className:"font-medium text-gray-800 ",children:e.jsx(j,{className:"h-6 text-red-500"})})]})})]},s))})]})})})})})})}export{A as default};
