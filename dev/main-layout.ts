import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "@vaadin/app-layout";

@customElement("main-layout")
export class MainLayout extends LitElement {
  render() {
    return html` <slot></slot> `;
  }
}
