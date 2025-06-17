var ReviewComponent=function(u){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;const M=globalThis,j=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),tt=new WeakMap;let et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}};const _t=r=>new et(typeof r=="string"?r:r+"",void 0,L),H=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new et(e,r,L)},gt=(r,t)=>{if(j)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},st=j?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return _t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vt,defineProperty:mt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:bt,getOwnPropertySymbols:At,getPrototypeOf:wt}=Object,f=globalThis,it=f.trustedTypes,Et=it?it.emptyScript:"",V=f.reactiveElementPolyfillSupport,x=(r,t)=>r,I={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},q=(r,t)=>!vt(r,t),rt={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:q};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&mt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=yt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i==null?void 0:i.call(this);n==null||n.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,s=[...bt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(st(i))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var n,o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:I;this._$Em=i,this[i]=a.fromAttribute(e,l.type)??((o=this._$Ej)==null?void 0:o.get(i))??null,this._$Em=null}}requestUpdate(t,e,s){var i;if(t!==void 0){const n=this.constructor,o=this[t];if(s??(s=n.getPropertyOptions(t)),!((s.hasChanged??q)(o,e)||s.useDefault&&s.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,o]of i){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[x("elementProperties")]=new Map,w[x("finalized")]=new Map,V==null||V({ReactiveElement:w}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,D=P.trustedTypes,nt=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,ot="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+_,St=`<${at}>`,v=document,k=()=>v.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",W=Array.isArray,Ct=r=>W(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",F=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,m=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,pt=/^(?:script|style|textarea|title)$/i,xt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),R=xt(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ut=new WeakMap,y=v.createTreeWalker(v,129);function $t(r,t){if(!W(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(t):t}const Pt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=U;for(let l=0;l<e;l++){const a=r[l];let d,p,h=-1,$=0;for(;$<a.length&&(o.lastIndex=$,p=o.exec(a),p!==null);)$=o.lastIndex,o===U?p[1]==="!--"?o=lt:p[1]!==void 0?o=ht:p[2]!==void 0?(pt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=m):p[3]!==void 0&&(o=m):o===m?p[0]===">"?(o=i??U,h=-1):p[1]===void 0?h=-2:(h=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?m:p[3]==='"'?dt:ct):o===dt||o===ct?o=m:o===lt||o===ht?o=U:(o=m,i=void 0);const g=o===m&&r[l+1].startsWith("/>")?" ":"";n+=o===U?a+St:h>=0?(s.push(d),a.slice(0,h)+ot+a.slice(h)+_+g):a+_+(h===-2?l:g)}return[$t(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class N{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[d,p]=Pt(t,e);if(this.el=N.createElement(d,s),y.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=y.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ot)){const $=p[o++],g=i.getAttribute(h).split(_),z=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:z[2],strings:g,ctor:z[1]==="."?Ot:z[1]==="?"?Ut:z[1]==="@"?Rt:B}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(pt.test(i.tagName)){const h=i.textContent.split(_),$=h.length-1;if($>0){i.textContent=D?D.emptyScript:"";for(let g=0;g<$;g++)i.append(h[g],k()),y.nextNode(),a.push({type:2,index:++n});i.append(h[$],k())}}}else if(i.nodeType===8)if(i.data===at)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:n}),h+=_.length-1}n++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){var o,l;if(t===E)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??v).importNode(e,!0);y.currentNode=i;let n=y.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new T(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new Nt(n,this,t)),this._$AV.push(d),a=s[++l]}o!==(a==null?void 0:a.index)&&(n=y.nextNode(),o++)}return y.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),O(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement($t(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const o=new kt(i,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new N(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new T(this.O(k()),this.O(k()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const l=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=S(this,l[s+a],e,a),d===E&&(d=this._$AH[a]),o||(o=!O(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ot extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ut extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Rt extends B{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const J=P.litHtmlPolyfillSupport;J==null||J(N,T),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.3.0");const Tt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new T(t.insertBefore(k(),n),n,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=globalThis;class A extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}A._$litElement$=!0,A.finalized=!0,(ft=b.litElementHydrateSupport)==null||ft.call(b,{LitElement:A});const K=b.litElementPolyfillSupport;K==null||K({LitElement:A}),(b.litElementVersions??(b.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:q},Ht=(r=Mt,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,r)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function G(r){return(t,e)=>typeof e=="object"?Ht(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(r){return G({...r,state:!0,attribute:!1})}const X=H`
  :host {
    all: initial;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
  }

  button {
    all: unset;
    cursor: pointer;
    font: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;var It=Object.getOwnPropertyDescriptor,Dt=(r,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};let Y=class extends A{render(){return R`
      <div class="filter">
        <button @click=${this._onClick}>필터</button>
      </div>
    `}_onClick(){this.dispatchEvent(new CustomEvent("filter-click",{bubbles:!0,composed:!0}))}};Y.styles=[X,H`
      .filter {
        width: 100%;
        padding: 20px 15px;

        button {
          position: relative;
          display: block;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          border-radius: 4px;
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0;
          border: 1px solid #000;
        }
      }
    `],Y=Dt([Z("option-filter-button")],Y);var Bt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,C=(r,t,e,s)=>{for(var i=s>1?void 0:s?zt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Bt(t,e,i),i};u.ReviewInCatalog=class extends A{constructor(){super(),this.goodsNo="",this.isVisible="on",this.reviews=[],this.pageSize=5,this.pageNumber=0}fetchReviewData(){fetch(`https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`).then(t=>t.json()).then(t=>{t&&Array.isArray(t.data)?(this.reviews=t.data.map(e=>({...e,likes:typeof e.likes=="number"?e.likes:0})),this.requestUpdate()):console.error("리뷰 데이터 구조가 예상과 다릅니다.",t)}).catch(t=>{console.error("리뷰 데이터 fetch 실패:",t)})}connectedCallback(){console.log("connectedCallback"),super.connectedCallback(),this.fetchReviewData()}handleClick(){this.pageNumber++,this.fetchReviewData()}handleLikeClick(t){const e=[...this.reviews];e[t]={...e[t],likes:(e[t].likes||0)+1},this.reviews=e,this.requestUpdate()}updated(t){var e;(e=super.updated)==null||e.call(this,t),t.has("goodsNo")&&(console.log("update: goodsNo"),this.fetchReviewData())}render(){return this.isVisible==="off"?null:R`
      <option-filter-button
        @filter-click=${this.handleClick}
      ></option-filter-button>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <ul class="review_list">
        ${this.reviews.length===0?R`<li class="review_item empty">리뷰 없음</li>`:this.reviews.map((t,e)=>R`
                <li class="review_item">
                  <div class="review_user">reviewId: ${t.reviewId}</div>
                  <div class="review_content">${t.content}</div>
                  <div class="review_date">
                    ${t.createdDateTime?t.createdDateTime.split(" ")[0]:""}
                  </div>
                  <div class="review_score">별점: ${t.score}</div>
                  <button @click=${()=>this.handleLikeClick(e)}>
                    좋아요: ${t.likes||0}
                  </button>
                </li>
              `)}
      </ul>
    `}},u.ReviewInCatalog.styles=[X,H`
      .review_list {
        list-style: none;
        margin: 0;
      }
      .review_item {
        border-bottom: 1px solid #eee;
        padding: 12px 15px;
        &.empty {
          background: #eee;
          width: 100%;
          height: 200px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .review_user {
        font-weight: bold;
        margin-bottom: 4px;
      }
      .review_content {
        margin-bottom: 4px;
        word-break: break-all;
        white-space: pre-line;
      }
      .review_date {
        color: #bbb;
        font-size: 12px;
      }
    `],C([G({type:String})],u.ReviewInCatalog.prototype,"goodsNo",2),C([G({type:String})],u.ReviewInCatalog.prototype,"isVisible",2),C([Q()],u.ReviewInCatalog.prototype,"reviews",2),C([Q()],u.ReviewInCatalog.prototype,"pageSize",2),C([Q()],u.ReviewInCatalog.prototype,"pageNumber",2),u.ReviewInCatalog=C([Z("review-in-catalog")],u.ReviewInCatalog);var jt=Object.getOwnPropertyDescriptor,Lt=(r,t,e,s)=>{for(var i=s>1?void 0:s?jt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=o(i)||i);return i};return u.BlackBoxItem=class extends A{constructor(){super(...arguments),this._onBlackBoxClick=()=>{this.dispatchEvent(new CustomEvent("blackbox-click",{bubbles:!0,composed:!0}))}}render(){return R`
      <div class="black-box" @click=${this._onBlackBoxClick}>
        외부 연동 커스텀 이벤트
      </div>
    `}},u.BlackBoxItem.styles=[X,H`
      .black-box {
        background: #111;
        color: #fff;
        text-align: center;
        padding: 15px 0;
      }
    `],u.BlackBoxItem=Lt([Z("black-box-item")],u.BlackBoxItem),Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),u}({});
