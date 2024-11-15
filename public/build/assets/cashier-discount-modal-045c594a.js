import{r as t,u as N,a as C,j as e,ar as F}from"./app-05ddd05a.js";import y from"./Input-d7714d93.js";import{a as S}from"./loyal-card-service-8d6deeca.js";import{B as k}from"./Button-886dd74e.js";import{q as m}from"./transition-948c1256.js";import{_ as c}from"./dialog-fe8d6c3f.js";import"./TextField-9a84bcc6.js";import"./clsx-0839fdbe.js";import"./memoTheme-da397490.js";import"./useSlot-9a4a0be9.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-91378426.js";import"./InputBase-4c8fcebb.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-ba701528.js";import"./Modal-ffb00456.js";import"./useTheme-04e79c76.js";import"./utils-2674f20f.js";import"./getReactElementRef-c11325f7.js";import"./Paper-5fa38c0b.js";import"./Grow-a8bfdecb.js";import"./useId-80eb637d.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-5727c2f2.js";import"./useControlled-0201a76a.js";import"./createSvgIcon-2cf123f3.js";import"./ButtonBase-ec27260f.js";import"./isFocusVisible-e8076040.js";import"./use-flags-364307a8.js";import"./open-closed-4cd1727a.js";import"./use-root-containers-443486e8.js";import"./keyboard-31d72bd3.js";import"./description-0558fba1.js";function pe({inputRef:n}){const[g,s]=t.useState(!1),{selectedItem:d,payment:D}=N(a=>a.cashier),p=t.useRef(null),[u,l]=t.useState(""),[x,f]=t.useState(""),[j,i]=t.useState(""),[o,h]=t.useState({}),v=C();t.useEffect(()=>{s(!!d)},[d]),t.useEffect(()=>{const a=r=>{r.key==="L"||r.key==="l"?(s(!0),setTimeout(()=>{n.current.focus()},200)):(r.key==="C"||r.key==="c")&&s(!1)};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}},[]);async function b(a){a.preventDefault(),i("");const r=await S(u);r.data?(l(""),h(r.data)):(l(""),i("Incorrect Discound Code!"))}async function w(a){a.preventDefault(),i(""),o.pincode==x?(v(F(o.discount)),i(""),s(!1),f(""),h({})):i("Incorrect Pincode!")}return e.jsxs(e.Fragment,{children:[e.jsxs(k,{variant:"contained",onClick:()=>s(!0),className:"flex flex-col items-center justify-center bg-red-500",children:[e.jsx("h1",{className:"text-white text-5xl leading-tight font-black",children:"L"}),e.jsx("div",{className:"text-white",children:"DISCOUNT"})]}),e.jsx(m.Root,{show:g,as:t.Fragment,children:e.jsxs(c,{as:"div",className:"relative z-10",initialFocus:p,onClose:s,children:[e.jsx(m.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsx(m.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs(c.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[e.jsx("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[e.jsx(c.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:"DISCOUNT"}),e.jsx("div",{className:"text-red-500",children:j}),e.jsxs("div",{className:"mt-5",children:[!o.pincode&&e.jsx("form",{onSubmit:b,children:e.jsx(y,{inputRef:n,autofocus:!0,onChange:l,value:u,name:"barcode",type:"text",label:"Enter Barcode"})}),o.pincode&&e.jsx("form",{onSubmit:w,children:e.jsx(y,{inputRef:n,autofocus:!0,onChange:f,value:x,name:"pincode",type:"text",label:"Enter Pincode"})})]})]})})}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e.jsx("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>s(!1),children:"Submit"}),e.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>s(!1),ref:p,children:"Cancel"})]})]})})})})]})})]})}export{pe as default};
