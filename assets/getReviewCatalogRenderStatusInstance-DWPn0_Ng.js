import{j as e}from"./index-C0-47mhV.js";import{useMDXComponents as r}from"./index-DnnVRojK.js";import{M as o}from"./index-CrT14AtR.js";import"./iframe-y9DtTAp1.js";function s(t){const n={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"utils/review-in-catalog/getReviewCatalogRenderStatusInstance"}),`
`,e.jsx(n.h2,{id:"getreviewcatalogrenderstatusinstance",children:"getReviewCatalogRenderStatusInstance"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`getReviewCatalogRenderStatusInstance(): RenderStatus | null
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"props"})}),`
`,e.jsx(n.p,{children:"없음"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"return"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"RenderStatus | null"})," ",e.jsx(n.code,{children:"<review-in-catalog>"})," 엘리먼트의 렌더 상태 인스턴스 또는 null"]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"설명:"})," ",e.jsx(n.code,{children:"<review-in-catalog>"})," 엘리먼트의 렌더링 상태 인스턴스를 반환합니다."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"사용-예시",children:"사용 예시"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"getReviewCatalogRenderStatusInstance"}),"와 ",e.jsx(n.code,{children:"scrollToReview"}),"를 활용하는 예시입니다:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { getReviewCatalogRenderStatusInstance, scrollToReview } from "src/app/utils";

useEffect(() => {
  import("review-wc-poc/review");
}, []);

useEffect(() => {
  const status = getReviewCatalogRenderStatusInstance();
  if (!status) {
    return;
  }
  status.onFirstRendered((el) => {
    console.log("isRendered:", status.isRendered());
    scrollToReview(el, "1300913");
  });
  console.log("isRendered:", status.isRendered());

  status.onError();
}, [isReviewOn]);

return (
  isReviewOn && (
    <review-in-catalog goodsNo={"A000000113670"}>
      <option-filter-button></option-filter-button>
    </review-in-catalog>
  );
);
`})}),`
`,e.jsx(n.hr,{})]})}function d(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default};
