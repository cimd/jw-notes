import{Q as i}from"./QInput-aOKcImwq.js";import{Q as m}from"./QSpinnerHourglass-D6sI8DKd.js";import{Q as l}from"./QBtn-LIf1TL9v.js";import{Q as n}from"./QForm-CeXXneY4.js";import{Q as d}from"./QPage-CW88zJPQ.js";import{auth as p}from"./apis-DQM09prS.js";import{d as f,_ as u,o as g,c as h,u as t,J as r,K as a,v as c,L as w,M as Q,x as b,a2 as x}from"./index-CPXBor41.js";import"./use-file-dom-props-6q2ASvdB.js";import"./QSpinner-Zq-zkTSh.js";import"./use-dark-BVUz_ulx.js";import"./render-D-1utwwR.js";import"./focus-manager-BJWzFvJg.js";import"./use-key-composition-LfE98imi.js";import"./dom-D0uG0Gv7.js";import"./vm-B61G6sTM.js";import"./isTypedArray-V6sIBVz1.js";import"./http-CAOryOOa.js";const V=f({data(){return{formData:{email:""},loading:!1,showMessage:!1,message:null}},methods:{submitForm(){this.$refs.email.hasError||(this.loading=!0,this.loginError=!1,p.forgotPassword(this.formData.email).then(o=>{this.message=o.message}).catch(()=>{this.message="Email could not be found"}).then(()=>{this.loading=!1,this.showMessage=!0}))}}}),_={class:"fixed-top-left form-box"},v={class:"text-weight-regular text-center text-red text-italic",style:{"margin-top":"20px"}};function D(e,o,F,M,S,$){return g(),h(d,{class:"q-page-min-height-fixer"},{default:t(()=>[r("div",_,[a(n,{id:"forgot-password-form",ref:"Form",onSubmit:x(e.submitForm,["prevent"])},{default:t(()=>[a(i,{ref:"email",modelValue:e.formData.email,"onUpdate:modelValue":o[0]||(o[0]=s=>e.formData.email=s),label:"Email",name:"email",rules:[s=>!!s||"Required"]},null,8,["modelValue","rules"]),a(l,{color:"primary",label:"Recover Password",loading:e.loading,type:"submit"},{loading:t(()=>[a(m,{class:"on-left"}),c("Loading... ")]),_:1},8,["loading"]),r("div",v,[w(r("span",null,b(e.message),513),[[Q,e.showMessage]])])]),_:1},8,["onSubmit"])])]),_:1})}const z=u(V,[["render",D]]);export{z as default};
