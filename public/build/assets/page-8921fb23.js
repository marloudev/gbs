import{Q as s,af as m,u as e,r as n,c,j as p}from"./app-15ab478a.js";import d from"./dashboard-line-cart-section-ea87c2a1.js";import l from"./dashboard-periodic-tab-section-e59b563e.js";import u from"./administrator-layout-98e786db.js";import"./index-19f8bb6a.js";import"./useTheme-75d0d319.js";import"./Box-48cf9779.js";import"./createSimplePaletteValueFilter-00a2c87d.js";import"./clsx-0839fdbe.js";import"./AppBar-f0159358.js";import"./Paper-ae895174.js";import"./react-is.production.min-a192e302.js";import"./TransitionGroupContext-1ef98a35.js";import"./debounce-517eeb3c.js";import"./ownerWindow-03d1c82d.js";import"./ownerDocument-613eb639.js";import"./useSlotProps-5e1e5ce7.js";import"./resolveComponentProps-3112ecbb.js";import"./createSvgIcon-7d0e84c7.js";import"./ButtonBase-7d01a9d7.js";import"./isFocusVisible-e8076040.js";import"./logout-section-1466f2c5.js";import"./Modal-b7bf893a.js";import"./useSlot-cf40afab.js";import"./utils-be36f58c.js";import"./getReactElementRef-92371454.js";import"./useId-c66f7691.js";import"./Typography-fa5e53d5.js";import"./Button-d237e5ec.js";import"./Slide-62e85ba9.js";import"./account-details-0e4838f4.js";import"./notification-section-e715d465.js";import"./Grow-035b1dce.js";import"./IconButton-16fe3eeb.js";import"./Stack-ea7d5521.js";import"./Close-d8d4619c.js";import"./Popover-ff0cb7fe.js";import"./isHostComponent-73d6e646.js";import"./listItemTextClasses-03136507.js";import"./useControlled-7a74560a.js";import"./Collapse-7a1d33ac.js";import"./Drawer-9c03a126.js";async function f(r,t){return(await s.get(`/api/analytics?year=${r}&periodic=${t}`)).data}function y(){return async function(r,t){const{tab:o,year:a}=t().dashboard,i=(await f(a,o)).data;console.log("result",i),r(m.actions.setAnalytics(i))}}function at({auth:r}){const{year:t,tab:o,analytics:a}=e(i=>i.dashboard);return n.useEffect(()=>{c.dispatch(y())},[t,o]),p.jsxs(u,{user:r.user,children:[p.jsx(l,{}),p.jsx(d,{year:t,analytics:a,periodic:o})]})}export{at as default};
