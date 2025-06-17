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
        padding: 0 15px;
        margin: 0;
      }
      .review_item {
        border-bottom: 1px solid #eee;
        padding: 12px 0;
      }
      .review_user {
        font-weight: bold;
        margin-bottom: 4px;
      }
      .review_content {
        margin-bottom: 4px;
      }
      .review_date {
        color: #bbb;
        font-size: 12px;
      }
    `,
  ];

  @property({ type: String }) goodsNo: string;
  @property({ type: String }) isVisible: "on" | "off";
  @state() private reviews: Review[];
  @state() private pageSize: number;
  @state() private pageNumber: number;

  constructor() {
    super();
    this.goodsNo = "";
    this.isVisible = "on";
    this.reviews = [];
    this.pageSize = 5;
    this.pageNumber = 0;
  }

  fetchReviewData() {
    fetch(
      `https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          // 각 리뷰에 likes 필드가 없으면 0으로 초기화
          this.reviews = data.data.map((review: Review) => ({
            ...review,
            likes: typeof review.likes === "number" ? review.likes : 0,
          }));
          this.requestUpdate();
        } else {
          console.error("리뷰 데이터 구조가 예상과 다릅니다.", data);
        }
      })
      .catch((e) => {
        console.error("리뷰 데이터 fetch 실패:", e);
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
    // 새로운 배열 생성(불변성 유지)
    const newReviews = [...this.reviews];
    newReviews[index] = {
      ...newReviews[index],
      likes: (newReviews[index].likes || 0) + 1,
    };
    this.reviews = newReviews;
    this.requestUpdate();
  }

  updated(changed: PropertyValues) {
    super.updated?.(changed);
  }

  render() {
    if (this.isVisible === "off") return null;

    return html`
      <option-filter-button
        @filter-click=${this.handleClick}
      ></option-filter-button>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <ul class="review_list">
        ${this.reviews.map(
          (r: Review, i: number) => html`
            <li class="review_item">
              <div class="review_user">reviewId: ${r.reviewId}</div>
              <div class="review_content">${r.content}</div>
              <div class="review_date">
                ${r.createdDateTime ? r.createdDateTime.split(" ")[0] : ""}
              </div>
              <div class="review_score">별점: ${r.score}</div>
              <button @click=${() => this.handleLikeClick(i)}>
                좋아요: ${r.likes || 0}
              </button>
            </li>
          `
        )}
      </ul>
    `;
  }
}
