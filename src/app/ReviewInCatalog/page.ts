import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { resetStyles } from "@/styles/reset";
import "./components/OptionFilterButton";

interface Review {
  reviewId: string;
  content: string;
  createdDateTime?: string;
  score: number;
  likes: number;
}

@customElement("review-in-catalog")
export class ReviewInCatalog extends LitElement {
  static styles = [
    resetStyles,
    css`
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
    `,
  ];

  @property({ type: String }) goodsNo: string = "";
  @property({ type: String }) isVisible: "on" | "off" = "on";
  @state() private reviews: Review[] = [];
  @state() private pageSize: number = 5;
  @state() private pageNumber: number = 0;

  constructor() {
    super();
  }

  fetchReviewData() {
    fetch(`https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          this.reviews = data.data.map((review: Review) => ({
            ...review,
            likes: typeof review.likes === "number" ? review.likes : 0,
          }));
          this.requestUpdate();
        } else {
          console.error("error:", data);
        }
      })
      .catch((e) => {
        console.error("error:", e);
      });
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchReviewData();
  }

  private handleClick() {
    this.pageNumber++;
    this.fetchReviewData();
  }

  private handleLikeClick(index: number) {
    const newReviews = [...this.reviews];
    newReviews[index] = {
      ...newReviews[index],
      likes: (newReviews[index].likes || 0) + 1,
    };
    this.reviews = newReviews;
    this.requestUpdate();
  }

  firstUpdated() {
    this.addEventListener("filter-click", this.handleFilterClick as EventListener);
  }

  private handleFilterClick = (e: Event) => {
    console.log("filter!");
    this.pageNumber++;
    this.fetchReviewData();
  };

  updated(changed: PropertyValues) {
    super.updated?.(changed);
    if (changed.has("goodsNo")) {
      console.log("update: goodsNo");
      this.fetchReviewData();
    }
    if (changed.has("isVisible")) {
      this.requestUpdate();
    }
  }

  render() {
    if (this.isVisible === "off") return null;

    return html`
      <slot></slot>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <ul class="review_list">
        ${this.reviews.length === 0
          ? html`<li class="review_item empty">리뷰 없음</li>`
          : this.reviews.map(
              (r: Review, i: number) => html`
                <li class="review_item">
                  <div class="review_user">reviewId: ${r.reviewId}</div>
                  <div class="review_content">${r.content}</div>
                  <div class="review_date">${r.createdDateTime ? r.createdDateTime.split(" ")[0] : ""}</div>
                  <div class="review_score">별점: ${r.score}</div>
                  <button @click=${() => this.handleLikeClick(i)}>좋아요: ${r.likes || 0}</button>
                </li>
              `
            )}
      </ul>
    `;
  }
}
