import{w as s}from"./app-f36650ec.js";async function e(){return(await s.get("/api/accounts")).data}async function n(a){return(await s.post("/api/accounts",a)).data}async function c(a){return(await s.post("/logout")).data}export{n as c,e as g,c as l};
