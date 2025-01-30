import{k as Q,c as f,h as m,l as N,r as w,m as Z,o as $,n as H,p as ee,q as K,g as O,t as E,i as te,u as L,v as D,w as q,x as le,y as ne,z as ie,A as ae,B as re,C as se,D as ue,E as B,G as P,a as ce,H as de,d as fe,I as ve,J as M,K as W,L as x,f as g,M as he,Q as ge,N as A,O as me,P as U,R as j,S as pe,U as ye,V as be,W as G,X as we}from"./index-CYXuh2yp.js";import{C as J}from"./ClosePopup-D1w53c-Y.js";import{u as Se,a as ze}from"./use-quasar-DeEg1DzJ.js";const xe=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:v}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:n.value},N(v.default))}}),Ce=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:v}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:n.value,role:"toolbar"},N(v.default))}});function Te(){const e=w(!Z.value);return e.value===!1&&$(()=>{e.value=!0}),{isHydrated:e}}const oe=typeof ResizeObserver<"u",X=oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},I=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:v}){let n=null,t,o={width:-1,height:-1};function a(r){r===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==o.width||i!==o.height)&&(o={width:r,height:i},v("resize",o))}}const{proxy:h}=O();if(h.trigger=a,oe===!0){let r;const i=p=>{t=h.$el.parentNode,t?(r=new ResizeObserver(a),r.observe(t),u()):p!==!0&&K(()=>{i(!0)})};return $(()=>{i()}),H(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),ee}else{let r=function(){n!==null&&(clearTimeout(n),n=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",a,E.passive),d=void 0)},i=function(){r(),t&&t.contentDocument&&(d=t.contentDocument.defaultView,d.addEventListener("resize",a,E.passive),u())};const{isHydrated:p}=Te();let d;return $(()=>{K(()=>{t=h.$el,t&&i()})}),H(r),()=>{if(p.value===!0)return m("object",{class:"q--avoid-card-border",style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:i})}}}}),qe=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:v,emit:n}){const{proxy:{$q:t}}=O(),o=te(D,L);if(o===L)return console.error("QHeader needs to be child of QLayout"),L;const a=w(parseInt(e.heightHint,10)),u=w(!0),h=f(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),r=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?a.value:0;const l=a.value-o.scroll.value.position;return l>0?l:0}),i=f(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),p=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),d=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=f(()=>{const l=o.rows.value.top,b={};return l[0]==="l"&&o.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),b});function c(l,b){o.update("header",l,b)}function S(l,b){l.value!==b&&(l.value=b)}function _({height:l}){S(a,l),c("size",l)}function R(l){p.value===!0&&S(u,!0),n("focusin",l)}q(()=>e.modelValue,l=>{c("space",l),S(u,!0),o.animate()}),q(r,l=>{c("offset",l)}),q(()=>e.reveal,l=>{l===!1&&S(u,e.modelValue)}),q(u,l=>{o.animate(),n("reveal",l)}),q(o.scroll,l=>{e.reveal===!0&&S(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const V={};return o.instances.header=V,e.modelValue===!0&&c("size",a.value),c("space",e.modelValue),c("offset",r.value),H(()=>{o.instances.header===V&&(o.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const l=le(v.default,[]);return e.elevated===!0&&l.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(m(I,{debounce:0,onResize:_})),m("header",{class:d.value,style:C.value,onFocusin:R},l)}}}),Qe=Q({name:"QPageContainer",setup(e,{slots:v}){const{proxy:{$q:n}}=O(),t=te(D,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;ne(ie,!0);const o=f(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>m("div",{class:"q-page-container",style:o.value},N(v.default))}}),{passive:Y}=E,Le=["both","horizontal","vertical"],Ve=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Le.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ae},emits:["scroll"],setup(e,{emit:v}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,a;q(()=>e.scrollTarget,()=>{r(),h()});function u(){t!==null&&t();const d=Math.max(0,se(o)),C=ue(o),c={top:d-n.position.top,left:C-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const S=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:d,left:C},n.directionChanged=n.direction!==S,n.delta=c,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),v("scroll",{...n})}function h(){o=re(a,e.scrollTarget),o.addEventListener("scroll",i,Y),i(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",i,Y),o=void 0)}function i(d){if(d===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[C,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(C),t=null}}}const{proxy:p}=O();return q(()=>p.$q.lang.rtl,u),$(()=>{a=p.$el.parentNode,h()}),H(()=>{t!==null&&t(),r()}),Object.assign(p,{trigger:i,getPosition:()=>n}),ee}}),$e=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:v,emit:n}){const{proxy:{$q:t}}=O(),o=w(null),a=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),h=w({position:0,direction:"down",inflectionPoint:0}),r=w(0),i=w(Z.value===!0?0:B()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),d=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),C=f(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=f(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function S(s){if(e.container===!0||document.qScrollPrevented!==!0){const y={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};h.value=y,e.onScroll!==void 0&&n("scroll",y)}}function _(s){const{height:y,width:T}=s;let z=!1;a.value!==y&&(z=!0,a.value=y,e.onScrollHeight!==void 0&&n("scrollHeight",y),V()),u.value!==T&&(z=!0,u.value=T),z===!0&&e.onResize!==void 0&&n("resize",s)}function R({height:s}){r.value!==s&&(r.value=s,V())}function V(){if(e.container===!0){const s=a.value>r.value?B():0;i.value!==s&&(i.value=s)}}let l=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:a,containerHeight:r,scrollbarWidth:i,totalWidth:f(()=>u.value+i.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:h,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,y,T){b[s][y]=T}};if(ne(D,b),B()>0){let s=function(){z=null,k.classList.remove("hide-scrollbar")},y=function(){if(z===null){if(k.scrollHeight>t.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(z);z=setTimeout(s,300)},T=function(F){z!==null&&F==="remove"&&(clearTimeout(z),s()),window[`${F}EventListener`]("resize",y)},z=null;const k=document.body;q(()=>e.container!==!0?"add":"remove",T),e.container!==!0&&T("add"),ce(()=>{T("remove")})}return()=>{const s=de(v.default,[m(Ve,{onScroll:S}),m(I,{onResize:_})]),y=m("div",{class:p.value,style:d.value,ref:e.container===!0?void 0:o,tabindex:-1},s);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:o},[m(I,{onResize:R}),m("div",{class:"absolute-full",style:C.value},[m("div",{class:"scroll",style:c.value},[y])])]):y}}}),_e=fe({__name:"MainLayout",setup(e){const v=Se(),n=ze(),{settingsState:t}=n,o=w(!1),a=w(t.openAIKey);function u(){o.value=!0}function h(){n.setOpenAIKey(a.value)}return $(()=>{t.openAIKey||v.dialog({title:"Open AI Key Required",message:"Please enter your Open AI key in settings",persistent:!0,ok:"Go to Settings"}).onOk(()=>{u()})}),(r,i)=>{const p=ve("router-view");return M(),W($e,{view:"hHh lpR fFf"},{default:x(()=>[g(qe,{elevated:"",class:"bg-primary text-white"},{default:x(()=>[g(Ce,null,{default:x(()=>[g(xe,null,{default:x(()=>i[2]||(i[2]=[he(" Wiki Millionaire ")])),_:1}),g(ge,{vertical:""}),g(A,{flat:"",round:"",dense:"",icon:"settings",onClick:u})]),_:1})]),_:1}),g(Qe,null,{default:x(()=>[g(p)]),_:1}),g(we,{modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=d=>o.value=d)},{default:x(()=>[g(me,{style:{"min-width":"350px","max-width":"90vw"},class:"q-mt-lg"},{default:x(()=>[g(U,null,{default:x(()=>i[3]||(i[3]=[j("div",{class:"text-h6"},"Settings",-1),j("div",{class:"text-caption"},"Configure game settings",-1)])),_:1}),a.value===""?(M(),W(U,{key:0},{default:x(()=>[g(pe,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=d=>a.value=d),label:"Open AI Key",hint:"Enter your Open AI API key"},null,8,["modelValue"])]),_:1})):ye("",!0),g(be,{align:"right"},{default:x(()=>[G(g(A,{flat:"",label:"Cancel",color:"primary"},null,512),[[J]]),G(g(A,{flat:"",label:"Save",color:"primary",onClick:h},null,512),[[J]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{_e as default};
