import{r as e}from"./app-fd6d6e0e.js";function i({controlled:t,default:s,name:c,state:f="value"}){const{current:a}=e.useRef(t!==void 0),[u,n]=e.useState(s),o=a?t:u,l=e.useCallback(r=>{a||n(r)},[]);return[o,l]}export{i as u};