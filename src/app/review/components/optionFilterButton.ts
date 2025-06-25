import { LitElement, css, html, unsafeCSS } from "lit";
import st from "./option-filter-button.scss?inline";
import { customElement, property } from "lit/decorators.js";
import { resetStyles } from "@/styles/reset";

@customElement("option-filter-button")
export class OptionFilterButton extends LitElement {
  static styles = [
    resetStyles,
    css`
      ${unsafeCSS(st)}
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
        composed: false,
      })
    );
  }
}
