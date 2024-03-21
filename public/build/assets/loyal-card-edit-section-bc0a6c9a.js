import{r as i,b as m,u as d,l as n,j as e,s as p}from"./app-7d1f4fcd.js";import x from"./drawer-action-72426d51.js";import{e as f}from"./loyal-card-thunk-85bcfea9.js";import{P as h}from"./PencilIcon-118f7a47.js";import"./XMarkIcon-3d6d99e1.js";import"./transition-feb5a49d.js";import"./use-flags-cf5238ae.js";import"./open-closed-13a7e790.js";import"./dialog-c80ae49a.js";import"./use-root-containers-53f3fb60.js";import"./keyboard-3798afe5.js";import"./description-c42c2e28.js";import"./loyal-card-service-8d6deeca.js";function k({data:l}){const[o,r]=i.useState(!1),a=m(),{loyalCardForm:s}=d(t=>t.loyal_card),{toastStatus:c}=d(t=>t.app);i.useEffect(()=>{o&&a(n({...s,id:l.id,barcode:l.barcode,pincode:l.pincode,discount:l.discount,fullname:l.fullname}))},[o]),i.useEffect(()=>{c.status=="success"&&r(!1)},[c.status]);function u(t){t.preventDefault(),p.dispatch(f())}return e.jsx("div",{children:e.jsx(x,{open:o,setOpen:r,button:e.jsx("button",{onClick:()=>r(!0),className:" text-blue-500",children:e.jsx(h,{className:"h-6"})}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{onSubmit:u,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Update Products"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Fullname"}),e.jsx("input",{required:!0,value:s.fullname??"",onChange:t=>a(n({...s,fullname:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"fullname",type:"text",placeholder:"Input fullname"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsxs("label",{className:"gap-3 flex text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:["Pincode ",e.jsx("div",{className:"text-red-500  font-thin",children:"(Pincode must be 6 digits)"})]}),e.jsx("input",{required:!0,value:s.pincode??"",onChange:t=>a(n({...s,pincode:t.target.value})),className:"appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"pincode",type:"text",placeholder:"Input pincode"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Discount"}),e.jsx("input",{required:!0,value:s.discount??"",onChange:t=>a(n({...s,discount:t.target.value.replace(/[^0-9.]/g,"")})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"discount",type:"text",placeholder:"Input discount"})]})]})}),e.jsx("div",{className:"flex items-center justify-center w-full flex-none",children:e.jsx("button",{className:"bg-red-500 hover:bg-red-400 p-3 w-full rounded-md text-white font-bold",children:"Submit"})})]})})})})}export{k as default};