import{r as s,p as c}from"./app-f36650ec.js";let u=0;function f(t){const[e,a]=s.useState(t),o=t||e;return s.useEffect(()=>{e==null&&(u+=1,a(`mui-${u}`))},[e]),o}const l={...c},n=l.useId;function d(t){if(n!==void 0){const e=n();return t??e}return f(t)}export{d as u};
