import{r as s,j as t,y as i}from"./app-15ab478a.js";import{l as n}from"./account-service-7a707311.js";import{B as a}from"./Button-d237e5ec.js";import"./clsx-0839fdbe.js";import"./createSimplePaletteValueFilter-00a2c87d.js";import"./ButtonBase-7d01a9d7.js";import"./TransitionGroupContext-1ef98a35.js";import"./isFocusVisible-e8076040.js";function h(){s.useEffect(()=>{const e=r=>{r.key.toLowerCase()==="escape"&&o()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]);async function o(){try{await n(),i.visit("/")}catch{}}return t.jsxs(a,{variant:"contained",className:"flex flex-col items-center justify-center bg-red-500",children:[t.jsx("h1",{className:"text-white text-5xl leading-tight font-black",children:"ESC"}),t.jsx("div",{className:"text-white",children:"LOGOUT"})]})}export{h as default};