import{a as r,Q as n}from"./QAvatar-BzrAB-Xb.js";import{Q as i,a as s}from"./QCardActions-DxbGMIGY.js";import{Q as l}from"./QSpace-BlS8Pr5O.js";import{Q as m}from"./QBtn-uIBLO3Xd.js";import{C as c}from"./ClosePopup-3QzWPr0E.js";import{d,_ as p,r as f,o as _,c as u,u as o,K as e,J as C,x as h,L as Q}from"./index-BtKb8wT8.js";import"./use-dark-Ck3iFzaA.js";import"./render-DRulWU2P.js";import"./dom-DXkm9Q41.js";import"./vm-B61G6sTM.js";import"./focusout-CvlG-7VT.js";import"./focus-manager-BJWzFvJg.js";const b=d({name:"DeleteConfirmationModal",props:{label:{type:String,required:!1,default:"Confirm Delete?"}},data(){return{}},methods:{onConfirmed(){this.$emit("confirmed"),this.$emit("close")}}}),y={class:"q-ml-sm"};function w(t,x,$,g,v,D){const a=f("my-cancel-button");return _(),u(n,{class:"q-pa-md","cy-label":"delete-modal",style:{"max-width":"300px",width:"300px"}},{default:o(()=>[e(i,{class:"row items-center"},{default:o(()=>[e(r,{color:"negative",icon:"sym_o_warning_amber",outlined:"","text-color":"white"}),C("span",y,h(t.label),1)]),_:1}),e(s,null,{default:o(()=>[e(a),e(l),Q(e(m,{id:"confirm-delete-btn",color:"negative","data-cy":"confirm",flat:"",label:"Confirm",onClick:t.onConfirmed},null,8,["onClick"]),[[c]])]),_:1})]),_:1})}const j=p(b,[["render",w]]);export{j as default};
