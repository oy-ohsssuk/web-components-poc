// 글로벌 타입 선언 (JSX 확장)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "review-in-catalog": {
        goodsNo: string;
        isVisible?: "on" | "off";
        ref?: any;
      };
      "black-box-item": { ref?: any };
    }
  }
}

export { ReviewInCatalog } from "./app/ReviewInCatalog";
export { BlackBoxItem } from "./app/BlackBoxItem";
