import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetStyles } from "@/styles/reset";

@customElement("black-box-item")
export class BlackBoxItem extends LitElement {
  @property({ type: Object }) testObj?: Record<string, any>;

  static styles = [
    resetStyles,
    css`
      .black-box {
        background: #111111;
        color: #fff;
        text-align: center;
        padding: 15px 0;
      }
    `,
  ];

  render() {
    return html`
      <div class="black-box" @click=${this._onBlackBoxClick}>
        외부 연동 커스텀 이벤트
        ${this.testObj ? JSON.stringify(this.testObj, null, 2) : ""}
      </div>
    `;
  }

  private _onBlackBoxClick = () => {
    this.dispatchEvent(
      new CustomEvent("blackbox-click", {
        bubbles: true,
        composed: true, // shadow root 바깥까지 이벤트가 전달됨
      })
    );
  };
}
