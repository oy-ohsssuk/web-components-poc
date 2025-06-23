import { LitElement, PropertyValues } from 'lit';

export declare class ReviewInCatalog extends LitElement {
    static styles: import('lit').CSSResult[];
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
    firstUpdated(): void;
    private handleFilterClick;
    updated(changed: PropertyValues): void;
    render(): import('lit').TemplateResult<1> | null;
}
