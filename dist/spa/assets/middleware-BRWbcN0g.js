import{b as m}from"./index-CPXBor41.js";import{auth as i}from"./apis-DQM09prS.js";import"./isTypedArray-V6sIBVz1.js";import"./http-CAOryOOa.js";const p=m(({router:a})=>{a.beforeEach((t,r,e)=>{t.matched.some(o=>o.meta.requiresAuth)?i.isAuthenticated()?e():e({path:"/auth/login"}):t.name==="login"&&i.isAuthenticated()?e({path:"/"}):e()})});export{p as default};
