import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetStyles } from "@/styles/reset";

@customElement("option-filter-button")
export class OptionFilterButton extends LitElement {
  static styles = [
    resetStyles,
    css`
      .filter {
        width: 100%;
        padding: 20px 15px;

        button {
          position: relative;
          display: block;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          border-radius: 4px;
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0;
          border: 1px solid #000;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="filter">
        <button @click=${this._onClick}>필터</button>
      </div>
    `;
  }

  private _onClick() {
    this.dispatchEvent(
      new CustomEvent("filter-click", {
        bubbles: true,
        composed: true,
      })
    );
  }
}
