import { LitElement, html, css, PropertyValues, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { resetStyles } from "@/styles/reset";
import reviewInCatalogStyles from "./review-in-catalog.scss?inline";
import imageViewer from "./imageViewer";

interface Review {
  reviewId: string;
  score: number;
  createdDateTime: string; // yyyy-mm-dd
  content: string;
  avatar?: string; // 이미지 경로(있으면)
  likes: number; // 좋아요 카운트
}

@customElement("review-in-catalog")
export class ReviewInCatalog extends LitElement {
  static styles = [
    resetStyles,
    css`
      ${unsafeCSS(reviewInCatalogStyles)}
    `,
  ];

  @property({ type: String }) goodsNo: string = "";
  @property({ type: String }) isVisible: "on" | "off" = "on";
  @state() private reviews: Review[] = [];
  @state() private pageSize: number = 20;
  @state() private pageNumber: number = 0;

  constructor() {
    super();
  }

  fetchReviewData() {
    fetch(`https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          // 실데이터를 실제 UI에 맞게 파싱 (예시)
          this.reviews = (data.data || []).map((review: any) => ({
            reviewId: review.reviewId,
            score: typeof review.score === "number" ? review.score : 0,
            createdDateTime: review.createdDateTime ? review.createdDateTime.split(" ")[0] : "",
            content: review.content || "",
            avatar:
              Array.isArray(review.photoReviews) && review.photoReviews.length > 0
                ? `https://image.oliveyoung.co.kr/uploads/review/${review.photoReviews[0].imagePath}`
                : undefined,
            likes: 0,
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
    this.addEventListener("filter-click", this.handleFilterClick);
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
    if (changed.has("reviews") && this.reviews.length > 0) {
      this.dispatchEvent(new CustomEvent("rendered", { bubbles: true }));
    }
  }

  render() {
    if (this.isVisible === "off") return null;

    return html`
      <slot></slot>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <div class="review-list">
        ${this.reviews.length === 0
          ? html`<div class="review-empty">리뷰 없음</div>`
          : this.reviews.map(
              (r: Review, i: number) => html`
                <div class="review-card" id="review_${r.reviewId}">
                  <div class="review-header">
                    <span class="review-avatar">
                      ${r.avatar
                        ? imageViewer({
                            src: "https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2025/06/05/1749085529195.png?RS=0x0&QT=60&SF=webp",
                            alt: "리뷰 사진",
                            fallbackSrc: "/placeholder.png",
                          })
                        : ""}
                    </span>
                    <span class="review-score">
                      ${(() => {
                        // 10점 만점 → 5개 별 환산
                        const starCount = Math.round((r.score / 10) * 5 * 2) / 2;
                        const fullStars = Math.floor(starCount);
                        const halfStar = starCount % 1 >= 0.5;
                        return `${"★".repeat(fullStars)}${halfStar ? "☆" : ""}${"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))}`;
                      })()}
                      <span class="review-score-num">${r.score}</span>
                    </span>
                    <span class="review-date">${r.createdDateTime}</span>
                  </div>
                  <div class="review-content">${r.content}</div>
                  <div class="review-actions">
                    <button @click=${() => this.handleLikeClick(i)}>이 리뷰가 도움이 돼요! <span>${r.likes}</span></button>
                    <button class="review-report">신고하기</button>
                  </div>
                </div>
              `
            )}
      </div>
    `;
  }
}
