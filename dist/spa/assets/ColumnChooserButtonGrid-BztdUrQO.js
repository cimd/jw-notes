import{a as ce,Q as H}from"./QBtn-LIf1TL9v.js";import{s,m as U,q as n,a as c,g as ve,a8 as he,w as de,a3 as me,a9 as be,h as fe,L as O,d as ze,_ as pe,r as Se,o as k,c as $,u as S,K as h,I as B,N as ge,O as ye,y as Ce}from"./index-CPXBor41.js";import{u as _e,a as ke,b as qe}from"./use-checkbox-DBc4kT_F.js";import{Q as V}from"./QSeparator-ijjLOKF9.js";import{u as Oe,a as Te}from"./use-dark-BVUz_ulx.js";import{Q as E,a as je}from"./QScrollObserver-DvFWo_iW.js";import{T as D}from"./TouchPan-DCwgKmrA.js";import{g as q,Q as we}from"./QItem-xZmXR_F9.js";import{b as T,c as W}from"./scroll-DuwlRRaI.js";import{d as xe}from"./render-D-1utwwR.js";import{Q as Ae,a as Pe}from"./QCardActions-Dq7syfRn.js";import{Q as Qe}from"./QSpace-BHKl-E7w.js";import{C as N}from"./ClosePopup-BmUXs1l2.js";import"./QSpinner-Zq-zkTSh.js";import"./dom-D0uG0Gv7.js";import"./vm-B61G6sTM.js";import"./use-file-dom-props-6q2ASvdB.js";import"./focus-manager-BJWzFvJg.js";import"./focusout-R0Pxo-jF.js";const Me=s("div",{key:"svg",class:"q-checkbox__bg absolute"},[s("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[s("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),s("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),G=U({name:"QCheckbox",props:_e,emits:ke,setup(l){function i(m,u){const v=n(()=>(m.value===!0?l.checkedIcon:u.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>v.value!==null?[s("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[s(ce,{class:"q-checkbox__icon",name:v.value})])]:[Me]}return qe("checkbox",i)}}),L=["vertical","horizontal"],j={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},R={prevent:!0,mouse:!0,mouseAllDir:!0},F=l=>l>=250?50:Math.ceil(l/5),Ie=U({name:"QScrollArea",props:{...Oe,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:i,emit:m}){const u=c(!1),v=c(!1),p=c(!1),r={vertical:c(0),horizontal:c(0)},e={vertical:{ref:c(null),position:c(0),size:c(0)},horizontal:{ref:c(null),position:c(0),size:c(0)}},{proxy:d}=ve(),K=Te(l,d.$q);let g=null,w;const b=c(null),X=n(()=>"q-scrollarea"+(K.value===!0?" q-scrollarea--dark":""));e.vertical.percentage=n(()=>{const t=e.vertical.size.value-r.vertical.value;if(t<=0)return 0;const o=q(e.vertical.position.value/t,0,1);return Math.round(o*1e4)/1e4}),e.vertical.thumbHidden=n(()=>(l.visible===null?p.value:l.visible)!==!0&&u.value===!1&&v.value===!1||e.vertical.size.value<=r.vertical.value+1),e.vertical.thumbStart=n(()=>e.vertical.percentage.value*(r.vertical.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=n(()=>Math.round(q(r.vertical.value*r.vertical.value/e.vertical.size.value,F(r.vertical.value),r.vertical.value))),e.vertical.style=n(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`})),e.vertical.thumbClass=n(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=n(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=n(()=>{const t=e.horizontal.size.value-r.horizontal.value;if(t<=0)return 0;const o=q(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(o*1e4)/1e4}),e.horizontal.thumbHidden=n(()=>(l.visible===null?p.value:l.visible)!==!0&&u.value===!1&&v.value===!1||e.horizontal.size.value<=r.horizontal.value+1),e.horizontal.thumbStart=n(()=>e.horizontal.percentage.value*(r.horizontal.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=n(()=>Math.round(q(r.horizontal.value*r.horizontal.value/e.horizontal.size.value,F(r.horizontal.value),r.horizontal.value))),e.horizontal.style=n(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`})),e.horizontal.thumbClass=n(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=n(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const Y=n(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),J=[[D,t=>{Q(t,"vertical")},void 0,{vertical:!0,...R}]],Z=[[D,t=>{Q(t,"horizontal")},void 0,{horizontal:!0,...R}]];function x(){const t={};return L.forEach(o=>{const a=e[o];t[o+"Position"]=a.position.value,t[o+"Percentage"]=a.percentage.value,t[o+"Size"]=a.size.value,t[o+"ContainerSize"]=r[o].value}),t}const A=he(()=>{const t=x();t.ref=d,m("scroll",t)},0);function P(t,o,a){if(L.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?W:T)(b.value,o,a)}function ee({height:t,width:o}){let a=!1;r.vertical.value!==t&&(r.vertical.value=t,a=!0),r.horizontal.value!==o&&(r.horizontal.value=o,a=!0),a===!0&&y()}function te({position:t}){let o=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,o=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,o=!0),o===!0&&y()}function le({height:t,width:o}){e.horizontal.size.value!==o&&(e.horizontal.size.value=o,y()),e.vertical.size.value!==t&&(e.vertical.size.value=t,y())}function Q(t,o){const a=e[o];if(t.isFirst===!0){if(a.thumbHidden.value===!0)return;w=a.position.value,v.value=!0}else if(v.value!==!0)return;t.isFinal===!0&&(v.value=!1);const z=j[o],_=r[o].value,ne=(a.size.value-_)/(_-a.thumbSize.value),se=t.distance[z.dist],ue=w+(t.direction===z.dir?1:-1)*se*ne;I(ue,o)}function M(t,o){const a=e[o];if(a.thumbHidden.value!==!0){const z=t[j[o].offset];if(z<a.thumbStart.value||z>a.thumbStart.value+a.thumbSize.value){const _=z-a.thumbSize.value/2;I(_/r[o].value*a.size.value,o)}a.ref.value!==null&&a.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function oe(t){M(t,"vertical")}function ae(t){M(t,"horizontal")}function y(){u.value=!0,g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,u.value=!1},l.delay),l.onScroll!==void 0&&A()}function I(t,o){b.value[j[o].scroll]=t}let f=null;function re(){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p.value=!0},d.$q.platform.is.ios?50:0)}function ie(){f!==null&&(clearTimeout(f),f=null),p.value=!1}let C=null;return de(()=>d.$q.lang.rtl,t=>{b.value!==null&&T(b.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),me(()=>{C={top:e.vertical.position.value,left:e.horizontal.position.value}}),be(()=>{if(C===null)return;const t=b.value;t!==null&&(T(t,C.left),W(t,C.top))}),fe(A.cancel),Object.assign(d,{getScrollTarget:()=>b.value,getScroll:x,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(t,o,a){P(t,o*(e[t].size.value-r[t].value)*(t==="horizontal"&&d.$q.lang.rtl===!0?-1:1),a)}}),()=>s("div",{class:X.value,onMouseenter:re,onMouseleave:ie},[s("div",{ref:b,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[s("div",{class:"q-scrollarea__content absolute",style:Y.value},xe(i.default,[s(E,{debounce:0,onResize:le})])),s(je,{axis:"both",onScroll:te})]),s(E,{debounce:0,onResize:ee}),s("div",{class:e.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:oe}),s("div",{class:e.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:ae}),O(s("div",{ref:e.vertical.ref,class:e.vertical.thumbClass.value,style:e.vertical.style.value,"aria-hidden":"true"}),J),O(s("div",{ref:e.horizontal.ref,class:e.horizontal.thumbClass.value,style:e.horizontal.style.value,"aria-hidden":"true"}),Z)])}});function He(l){return new Promise(i=>setTimeout(()=>{i()},l))}const $e=ze({props:{gridId:{required:!0,type:String}},data(){return{selectAll:null,dense:!1,size:"md",updateColumnChooser:0,columnsObj:[],startWatching:!1}},watch:{selectAll:function(l){this.startWatching&&this.columnsObj.forEach(i=>{i.visible=l})},columnsObj:{handler:function(){if(this.startWatching){this.startWatching=!1;const l=this.columnsObj[0].visible;this.columnsObj.forEach(i=>{i.visible!==l&&(this.selectAll=null)}),setTimeout(()=>{this.startWatching=!0},100)}},deep:!0}},mounted(){setTimeout(()=>{this.cloneGridColumnsObj()},200)},methods:{onCancelChooseColumns(){this.cloneGridColumnsObj()},async onChooseColumns(){this.$emit("updating"),await He(100);let l=document.getElementById(this.gridId).ej2_instances[0];l.columns.forEach(i=>{i.visible=this.columnsObj.find(m=>m.headerText===i.headerText).visible}),l.refresh(),this.$emit("updated")},cloneGridColumnsObj(){this.startWatching=!1;let l=0;try{let i=document.getElementById(this.gridId)?.ej2_instances[0];this.columnsObj=[],i.columns.forEach(u=>{const v={index:l,headerText:u.headerText,visible:u.visible,showInColumnChooser:u.showInColumnChooser};this.columnsObj.push(v),l++}),this.columnsObj.findIndex(u=>u.visible===!1)?this.selectAll=null:this.selectAll=!0,setTimeout(()=>{this.startWatching=!0},100)}catch(i){console.log(i)}}}});function Be(l,i,m,u,v,p){const r=Se("my-toolbar-button-dropdown");return k(),$(r,{"cy-label":"column-chooser",icon:"fa-solid fa-grid-2",label:"Columns",persistent:!0,tooltip:"Choose Grid Columns"},{default:S(()=>[h(we,{bordered:"",class:"column-chooser-q-list",separator:""},{default:S(()=>[h(Ae,{class:"scroll",style:{width:"250px"}},{default:S(()=>[h(G,{modelValue:l.selectAll,"onUpdate:modelValue":i[0]||(i[0]=e=>l.selectAll=e),checked:"false",color:"secondary",label:"Select All"},null,8,["modelValue"]),h(V),h(Ie,{style:{height:"500px","max-height":"50vh"}},{default:S(()=>[(k(!0),B(ge,null,ye(l.columnsObj,e=>(k(),B("div",{key:e.index},[e.showInColumnChooser?(k(),$(G,{key:0,modelValue:e.visible,"onUpdate:modelValue":d=>e.visible=d,checked:e.visible,color:"secondary",label:e.headerText},null,8,["modelValue","onUpdate:modelValue","checked","label"])):Ce("",!0)]))),128))]),_:1})]),_:1}),h(V),h(Pe,{class:"on-right"},{default:S(()=>[h(Qe),O(h(H,{id:"column-chooser-ok-btn",class:"text-secondary q-px-md",flat:"",label:"OK",onClick:l.onChooseColumns},null,8,["onClick"]),[[N]]),O(h(H,{flat:"",label:"Cancel",onClick:l.onCancelChooseColumns},null,8,["onClick"]),[[N]])]),_:1})]),_:1})]),_:1})}const at=pe($e,[["render",Be]]);export{at as default};
