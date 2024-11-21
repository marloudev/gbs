import{r as l,W as h,j as s}from"./app-fd6d6e0e.js";import{I as p}from"./TextInput-17ab919f.js";import{I as i}from"./InputLabel-cfc8e18a.js";import{P as v}from"./PrimaryButton-6b007b7d.js";import{T as m}from"./TextField-db3b16ac.js";import{q as g}from"./transition-f8b713ea.js";import"./clsx-0839fdbe.js";import"./memoTheme-099903ef.js";import"./useSlot-57cd7625.js";import"./resolveComponentProps-3112ecbb.js";import"./TransitionGroupContext-8cc54e6b.js";import"./InputBase-14cc39ee.js";import"./isHostComponent-73d6e646.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./debounce-517eeb3c.js";import"./Popover-acdf90d7.js";import"./Modal-4ab866e2.js";import"./useTheme-cd2043a8.js";import"./utils-b1122307.js";import"./Paper-4a8af81c.js";import"./Grow-b8595bd3.js";import"./useId-5948e6bd.js";import"./createSimplePaletteValueFilter-697dba8e.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-2ab5594d.js";import"./useControlled-4e3d8864.js";import"./createSvgIcon-bc1c8089.js";import"./use-flags-875e698a.js";import"./open-closed-8e8d889f.js";function Y({className:u=""}){const n=l.useRef(),d=l.useRef(),{data:o,setData:t,errors:e,put:w,reset:a,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>a(),onError:c=>{c.password&&(a("password","password_confirmation"),n.current.focus()),c.current_password&&(a("current_password"),d.current.focus())}})};return s.jsxs("section",{className:u,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"current_password",value:"Current Password"}),s.jsx(m,{id:"current_password",ref:d,value:o.current_password,onChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(p,{message:e.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(i,{htmlFor:"password",value:"New Password"}),s.jsx(m,{id:"password",ref:n,value:o.password,onChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(p,{message:e.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(m,{id:"password_confirmation",value:o.password_confirmation,onChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(p,{message:e.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(v,{disabled:x,children:"Save"}),s.jsx(g,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{Y as default};