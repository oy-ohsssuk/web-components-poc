import{j as n}from"./index-C0-47mhV.js";import{useMDXComponents as l}from"./index-DnnVRojK.js";import{M as i,S as t}from"./index-ffZiHPl_.js";import"./iframe-DeBMMy3M.js";function r(s){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Utils/Import Guide"}),`
`,n.jsx(e.h1,{id:"utils",children:"Utils"}),`
`,n.jsx(t,{language:"ts",code:"import { getReviewCount, scrollToReview, getReviewCatalogRenderStatusInstance } from 'src/app/utils';"}),`
`,n.jsx(e.h2,{id:"getreviewcount",children:"getReviewCount"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`getReviewCount(goodsId: string): Promise<number>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"props"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"goodsId: string"})," 상품의 고유 ID"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"return"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Promise<number>"})," 리뷰 개수 (비동기)"]}),`
`,n.jsx("br",{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"설명:"})," 상품의 리뷰 개수를 비동기로 가져옵니다."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx("br",{}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h3,{id:"scrolltoreview",children:n.jsx("span",{style:{fontWeight:600},children:"scrollToReview"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`scrollToReview(el: HTMLElement, reviewId: string): boolean
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"props"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"el: HTMLElement"}),n.jsx(e.br,{}),`
`,"루트 엘리먼트"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"reviewId: string"}),n.jsx(e.br,{}),`
`,"리뷰의 고유 ID"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"반환값"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"boolean"}),": 스크롤 성공 여부"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"설명:"}),`
특정 리뷰로 스크롤 이동합니다.`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"getreviewcatalogrenderstatusinstance",children:n.jsx("span",{style:{fontWeight:600},children:"getReviewCatalogRenderStatusInstance"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`getReviewCatalogRenderStatusInstance(): RenderStatus | null
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"props"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"없음"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"반환값"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"RenderStatus | null"}),": ",n.jsx(e.code,{children:"<review-in-catalog>"})," 엘리먼트의 렌더 상태 인스턴스 또는 null"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"설명:"}),`
`,n.jsx(e.code,{children:"<review-in-catalog>"})," 엘리먼트의 렌더 상태 인스턴스를 반환합니다."]}),`
`,n.jsx(e.hr,{})]})}function x(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{x as default};
