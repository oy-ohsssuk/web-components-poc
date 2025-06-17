declare global {
    namespace JSX {
        interface IntrinsicElements {
            "review-in-catalog": {
                goodsNo: string;
                isVisible?: "on" | "off";
                ref?: any;
            };
            "black-box-item": {
                ref?: any;
            };
        }
    }
}
export { ReviewInCatalog } from './app/ReviewInCatalog/page';
export { BlackBoxItem } from './app/BlackBoxItem/page';
