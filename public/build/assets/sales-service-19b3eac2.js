async function n(s,a){return(await axios.get("/api/sales?page="+s+"&search="+a)).data}async function t(s){return(await axios.post("/api/sales",s)).data}export{t as a,n as g};
