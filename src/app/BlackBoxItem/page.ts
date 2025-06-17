import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { resetStyles } from "@/styles/reset";

@customElement("black-box-item")
export class BlackBoxItem extends LitElement {
  static styles = [
    resetStyles,
    css`
      .black-box {
        background: #111;
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
      </div>
    `;
  }

  private _onBlackBoxClick = () => {
    this.dispatchEvent(
      new CustomEvent("blackbox-click", {
        bubbles: true,
        composed: true,
      })
    );
  };
}
