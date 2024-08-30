import{D as be,s as f,A as ke,c6 as G,p as I,g as J,a as x,w as B,c7 as U,bd as Ce,f as X,h as Y,m as we,q as b,t as Se,n as Te,d as qe,_ as ze,o as D,I as M,x as Q,y as xe,K as Be,Q as $e,L as Pe,M as Le,J as Ee,N as Ne}from"./index-CPXBor41.js";import{Q as F,a as He}from"./QBtn-LIf1TL9v.js";import{Q as Oe,a as Fe}from"./components-BkkrhxcC.js";import{d as K,b as Re}from"./QItem-xZmXR_F9.js";import{h as _e}from"./render-D-1utwwR.js";import{u as Ae,a as je}from"./use-dark-BVUz_ulx.js";import{a as Ie}from"./vm-B61G6sTM.js";import{i as Ue}from"./use-file-dom-props-6q2ASvdB.js";import{a as De}from"./focus-manager-BJWzFvJg.js";import"./QSpinner-Zq-zkTSh.js";import"./dom-D0uG0Gv7.js";import"./use-model-toggle-B0lJUWJs.js";import"./focusout-R0Pxo-jF.js";import"./use-timeout-b2Ost2wr.js";import"./scroll-DuwlRRaI.js";import"./isTypedArray-V6sIBVz1.js";import"./Action-BeMcUDL_.js";import"./QSpace-BHKl-E7w.js";function Z(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const i=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,l=i.display;return l==="block"||l==="table"?e:Z(e.parentNode)}function H(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function V(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let i=0;t.count!==0&&i<e.childNodes.length;i++)o=V(e.childNodes[i],t,o);return o}const Me=/^https?:\/\//;class Qe{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(H(t.anchorNode,this.el,!0)&&H(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Z(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),i=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),i.removeAllRanges(),i.addRange(o)):(i.selectAllChildren(this.el),i.collapseToEnd())}savePosition(){let t=-1,o;const i=document.getSelection(),l=this.el.parentNode;if(i.focusNode&&H(i.focusNode,l))for(o=i.focusNode,t=i.focusOffset;o&&o!==l;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),i=V(this.el,{count:this.savedPos});i&&(i.collapse(!1),o.removeAllRanges(),o.addRange(i))}}hasParent(t,o){const i=o?this.parent:this.blockParent;return i!==null?i.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,i=this.parent){return i===null?!1:t.includes(i.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,i.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const i=document.queryCommandValue(t);return i===`"${o}"`||i===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const l=document.queryCommandState(t);return o!==void 0?l===o:l}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,i=be){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){i();const l=window.open();l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),l.print(),l.close();return}else if(t==="link"){const l=this.getParentAttribute("href");if(l===null){const c=this.selectWord(this.selection),a=c?c.toString():"";if(!a.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=Me.test(a)?a:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(c.getRangeAt(0))}else this.eVm.editLinkUrl.value=l,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),i();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),i();return}document.execCommand(t,!1,o),i()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const i=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const l=t.focusNode,c=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",i[0],"character"),t.modify("move",i[1],"word"),t.extend(l,c),t.modify("extend",i[1],"character"),t.modify("extend",i[0],"word"),t}}function ee(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function R(e){return f("div",{class:"q-editor__toolbar-group"},e)}function te(e,t,o,i=!1){const l=i||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),c=[];if(t.tip&&e.$q.platform.is.desktop){const a=t.key?f("div",[f("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;c.push(f(Oe,{delay:1e3},()=>[f("div",{innerHTML:t.tip}),a]))}return f(F,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:l?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:l&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(a){o&&o(),ee(a,t,e)}},()=>c)}function Ke(e,t){const o=t.list==="only-icons";let i=t.label,l=t.icon!==null?t.icon:void 0,c,a;function d(){g.component.proxy.hide()}if(o)a=t.options.map(s=>{const m=s.type===void 0?e.caret.is(s.cmd,s.param):!1;return m&&(i=s.tip,l=s.icon!==null?s.icon:void 0),te(e,s,d,m)}),c=e.toolbarBackgroundClass.value,a=[R(a)];else{const s=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,m=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,S=t.list==="no-icons";a=t.options.map(p=>{const $=p.disable?p.disable(e):!1,C=p.type===void 0?e.caret.is(p.cmd,p.param):!1;C&&(i=p.tip,l=p.icon!==null?p.icon:void 0);const T=p.htmlTip;return f(Re,{active:C,activeClass:s,clickable:!0,disable:$,dense:!0,onClick(q){d(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),ee(q,p,e)}},()=>[S===!0?null:f(K,{class:C?s:m,side:!0},()=>f(He,{name:p.icon!==null?p.icon:void 0})),f(K,T?()=>f("div",{class:"text-no-wrap",innerHTML:p.htmlTip}):p.tip?()=>f("div",{class:"text-no-wrap"},p.tip):void 0)])}),c=[e.toolbarBackgroundClass.value,m]}const y=t.highlight&&i!==t.label,g=f(Fe,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:y?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:y&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:i,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:l,contentClass:c,onShow:s=>e.emit("dropdownShow",s),onHide:s=>e.emit("dropdownHide",s),onBeforeShow:s=>e.emit("dropdownBeforeShow",s),onBeforeHide:s=>e.emit("dropdownBeforeHide",s)},()=>a);return g}function We(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>R(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?_e(e.slots[o.slot]):o.type==="dropdown"?Ke(e,o):te(e,o))))}function Ge(e,t,o,i={}){const l=Object.keys(i);if(l.length===0)return{};const c={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return l.forEach(a=>{const d=i[a];c[a]={cmd:"fontName",param:d,icon:o,tip:d,htmlTip:`<font face="${d}">${d}</font>`}}),c}function Je(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const i=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[f("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),f("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:l=>{ke(l),o=l.target.value},onKeydown:l=>{if(G(l)!==!0)switch(l.keyCode){case 13:return I(l),i();case 27:I(l),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),R([f(F,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),f(F,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:i})])]}}let z=0;const Xe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ye=["update:fullscreen","fullscreen"];function Ze(){const e=J(),{props:t,emit:o,proxy:i}=e;let l,c,a;const d=x(!1);Ie(e)===!0&&B(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&s()}),B(()=>t.fullscreen,m=>{d.value!==m&&y()}),B(d,m=>{o("update:fullscreen",m),o("fullscreen",m)});function y(){d.value===!0?s():g()}function g(){d.value!==!0&&(d.value=!0,a=i.$el.parentNode,a.replaceChild(c,i.$el),document.body.appendChild(i.$el),z++,z===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:s},U.add(l))}function s(){d.value===!0&&(l!==void 0&&(U.remove(l),l=void 0),a.replaceChild(i.$el,c),d.value=!1,z=Math.max(0,z-1),z===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return Ce(()=>{c=document.createElement("span")}),X(()=>{t.fullscreen===!0&&g()}),Y(s),Object.assign(i,{toggleFullscreen:y,setFullscreen:g,exitFullscreen:s}),{inFullscreen:d,toggleFullscreen:y}}const Ve=Object.prototype.toString,O=Object.prototype.hasOwnProperty,et=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function W(e){if(e!==Object(e)||et.has(Ve.call(e))===!0||e.constructor&&O.call(e,"constructor")===!1&&O.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||O.call(e,t)}function oe(){let e,t,o,i,l,c,a=arguments[0]||{},d=1,y=!1;const g=arguments.length;for(typeof a=="boolean"&&(y=a,a=arguments[1]||{},d=2),Object(a)!==a&&typeof a!="function"&&(a={}),g===d&&(a=this,d--);d<g;d++)if((e=arguments[d])!==null)for(t in e)o=a[t],i=e[t],a!==i&&(y===!0&&i&&((l=Array.isArray(i))||W(i)===!0)?(l===!0?c=Array.isArray(o)===!0?o:[]:c=W(o)===!0?o:{},a[t]=oe(y,c,i)):i!==void 0&&(a[t]=i));return a}const tt=we({name:"QEditor",props:{...Ae,...Xe,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default:()=>[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Ye,"update:modelValue","keydown","click","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o}){const{proxy:i}=J(),{$q:l}=i,c=je(e,l),{inFullscreen:a,toggleFullscreen:d}=Ze(),y=Ue(),g=x(null),s=x(null),m=x(null),S=x(!1),p=b(()=>!e.readonly&&!e.disable);let $,C,T=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),$=window.getComputedStyle(document.body).fontFamily;const q=b(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),ne=b(()=>({type:"a",flat:e.toolbarOutline!==!0&&e.toolbarPush!==!0,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!p.value,size:"sm"})),P=b(()=>{const n=l.lang.editor,r=l.iconSet.editor;return{bold:{cmd:"bold",icon:r.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:r.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:r.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:r.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:r.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:r.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:r.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:r.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:u=>u.caret&&!u.caret.can("link"),icon:r.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:r.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:r.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:r.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:r.left,tip:n.left},center:{cmd:"justifyCenter",icon:r.center,tip:n.center},right:{cmd:"justifyRight",icon:r.right,tip:n.right},justify:{cmd:"justifyFull",icon:r.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:r.print,tip:n.print,key:80},outdent:{type:"no-state",disable:u=>u.caret&&!u.caret.can("outdent"),cmd:"outdent",icon:r.outdent,tip:n.outdent},indent:{type:"no-state",disable:u=>u.caret&&!u.caret.can("indent"),cmd:"indent",icon:r.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:r.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:r.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:r.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:r.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:r.heading1||r.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:r.heading2||r.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:r.heading3||r.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:r.heading4||r.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:r.heading5||r.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:r.heading6||r.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:r.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:r.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:r.size1||r.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:r.size2||r.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:r.size3||r.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:r.size4||r.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:r.size5||r.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:r.size6||r.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:r.size7||r.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),_=b(()=>{const n=e.definitions||{},r=e.definitions||e.fonts?oe(!0,{},P.value,n,Ge($,l.lang.editor.defaultFont,l.iconSet.editor.font,e.fonts)):P.value;return e.toolbar.map(u=>u.map(h=>{if(h.options)return{type:"dropdown",icon:h.icon,label:h.label,size:"sm",dense:!0,fixedLabel:h.fixedLabel,fixedIcon:h.fixedIcon,highlight:h.highlight,list:h.list,options:h.options.map(ye=>r[ye])};const k=r[h];return k?k.type==="no-state"||n[h]&&(k.cmd===void 0||P.value[k.cmd]&&P.value[k.cmd].type==="no-state")?k:Object.assign({type:"toggle"},k):{type:"slot",slot:h}}))}),v={$q:l,props:e,slots:t,emit:o,inFullscreen:a,toggleFullscreen:d,runCmd:E,isViewingSource:S,editLinkUrl:m,toolbarBackgroundClass:q,buttonProps:ne,contentRef:s,buttons:_,setContent:L};B(()=>e.modelValue,n=>{T!==n&&(T=n,L(n,!0))}),B(m,n=>{o(`link${n?"Show":"Hide"}`)});const re=b(()=>e.toolbar&&e.toolbar.length!==0),ie=b(()=>{const n={},r=u=>{u.key&&(n[u.key]={cmd:u.cmd,param:u.param})};return _.value.forEach(u=>{u.forEach(h=>{h.options?h.options.forEach(r):r(h)})}),n}),le=b(()=>a.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),ae=b(()=>`q-editor q-editor--${S.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(a.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(c.value===!0?" q-editor--dark q-dark":"")),se=b(()=>[e.contentClass,"q-editor__content",{col:a.value,"overflow-auto":a.value||e.maxHeight}]),ue=b(()=>e.disable===!0?{"aria-disabled":"true"}:{});function ce(){if(s.value!==null){const n=`inner${S.value===!0?"Text":"HTML"}`,r=s.value[n];r!==e.modelValue&&(T=r,o("update:modelValue",r))}}function de(n){if(o("keydown",n),n.ctrlKey!==!0||G(n)===!0){w();return}const r=n.keyCode,u=ie.value[r];if(u!==void 0){const{cmd:h,param:k}=u;Se(n),E(h,k,!1)}}function fe(n){w(),o("click",n)}function pe(n){if(s.value!==null){const{scrollTop:r,scrollHeight:u}=s.value;C=u-r}v.caret.save(),o("blur",n)}function he(n){Te(()=>{s.value!==null&&C!==void 0&&(s.value.scrollTop=s.value.scrollHeight-C)}),o("focus",n)}function me(n){const r=g.value;if(r!==null&&r.contains(n.target)===!0&&(n.relatedTarget===null||r.contains(n.relatedTarget)!==!0)){const u=`inner${S.value===!0?"Text":"HTML"}`;v.caret.restorePosition(s.value[u].length),w()}}function ge(n){const r=g.value;r!==null&&r.contains(n.target)===!0&&(n.relatedTarget===null||r.contains(n.relatedTarget)!==!0)&&(v.caret.savePosition(),w())}function A(){C=void 0}function j(n){v.caret.save()}function L(n,r){if(s.value!==null){r===!0&&v.caret.savePosition();const u=`inner${S.value===!0?"Text":"HTML"}`;s.value[u]=n,r===!0&&(v.caret.restorePosition(s.value[u].length),w())}}function E(n,r,u=!0){N(),v.caret.restore(),v.caret.apply(n,r,()=>{N(),v.caret.save(),u&&w()})}function w(){setTimeout(()=>{m.value=null,i.$forceUpdate()},1)}function N(){De(()=>{s.value!==null&&s.value.focus({preventScroll:!0})})}function ve(){return s.value}return X(()=>{v.caret=i.caret=new Qe(s.value,v),L(e.modelValue),w(),document.addEventListener("selectionchange",j)}),Y(()=>{document.removeEventListener("selectionchange",j)}),Object.assign(i,{runCmd:E,refreshToolbar:w,focus:N,getContentEl:ve}),()=>{let n;if(re.value){const r=[f("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+q.value},We(v))];m.value!==null&&r.push(f("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+q.value},Je(v))),n=f("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},r)}return f("div",{ref:g,class:ae.value,style:{height:a.value===!0?"100%":null},...ue.value,onFocusin:me,onFocusout:ge},[n,f("div",{ref:s,style:le.value,class:se.value,contenteditable:p.value,placeholder:e.placeholder,...y.listeners.value,onInput:ce,onKeydown:de,onClick:fe,onBlur:pe,onFocus:he,onMousedown:A,onTouchstartPassive:A})])}}}),ot=qe({props:{value:{required:!1,type:String,default:""},height:{required:!1,type:String,default:"200px"},label:{required:!1,type:String},dataCy:{required:!1,type:String},placeholder:{required:!1,type:String,default:"Type here..."},error:{type:Boolean,default:!1,required:!1},errorMessage:{default:"Required",required:!1,type:String}},data(){return{toolbar:[["left","center","right","justify"],["bold","italic","strike","underline"],["link","unordered","ordered","outdent","indent"],["undo","redo"],["fullscreen"]]}},computed:{style(){return this.error?"border-color: #CB2C30; border-width: 2px; border-style: solid;":""}}}),nt={key:0,class:"text-uppercase form-section-label"};function rt(e,t,o,i,l,c){return D(),M(Ne,null,[e.label?(D(),M("span",nt,Q(e.label),1)):xe("",!0),Be(tt,{class:"q-mt-xs","data-cy":e.dataCy,error:e.error,"error-message":e.errorMessage,height:e.height,label:e.label,"model-value":e.value,placeholder:e.placeholder,style:$e(e.style),toolbar:e.toolbar,"onUpdate:modelValue":t[0]||(t[0]=a=>e.$emit("update:value",a))},null,8,["data-cy","error","error-message","height","label","model-value","placeholder","style","toolbar"]),Pe(Ee("div",{class:"error-message text-negative",role:"alert"},Q(e.errorMessage),513),[[Le,e.error]])],64)}const St=ze(ot,[["render",rt],["__scopeId","data-v-605942eb"]]);export{St as default};
