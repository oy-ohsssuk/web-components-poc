import{f as $,u as k,i as g,a as y,x as p}from"./iframe-DQjHgOR3.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:$},C=(e=N,t,s)=>{const{kind:o,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),o==="accessor"){const{name:n}=s;return{set(l){const u=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,u,e)},init(l){return l!==void 0&&this.C(n,void 0,e,l),l}}}if(o==="setter"){const{name:n}=s;return function(l){const u=this[n];t.call(this,l),this.requestUpdate(n,u,e)}}throw Error("Unsupported decorator location: "+o)};function b(e){return(t,s)=>typeof s=="object"?C(e,t,s):((o,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),n?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(e){return b({...e,state:!0,attribute:!1})}const _=g`
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
`;var D=Object.getOwnPropertyDescriptor,O=(e,t,s,o)=>{for(var i=o>1?void 0:o?D(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=n(i)||i);return i};let h=class extends y{render(){return p`
      <div class="filter">
        <button @click=${this._onClick}>필터</button>
      </div>
    `}_onClick(){this.dispatchEvent(new CustomEvent("filter-click",{bubbles:!0,composed:!0}))}};h.styles=[_,g`
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
    `];h=O([x("option-filter-button")],h);var P=Object.defineProperty,V=Object.getOwnPropertyDescriptor,c=(e,t,s,o)=>{for(var i=o>1?void 0:o?V(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(o?n(t,s,i):n(i))||i);return o&&i&&P(t,s,i),i};let a=class extends y{constructor(){super(),this.goodsNo="",this.isVisible="on",this.reviews=[],this.pageSize=5,this.pageNumber=0}fetchReviewData(){fetch(`https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`).then(e=>e.json()).then(e=>{e&&Array.isArray(e.data)?(this.reviews=e.data.map(t=>({...t,likes:typeof t.likes=="number"?t.likes:0})),this.requestUpdate()):console.error("error:",e)}).catch(e=>{console.error("error:",e)})}connectedCallback(){super.connectedCallback(),this.fetchReviewData()}handleClick(){this.pageNumber++,this.fetchReviewData()}handleLikeClick(e){const t=[...this.reviews];t[e]={...t[e],likes:(t[e].likes||0)+1},this.reviews=t,this.requestUpdate()}updated(e){var t;(t=super.updated)==null||t.call(this,e),e.has("goodsNo")&&(console.log("update: goodsNo"),this.fetchReviewData()),e.has("isVisible")&&this.requestUpdate()}render(){return this.isVisible==="off"?null:p`
      <option-filter-button @filter-click=${this.handleClick}></option-filter-button>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <ul class="review_list">
        ${this.reviews.length===0?p`<li class="review_item empty">리뷰 없음</li>`:this.reviews.map((e,t)=>p`
                <li class="review_item">
                  <div class="review_user">reviewId: ${e.reviewId}</div>
                  <div class="review_content">${e.content}</div>
                  <div class="review_date">${e.createdDateTime?e.createdDateTime.split(" ")[0]:""}</div>
                  <div class="review_score">별점: ${e.score}</div>
                  <button @click=${()=>this.handleLikeClick(t)}>좋아요: ${e.likes||0}</button>
                </li>
              `)}
      </ul>
    `}};a.styles=[_,g`
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
    `];c([b({type:String})],a.prototype,"goodsNo",2);c([b({type:String})],a.prototype,"isVisible",2);c([v()],a.prototype,"reviews",2);c([v()],a.prototype,"pageSize",2);c([v()],a.prototype,"pageNumber",2);a=c([x("review-in-catalog")],a);const S={title:"Web Components/review-in-catalog",component:"review-in-catalog",tags:["autodocs"],parameters:{docs:{canvas:{sourceState:"shown"}},layout:"fullscreen"},argTypes:{goodsNo:{control:"text",description:"상품 번호",type:{name:"string",required:!0}},isVisible:{control:"radio",options:["on","off"],description:"컴포넌트 표시 여부",table:{type:{summary:"'on' | 'off'"}},defaultValue:{summary:"on"}}}},d={args:{goodsNo:"A000000113670",isVisible:"on"},render:({goodsNo:e,isVisible:t})=>p` <review-in-catalog goodsNo=${e} isVisible=${t}></review-in-catalog> `};var f,m,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    goodsNo: "A000000113670",
    isVisible: "on"
  },
  render: ({
    goodsNo,
    isVisible
  }: ReviewInCatalogProps) => html\` <review-in-catalog goodsNo=\${goodsNo} isVisible=\${isVisible}></review-in-catalog> \`
}`,...(w=(m=d.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};const j=["Default"];export{d as Default,j as __namedExportsOrder,S as default};
