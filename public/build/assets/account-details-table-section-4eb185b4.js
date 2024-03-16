import{u as a,j as e}from"./app-73e956c4.js";import{A as i}from"./account-details-search-section-c7e7a878.js";import"./account-details-d175f865.js";function x(){const{account_details:s}=a(t=>t.account_details);return e.jsxs("section",{className:"container px-2 my-4 mx-auto",children:[e.jsxs("div",{className:"mt-6 md:flex md:items-center md:justify-between",children:[e.jsx("div",{className:"sm:flex sm:items-center sm:justify-between",children:e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800 ",children:"Cashier Collection Details"})})})}),e.jsx(i,{})]}),e.jsx("div",{className:"flex flex-col mt-6",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsxs("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:[e.jsx("div",{className:"overflow-hidden border border-gray-200  md:rounded-lg  min-h-[68vh]",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200  ",children:[e.jsx("thead",{className:"bg-gray-50 ",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ",children:e.jsx("button",{className:"flex items-center gap-x-3 focus:outline-none",children:e.jsx("span",{children:"Date Collected"})})}),e.jsx("th",{scope:"col",className:"px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  ",children:"Cashier Name"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  ",children:"Total Amount"}),e.jsx("th",{scope:"col",className:"px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  ",children:"Action"})]})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200 ",children:s.map((t,l)=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{children:e.jsx("h2",{className:"font-medium text-gray-800   ",children:t.date})})}),e.jsx("td",{className:"px-12 py-4 text-sm font-medium whitespace-nowrap",children:e.jsx("div",{className:"inline py-1 text-sm font-normal rounded-full",children:t.account.name})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsxs("div",{children:["₱ ",t.total_sum.toFixed(2)]})}),e.jsx("td",{className:"px-4 py-4 text-sm whitespace-nowrap",children:e.jsx("div",{className:"flex items-center",children:"Action"})})]},l))})]})}),e.jsxs("div",{className:"mt-6 sm:flex sm:items-center sm:justify-between ",children:[e.jsxs("div",{className:"text-sm text-gray-500  ",children:["Page ",e.jsx("span",{className:"font-medium text-gray-700 ",children:"1 of 10"})]}),e.jsxs("div",{className:"flex items-center mt-4 gap-x-4 sm:mt-0",children:[e.jsxs("a",{href:"#",className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100  ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 rtl:-scale-x-100",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"})}),e.jsx("span",{children:"previous"})]}),e.jsxs("a",{href:"#",className:"flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ",children:[e.jsx("span",{children:"Next"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5 rtl:-scale-x-100",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})]})]})})})]})}export{x as default};
