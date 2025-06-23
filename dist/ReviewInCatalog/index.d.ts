import { LitElement, PropertyValues } from "lit";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "review-in-catalog": {
        goodsNo: string;
        isVisible?: "on" | "off";
        ref?: any;
      };
    }
  }
}

export declare class ReviewInCatalog extends LitElement {
  static styles: import("lit").CSSResult[];
  goodsNo: string;
  isVisible: "on" | "off";
  private reviews;
  private pageSize;
  private pageNumber;
  constructor();
  fetchReviewData(): void;
  connectedCallback(): void;
  private handleClick;
  private handleLikeClick;
  updated(changed: PropertyValues): void;
  render(): import("lit").TemplateResult<1> | null;
}
