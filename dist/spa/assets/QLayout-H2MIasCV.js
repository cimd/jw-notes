import{m as L,g as R,U as K,V as w,W as q,Z as P,q as r,s as c,$ as O,a as d,Y as U,a0 as g,w as j,a1 as I}from"./index-CPXBor41.js";import{h as M,d as V}from"./render-D-1utwwR.js";import{a as Y,Q as x}from"./QScrollObserver-DvFWo_iW.js";import{g as z}from"./scroll-DuwlRRaI.js";const D=L({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:u}}=R(),n=K(q,w);if(n===w)return console.error("QPageContainer needs to be child of QLayout"),w;P(O,!0);const f=r(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${u.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${u.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>c("div",{class:"q-page-container",style:f.value},M(m.default))}}),G=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:u}){const{proxy:{$q:n}}=R(),f=d(null),i=d(n.screen.height),y=d(t.container===!0?0:n.screen.width),S=d({position:0,direction:"down",inflectionPoint:0}),h=d(0),a=d(U.value===!0?0:z()),Q=r(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=r(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),T=r(()=>a.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),W=r(()=>a.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function F(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=o,t.onScroll!==void 0&&u("scroll",o)}}function B(e){const{height:o,width:s}=e;let l=!1;i.value!==o&&(l=!0,i.value=o,t.onScrollHeight!==void 0&&u("scrollHeight",o),b()),y.value!==s&&(l=!0,y.value=s),l===!0&&t.onResize!==void 0&&u("resize",e)}function E({height:e}){h.value!==e&&(h.value=e,b())}function b(){if(t.container===!0){const e=i.value>h.value?z():0;a.value!==e&&(a.value=e)}}let v=null;const $={instances:{},view:r(()=>t.view),isContainer:r(()=>t.container),rootRef:f,height:i,containerHeight:h,scrollbarWidth:a,totalWidth:r(()=>y.value+a.value),rows:r(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:g({size:0,offset:0,space:!1}),right:g({size:300,offset:0,space:!1}),footer:g({size:0,offset:0,space:!1}),left:g({size:300,offset:0,space:!1}),scroll:S,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,s){$[e][o]=s}};if(P(q,$),z()>0){let e=function(){l=null,p.classList.remove("hide-scrollbar")},o=function(){if(l===null){if(p.scrollHeight>n.screen.height)return;p.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(e,300)},s=function(C){l!==null&&C==="remove"&&(clearTimeout(l),e()),window[`${C}EventListener`]("resize",o)},l=null;const p=document.body;j(()=>t.container!==!0?"add":"remove",s),t.container!==!0&&s("add"),I(()=>{s("remove")})}return()=>{const e=V(m.default,[c(Y,{onScroll:F}),c(x,{onResize:B})]),o=c("div",{class:Q.value,style:H.value,ref:t.container===!0?void 0:f,tabindex:-1},e);return t.container===!0?c("div",{class:"q-layout-container overflow-hidden",ref:f},[c(x,{onResize:E}),c("div",{class:"absolute-full",style:T.value},[c("div",{class:"scroll",style:W.value},[o])])]):o}}});export{G as Q,D as a};
