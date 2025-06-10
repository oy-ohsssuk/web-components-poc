import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("review-in-catalog")
export class MyComponent extends LitElement {
  static styles = css`
    div {
      color: blue;
    }
  `;

  render() {
    return html`<div>test</div>`;
  }
}
