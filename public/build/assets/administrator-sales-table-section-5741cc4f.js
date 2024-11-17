import{r,u as p,c as i,j as e,h as u}from"./app-7ce828bf.js";import{g as o}from"./sales-thunk-ab520994.js";import g from"./administrator-show-sales-item-section-df43f5a2.js";import"./sales-service-19b3eac2.js";import"./Button-ead979ed.js";import"./clsx-0839fdbe.js";import"./memoTheme-9e5d36f9.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./ButtonBase-ce4a96ac.js";import"./TransitionGroupContext-3cc3afcd.js";import"./isFocusVisible-e8076040.js";import"./Drawer-dac19da1.js";import"./useTheme-ac50545c.js";import"./Modal-4b1961da.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./resolveComponentProps-3112ecbb.js";import"./useSlot-686b7842.js";import"./utils-7875b360.js";import"./getReactElementRef-d2957806.js";import"./Paper-e874bdf8.js";import"./Slide-c765a1a8.js";import"./debounce-517eeb3c.js";import"./Box-656f4b8e.js";function E(){const[s,l]=r.useState(1),{sales:n}=p(t=>t.sales),[a,c]=r.useState("");r.useEffect(()=>{i.dispatch(o(s,a))},[s]);function x(){l(s-1)}function m(){l(s+1)}function d(t){t.preventDefault(),i.dispatch(o(s,a))}return e.jsx("div",{children:e.jsxs("section",{className:"container px-2 my-4 mx-auto",children:[e.jsxs("div",{className:"sm:flex sm:items-center sm:justify-between",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-800 ",children:"List of Sales"}),e.jsx("span",{className:"px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full",children:"240 vendors"})]})}),e.jsxs("div",{className:"flex items-center mt-4 gap-x-3",children:[e.jsxs("button",{className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_3098_154395)",children:e.jsx("path",{d:"M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832",stroke:"currentColor",strokeWidth:"1.67",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_3098_154395",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("span",{children:"Import"})]}),e.jsxs("button",{className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),e.jsx("span",{children:"Add vendor"})]})]})]}),e.jsx("div",{className:"mt-6 md:flex md:items-center md:justify-between",children:e.jsxs("form",{onSubmit:d,className:"relative flex items-center mt-4 md:mt-0",children:[e.jsx("span",{className:"absolute",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 mx-3 text-gray-400 ",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})}),e.jsx("input",{type:"text",onInput:t=>c(t.target.value),placeholder:"Search",className:"block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"}),e.jsx("button",{type:"submit",className:"p-2 bg-red-500 text-white hover:bg-red-400 mx-3 rounded-lg",children:"Search"})]})}),e.jsx("div",{className:"flex flex-col mt-6",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsxs("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:[e.jsx("div",{className:"overflow-hidden border border-gray-200  md:rounded-lg",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 ",children:[e.jsx("thead",{className:"bg-gray-50 ",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500",children:e.jsxs("button",{className:"flex items-center gap-x-3 focus:outline-none",children:[e.jsx("span",{children:"Sales ID"}),e.jsxs("svg",{className:"h-3",viewBox:"0 0 10 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.1"}),e.jsx("path",{d:"M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.1"}),e.jsx("path",{d:"M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.3"})]})]})}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Subtotal"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Discount"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Tax"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Change"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Tenders"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Total"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Sold At"}),e.jsx("th",{scope:"col",className:"px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500",children:"Action"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200 ",children:n.map((t,h)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{children:e.jsxs("h2",{className:"font-medium text-gray-800",children:["GB-",t.receipt_id]})})}),e.jsx("td",{className:"px-2 py-2 text-sm font-medium whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.subtotal})}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.discount})}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.tax})}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.change})}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.tenders})}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:e.jsx("h2",{className:"font-medium text-gray-800",children:t.total})}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:u(t.created_at).format("LLL")}),e.jsx("td",{className:"px-2 py-2 text-sm whitespace-nowrap",children:e.jsx(g,{id:t.id,data:t})})]},h))})]})}),e.jsxs("div",{className:"mt-6 sm:flex sm:items-center sm:justify-between ",children:[e.jsxs("div",{className:"text-sm text-gray-500 ",children:["Page ",e.jsx("span",{className:"font-medium text-gray-700 ",children:"1 of 10"})]}),e.jsxs("div",{className:"flex items-center mt-4 gap-x-4 sm:mt-0",children:[e.jsxs("button",{onClick:x,className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 rtl:-scale-x-100",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),e.jsx("span",{children:"previous"})]}),e.jsxs("button",{onClick:m,className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ",children:[e.jsx("span",{children:"Next"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 rtl:-scale-x-100",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]})]})})})]})})}export{E as default};
