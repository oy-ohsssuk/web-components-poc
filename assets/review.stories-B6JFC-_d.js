import{f as C,u as D,i as g,x as c,r as y,a as $}from"./iframe-DeBMMy3M.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:C},_=(e=S,t,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),o==="accessor"){const{name:a}=r;return{set(n){const d=t.get.call(this);t.set.call(this,n),this.requestUpdate(a,d,e)},init(n){return n!==void 0&&this.C(a,void 0,e,n),n}}}if(o==="setter"){const{name:a}=r;return function(n){const d=this[a];t.call(this,n),this.requestUpdate(a,d,e)}}throw Error("Unsupported decorator location: "+o)};function f(e){return(t,r)=>typeof r=="object"?_(e,t,r):((o,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,o),a?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){return f({...e,state:!0,attribute:!1})}const N=g`
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
    font-family: "Apple SD Gothic Neo", NotoSansCJKkr, Roboto, Montserrat, sans-serif;
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
`,P=":host .review-list{padding:0 15px}:host .review-card{border-bottom:1px solid #eee;padding:20px 0;margin-bottom:12px}:host .review-header{display:flex;align-items:center;gap:12px;margin-bottom:6px}:host .review-avatar{width:40px;height:40px;min-width:40px;min-height:40px;max-width:40px;max-height:40px;border-radius:50%;background:#eee;display:flex;align-items:center;justify-content:center;overflow:hidden}:host .review-avatar img{width:100%;height:100%;object-fit:cover;display:block}:host .review-user{font-weight:700;margin-right:8px}:host .review-score{color:#ffb400;font-size:18px;margin-right:8px}:host .review-score-num{color:#333;font-size:14px;margin-left:2px}:host .review-date{color:#bbb;font-size:12px;margin-left:auto}:host .review-option{font-size:13px;color:#888;margin-bottom:4px}:host .review-features{margin-bottom:6px;font-size:13px;color:#009688}:host .review-feature{margin-right:10px}:host .feature-label{font-weight:500;margin-right:2px}:host .feature-value{color:#333}:host .review-content{margin-bottom:8px;word-break:break-all;white-space:pre-line;font-size:15px}:host .review-actions{display:flex;gap:10px;margin-top:8px}:host .review-actions button{border:1px solid #ddd;background:#fafafa;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:13px}:host .review-report{color:#888;background:none;border:none;cursor:pointer;padding:0 6px}:host .review-empty{background:#eee;width:100%;height:200px;padding:0;display:flex;align-items:center;justify-content:center;color:#888;font-size:16px}";function b(e){return e.includes("?")?"&":"?"}function R(e,t){return t?`${b(e)}rs=${t}x0`:""}function O(e,t){return t?`${b(e)}sharpen=0x${t}`:""}function j(e,t,r,o){const i=b(e);return o==="webp"&&t?`${i}qt=${r}&sf=webp`:o&&o!=="webp"?`${i}qt=${r}&sf=${o}`:`${i}qt=${r}`}function V({src:e,fallbackSrc:t,imgWidth:r,imgSaveFormat:o="webp",sigma:i},s=!0){let n=e;return n?(r&&(n+=R(n,r)),n+=j(n,s,85,o),o==="webp"&&(n+=O(n,i)),n):t||""}function q(e,t=!0){const{src:r,alt:o,fallbackSrc:i,imgWidth:s,style:a="",className:n="",...d}=e,z=V(e,t);return c`<img
    src="${z}"
    alt="${o}"
    style="width:100%;height:100%;object-fit:cover;${a}"
    class="${n}"
    loading="lazy"
    ...=${d}
  />`}var E=Object.defineProperty,U=Object.getOwnPropertyDescriptor,p=(e,t,r,o)=>{for(var i=o>1?void 0:o?U(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=(o?a(t,r,i):a(i))||i);return o&&i&&E(t,r,i),i};let l=class extends ${constructor(){super(),this.goodsNo="",this.isVisible="on",this.reviews=[],this.pageSize=20,this.pageNumber=0,this.handleFilterClick=e=>{console.log("filter!"),this.pageNumber++,this.fetchReviewData()}}fetchReviewData(){fetch(`https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`).then(e=>e.json()).then(e=>{e&&Array.isArray(e.data)?(this.reviews=(e.data||[]).map(t=>({reviewId:t.reviewId,score:typeof t.score=="number"?t.score:0,createdDateTime:t.createdDateTime?t.createdDateTime.split(" ")[0]:"",content:t.content||"",avatar:Array.isArray(t.photoReviews)&&t.photoReviews.length>0?`https://image.oliveyoung.co.kr/uploads/review/${t.photoReviews[0].imagePath}`:void 0,likes:0})),this.requestUpdate()):console.error("error:",e)}).catch(e=>{console.error("error:",e)})}connectedCallback(){super.connectedCallback(),this.fetchReviewData()}handleClick(){this.pageNumber++,this.fetchReviewData()}handleLikeClick(e){const t=[...this.reviews];t[e]={...t[e],likes:(t[e].likes||0)+1},this.reviews=t,this.requestUpdate()}firstUpdated(){this.addEventListener("filter-click",this.handleFilterClick)}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("goodsNo")&&(console.log("update: goodsNo"),this.fetchReviewData()),e.has("isVisible")&&this.requestUpdate(),e.has("reviews")&&this.reviews.length>0&&this.dispatchEvent(new CustomEvent("rendered",{bubbles:!0}))}render(){return this.isVisible==="off"?null:c`
      <slot></slot>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <div class="review-list">
        ${this.reviews.length===0?c`<div class="review-empty">리뷰 없음</div>`:this.reviews.map((e,t)=>c`
                <div class="review-card" id="review_${e.reviewId}">
                  <div class="review-header">
                    <span class="review-avatar">
                      ${e.avatar?q({src:"https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2025/06/05/1749085529195.png?RS=0x0&QT=60&SF=webp",alt:"리뷰 사진",fallbackSrc:"/placeholder.png"}):""}
                    </span>
                    <span class="review-score">
                      ${(()=>{const r=Math.round(e.score/10*5*2)/2,o=Math.floor(r),i=r%1>=.5;return`${"★".repeat(o)}${i?"☆":""}${"☆".repeat(5-o-(i?1:0))}`})()}
                      <span class="review-score-num">${e.score}</span>
                    </span>
                    <span class="review-date">${e.createdDateTime}</span>
                  </div>
                  <div class="review-content">${e.content}</div>
                  <div class="review-actions">
                    <button @click=${()=>this.handleLikeClick(t)}>이 리뷰가 도움이 돼요! <span>${e.likes}</span></button>
                    <button class="review-report">신고하기</button>
                  </div>
                </div>
              `)}
      </div>
    `}};l.styles=[N,g`
      ${y(P)}
    `];p([f({type:String})],l.prototype,"goodsNo",2);p([f({type:String})],l.prototype,"isVisible",2);p([v()],l.prototype,"reviews",2);p([v()],l.prototype,"pageSize",2);p([v()],l.prototype,"pageNumber",2);l=p([k("review-in-catalog")],l);const I=":host{display:block}:host .filter{width:100%;padding:20px 15px}:host .filter button{position:relative;display:block;width:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:50px;border-radius:4px;font-size:15px;line-height:18px;letter-spacing:0;border:1px solid #000}";var T=Object.getOwnPropertyDescriptor,A=(e,t,r,o)=>{for(var i=o>1?void 0:o?T(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(i=a(i)||i);return i};let u=class extends ${render(){return c`
      <div class="filter">
        <button @click=${this._onClick}>필터</button>
      </div>
    `}_onClick(){this.dispatchEvent(new CustomEvent("filter-click",{bubbles:!0,composed:!1}))}};u.styles=[N,g`
      ${y(I)}
    `];u=A([k("option-filter-button")],u);const Q={title:"componenets/review",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{canvas:{sourceState:"shown"}}},argTypes:{goodsNo:{control:"text"},isVisible:{control:{type:"radio"},options:["on","off"]}}},h={args:{goodsNo:"A000000113670",isVisible:"on"},render:({goodsNo:e,isVisible:t})=>c`
    <review-in-catalog goodsNo=${e} isVisible=${t}>
      <option-filter-button></option-filter-button>
    </review-in-catalog>
  `};var w,m,x;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    goodsNo: "A000000113670",
    isVisible: "on"
  },
  render: ({
    goodsNo,
    isVisible
  }: ReviewInCatalogProps) => html\`
    <review-in-catalog goodsNo=\${goodsNo} isVisible=\${isVisible}>
      <option-filter-button></option-filter-button>
    </review-in-catalog>
  \`
}`,...(x=(m=h.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const F=["Default"];export{h as Default,F as __namedExportsOrder,Q as default};
