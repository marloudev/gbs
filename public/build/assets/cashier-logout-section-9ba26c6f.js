import{r as n,j as t,y as r}from"./app-73e956c4.js";import{l as c}from"./account-service-3a4bcfe3.js";function d(){n.useEffect(()=>{const e=o=>{o.key.toLowerCase()==="escape"&&s()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]);async function s(){try{await c(),r.visit("/")}catch{}}return t.jsxs("button",{className:"flex flex-col items-center justify-center bg-red-500",children:[t.jsx("h1",{className:"text-white text-5xl leading-tight font-black",children:"ESC"}),t.jsx("div",{className:"text-white",children:"LOGOUT"})]})}export{d as default};
