import{r,a as u,u as i,j as e,g as n,c as m}from"./app-15ab478a.js";import p from"./drawer-action-9d144f8f.js";import{a as x}from"./account-thunk-4e0362ad.js";import"./XMarkIcon-dbf16eea.js";import"./transition-5c7eb315.js";import"./use-flags-3d563ab4.js";import"./open-closed-58930c28.js";import"./dialog-9372f3d3.js";import"./use-root-containers-9e93ac5e.js";import"./keyboard-a9d51385.js";import"./description-81ebea90.js";import"./account-details-0e4838f4.js";import"./account-service-7a707311.js";function S(){const[c,l]=r.useState(!1),s=u(),{accountsForm:a}=i(t=>t.accounts),{toastStatus:o}=i(t=>t.app);r.useEffect(()=>{o.status=="success"&&l(!1)},[o.status]);function d(t){t.preventDefault(),m.dispatch(x())}return e.jsx("div",{children:e.jsx(p,{open:c,setOpen:l,button:e.jsxs("button",{onClick:()=>l(!0),className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"Create Account"})]}),children:e.jsx("div",{className:"flex h-full w-full",children:e.jsxs("form",{onSubmit:d,className:" flex flex-col w-full",children:[e.jsx("div",{className:"flex-none",children:e.jsx("div",{className:"text-2xl font-bold",children:"Create Account"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Fullname"}),e.jsx("input",{required:!0,value:a.name??"",onChange:t=>s(n({...a,name:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Input name"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Email"}),e.jsx("input",{required:!0,value:a.email??"",onChange:t=>s(n({...a,email:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",placeholder:"Input email"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Password"}),e.jsx("input",{required:!0,value:a.password??"",onChange:t=>s(n({...a,password:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"text",placeholder:"Input password"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Role"}),e.jsxs("select",{name:"role",id:"role",className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:t=>s(n({...a,role:t.target.value})),children:[e.jsx("option",{disabled:!0,selected:!0,children:"Select Role"}),e.jsx("option",{value:"admin",children:"Admin"}),e.jsx("option",{value:"cashier",children:"Cashier"})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"username",children:"Contact"}),e.jsx("input",{required:!0,value:a.contact??"",onChange:t=>s(n({...a,contact:t.target.value})),className:" appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"contact",type:"number",placeholder:"Input contact"})]})]})}),e.jsx("div",{className:"flex items-center justify-center w-full flex-none",children:e.jsx("button",{className:"bg-red-500 hover:bg-red-600 p-3 w-full rounded-md text-white font-bold",children:"Submit"})})]})})})})}export{S as default};