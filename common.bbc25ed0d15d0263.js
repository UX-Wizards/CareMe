"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1320:(y,w,u)=>{u.d(w,{c:()=>c});var a=u(1308),g=u(7864),d=u(1898);const c=(i,e)=>{let n,t;const s=(l,p,v)=>{if(typeof document>"u")return;const _=document.elementFromPoint(l,p);_&&e(_)?_!==n&&(h(),r(_,v)):h()},r=(l,p)=>{n=l,t||(t=n);const v=n;(0,a.c)(()=>v.classList.add("ion-activated")),p()},h=(l=!1)=>{if(!n)return;const p=n;(0,a.c)(()=>p.classList.remove("ion-activated")),l&&t!==n&&n.click(),n=void 0};return(0,d.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>s(l.currentX,l.currentY,g.a),onMove:l=>s(l.currentX,l.currentY,g.b),onEnd:()=>{h(!0),(0,g.h)(),t=void 0}})}},2225:(y,w,u)=>{u.d(w,{g:()=>a});const a=(e,n,t,s,r)=>d(e[1],n[1],t[1],s[1],r).map(h=>g(e[0],n[0],t[0],s[0],h)),g=(e,n,t,s,r)=>r*(3*n*Math.pow(r-1,2)+r*(-3*t*r+3*t+s*r))-e*Math.pow(r-1,3),d=(e,n,t,s,r)=>i((s-=r)-3*(t-=r)+3*(n-=r)-(e-=r),3*t-6*n+3*e,3*n-3*e,e).filter(l=>l>=0&&l<=1),i=(e,n,t,s)=>{if(0===e)return((e,n,t)=>{const s=n*n-4*e*t;return s<0?[]:[(-n+Math.sqrt(s))/(2*e),(-n-Math.sqrt(s))/(2*e)]})(n,t,s);const r=(3*(t/=e)-(n/=e)*n)/3,h=(2*n*n*n-9*n*t+27*(s/=e))/27;if(0===r)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-r),-Math.sqrt(-r)];const l=Math.pow(h/2,2)+Math.pow(r/3,3);if(0===l)return[Math.pow(h/2,.5)-n/3];if(l>0)return[Math.pow(-h/2+Math.sqrt(l),1/3)-Math.pow(h/2+Math.sqrt(l),1/3)-n/3];const p=Math.sqrt(Math.pow(-r/3,3)),v=Math.acos(-h/(2*Math.sqrt(Math.pow(-r/3,3)))),_=2*Math.pow(p,1/3);return[_*Math.cos(v/3)-n/3,_*Math.cos((v+2*Math.PI)/3)-n/3,_*Math.cos((v+4*Math.PI)/3)-n/3]}},5062:(y,w,u)=>{u.d(w,{i:()=>a});const a=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},6602:(y,w,u)=>{u.r(w),u.d(w,{startFocusVisible:()=>c});const a="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=i=>{let e=[],n=!0;const t=i?i.shadowRoot:document,s=i||document.body,r=E=>{e.forEach(m=>m.classList.remove(a)),E.forEach(m=>m.classList.add(a)),e=E},h=()=>{n=!1,r([])},l=E=>{n=d.includes(E.key),n||r([])},p=E=>{if(n&&void 0!==E.composedPath){const m=E.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));r(m)}},v=()=>{t.activeElement===s&&r([])};return t.addEventListener("keydown",l),t.addEventListener("focusin",p),t.addEventListener("focusout",v),t.addEventListener("touchstart",h),t.addEventListener("mousedown",h),{destroy:()=>{t.removeEventListener("keydown",l),t.removeEventListener("focusin",p),t.removeEventListener("focusout",v),t.removeEventListener("touchstart",h),t.removeEventListener("mousedown",h)},setFocus:r}}},7626:(y,w,u)=>{u.d(w,{C:()=>i,a:()=>d,d:()=>c});var a=u(5861),g=u(5730);const d=function(){var e=(0,a.Z)(function*(n,t,s,r,h,l){var p;if(n)return n.attachViewToDom(t,s,h,r);if(!(l||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const v="string"==typeof s?null===(p=t.ownerDocument)||void 0===p?void 0:p.createElement(s):s;return r&&r.forEach(_=>v.classList.add(_)),h&&Object.assign(v,h),t.appendChild(v),yield new Promise(_=>(0,g.c)(v,_)),v});return function(t,s,r,h,l,p){return e.apply(this,arguments)}}(),c=(e,n)=>{if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()},i=()=>{let e,n;return{attachViewToDom:function(){var r=(0,a.Z)(function*(h,l,p={},v=[]){var _,E;if(e=h,l){const f="string"==typeof l?null===(_=e.ownerDocument)||void 0===_?void 0:_.createElement(l):l;v.forEach(o=>f.classList.add(o)),Object.assign(f,p),e.appendChild(f),yield new Promise(o=>(0,g.c)(f,o))}else if(e.children.length>0&&!e.children[0].classList.contains("ion-delegate-host")){const o=null===(E=e.ownerDocument)||void 0===E?void 0:E.createElement("div");o.classList.add("ion-delegate-host"),v.forEach(M=>o.classList.add(M)),o.append(...e.children),e.appendChild(o)}const m=document.querySelector("ion-app")||document.body;return n=document.createComment("ionic teleport"),e.parentNode.insertBefore(n,e),m.appendChild(e),e});return function(l,p){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(e&&n&&(n.parentNode.insertBefore(e,n),n.remove()),Promise.resolve())}}},7864:(y,w,u)=>{u.d(w,{a:()=>c,b:()=>i,c:()=>d,d:()=>n,h:()=>e});const a={getEngine(){var t;const s=window;return s.TapticEngine||(null===(t=s.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&s.Capacitor.Plugins.Haptics},available(){var t;const s=window;return!!this.getEngine()&&("web"!==(null===(t=s.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const s=this.getEngine();if(!s)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;s.impact({style:r})},notification(t){const s=this.getEngine();if(!s)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;s.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>a.available(),d=()=>{g()&&a.selection()},c=()=>{g()&&a.selectionStart()},i=()=>{g()&&a.selectionChanged()},e=()=>{g()&&a.selectionEnd()},n=t=>{g()&&a.impact(t)}},109:(y,w,u)=>{u.d(w,{a:()=>a,b:()=>l,c:()=>n,d:()=>p,e:()=>x,f:()=>e,g:()=>v,h:()=>d,i:()=>g,j:()=>o,k:()=>M,l:()=>t,m:()=>r,n:()=>_,o:()=>s,p:()=>i,q:()=>c,r:()=>f,s:()=>C,t:()=>h,u:()=>E,v:()=>m});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},9888:(y,w,u)=>{u.d(w,{s:()=>a});const a=t=>{try{if(t instanceof n)return t.value;if(!c()||"string"!=typeof t||""===t)return t;if(t.includes("onload="))return"";const s=document.createDocumentFragment(),r=document.createElement("div");s.appendChild(r),r.innerHTML=t,e.forEach(v=>{const _=s.querySelectorAll(v);for(let E=_.length-1;E>=0;E--){const m=_[E];m.parentNode?m.parentNode.removeChild(m):s.removeChild(m);const f=d(m);for(let o=0;o<f.length;o++)g(f[o])}});const h=d(s);for(let v=0;v<h.length;v++)g(h[v]);const l=document.createElement("div");l.appendChild(s);const p=l.querySelector("div");return null!==p?p.innerHTML:l.innerHTML}catch(s){return console.error(s),""}},g=t=>{if(t.nodeType&&1!==t.nodeType)return;if(typeof NamedNodeMap<"u"&&!(t.attributes instanceof NamedNodeMap))return void t.remove();for(let r=t.attributes.length-1;r>=0;r--){const h=t.attributes.item(r),l=h.name;if(!i.includes(l.toLowerCase())){t.removeAttribute(l);continue}const p=h.value,v=t[l];(null!=p&&p.toLowerCase().includes("javascript:")||null!=v&&v.toLowerCase().includes("javascript:"))&&t.removeAttribute(l)}const s=d(t);for(let r=0;r<s.length;r++)g(s[r])},d=t=>null!=t.children?t.children:t.childNodes,c=()=>{var t;const r=null===(t=window?.Ionic)||void 0===t?void 0:t.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},i=["class","id","href","src","name","slot"],e=["script","style","iframe","meta","link","object","embed"];class n{constructor(s){this.value=s}}},8416:(y,w,u)=>{u.d(w,{I:()=>i,a:()=>r,b:()=>e,c:()=>p,d:()=>_,f:()=>h,g:()=>s,i:()=>t,p:()=>v,r:()=>E,s:()=>l});var a=u(5861),g=u(5730),d=u(4147);const i="ion-content",e=".ion-content-scroll-host",n=`${i}, ${e}`,t=m=>"ION-CONTENT"===m.tagName,s=function(){var m=(0,a.Z)(function*(f){return t(f)?(yield new Promise(o=>(0,g.c)(f,o)),f.getScrollElement()):f});return function(o){return m.apply(this,arguments)}}(),r=m=>m.querySelector(e)||m.querySelector(n),h=m=>m.closest(n),l=(m,f)=>t(m)?m.scrollToTop(f):Promise.resolve(m.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(m,f,o,M)=>t(m)?m.scrollByPoint(f,o,M):Promise.resolve(m.scrollBy({top:o,left:f,behavior:M>0?"smooth":"auto"})),v=m=>(0,d.a)(m,i),_=m=>{if(t(m)){const o=m.scrollY;return m.scrollY=!1,o}return m.style.setProperty("overflow","hidden"),!0},E=(m,f)=>{t(m)?m.scrollY=f:m.style.removeProperty("overflow")}},5234:(y,w,u)=>{u.r(w),u.d(w,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>f,keyboardDidClose:()=>v,keyboardDidOpen:()=>l,keyboardDidResize:()=>p,resetKeyboardAssist:()=>n,setKeyboardClose:()=>h,setKeyboardOpen:()=>r,startKeyboardAssist:()=>t,trackViewportChanges:()=>m});const a="ionKeyboardDidShow",g="ionKeyboardDidHide";let c={},i={},e=!1;const n=()=>{c={},i={},e=!1},t=o=>{s(o),o.visualViewport&&(i=f(o.visualViewport),o.visualViewport.onresize=()=>{m(o),l()||p(o)?r(o):v(o)&&h(o)})},s=o=>{o.addEventListener("keyboardDidShow",M=>r(o,M)),o.addEventListener("keyboardDidHide",()=>h(o))},r=(o,M)=>{_(o,M),e=!0},h=o=>{E(o),e=!1},l=()=>!e&&c.width===i.width&&(c.height-i.height)*i.scale>150,p=o=>e&&!v(o),v=o=>e&&i.height===o.innerHeight,_=(o,M)=>{const x=new CustomEvent(a,{detail:{keyboardHeight:M?M.keyboardHeight:o.innerHeight-i.height}});o.dispatchEvent(x)},E=o=>{const M=new CustomEvent(g);o.dispatchEvent(M)},m=o=>{c=Object.assign({},i),i=f(o.visualViewport)},f=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(y,w,u)=>{u.d(w,{c:()=>g});var a=u(3457);const g=d=>{let c,i,e;const n=()=>{c=()=>{e=!0,d&&d(!0)},i=()=>{e=!1,d&&d(!1)},null==a.w||a.w.addEventListener("keyboardWillShow",c),null==a.w||a.w.addEventListener("keyboardWillHide",i)};return n(),{init:n,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",c),null==a.w||a.w.removeEventListener("keyboardWillHide",i),c=i=void 0},isKeyboardVisible:()=>e}}},7741:(y,w,u)=>{u.d(w,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(d,c,i)=>{const e=d*c/i-d+"ms",n=2*Math.PI*c/i;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(d,c,i)=>{const e=c/i,n=d*e-d+"ms",t=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,c,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,c,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})}}},6659:(y,w,u)=>{u.r(w),u.d(w,{createSwipeBackGesture:()=>i});var a=u(5730),g=u(5062),d=u(1898);u(4349);const i=(e,n,t,s,r)=>{const h=e.ownerDocument.defaultView;let l=(0,g.i)(e);const v=o=>l?-o.deltaX:o.deltaX;return(0,d.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(l=(0,g.i)(e),(o=>{const{startX:C}=o;return l?C>=h.innerWidth-50:C<=50})(o)&&n()),onStart:t,onMove:o=>{const C=v(o)/h.innerWidth;s(C)},onEnd:o=>{const M=v(o),C=h.innerWidth,x=M/C,D=(o=>l?-o.velocityX:o.velocityX)(o),O=D>=0&&(D>.2||M>C/2),L=(O?1-x:x)*C;let k=0;if(L>5){const b=L/Math.abs(D);k=Math.min(b,540)}r(O,x<=0?.01:(0,a.l)(0,x,.9999),k)}})}},4762:(y,w,u)=>{u.d(w,{Z:()=>g});var a=u(1571);let g=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(i,e){1&i&&(a.TgZ(0,"div",0)(1,"strong"),a._uU(2),a.qZA(),a.TgZ(3,"p"),a._uU(4,"Explore "),a.TgZ(5,"a",1),a._uU(6,"UI Components"),a.qZA()()()),2&i&&(a.xp6(2),a.Oqu(e.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),d})()},581:(y,w,u)=>{u.d(w,{e:()=>i});var a=u(6895),g=u(433),d=u(8058),c=u(1571);let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[a.ez,g.u5,d.Pc]}),e})()}}]);