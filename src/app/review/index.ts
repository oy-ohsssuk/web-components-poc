export { ReviewInCatalog } from "./components/reviewInCatalog";
export { OptionFilterButton } from "./components/optionFilterButton";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "review-in-catalog": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        goodsNo: string;
        isVisible?: "on" | "off";
      };
      "option-filter-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {};
    }
  }
}
