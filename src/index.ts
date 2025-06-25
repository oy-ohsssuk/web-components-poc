declare global {
  namespace JSX {
    interface IntrinsicElements {
      "review-in-catalog": {
        goodsNo: string;
        isVisible?: "on" | "off";
        ref?: any;
        children?: any;
      };
      "black-box-item": { ref?: any; children?: any };
      "option-filter-button": { ref?: any; children?: any };
    }
  }
}

export { ReviewInCatalog } from "./app/ReviewInCatalog";
export { BlackBoxItem } from "./app/BlackBoxItem";
