import { JSDOM } from "jsdom";
import { render } from "@lit-labs/ssr";

function setupDom() {
  if (!global.window) {
    const dom = new JSDOM("<!doctype html><html><body></body></html>");
    global.window = dom.window;
    global.document = dom.window.document;
    global.HTMLElement = dom.window.HTMLElement;
    global.customElements = dom.window.customElements;
    global.Node = dom.window.Node;
    global.Event = dom.window.Event;
    global.EventTarget = dom.window.EventTarget;
    if (typeof global.CSSStyleSheet === "undefined") {
      global.CSSStyleSheet = class {};
    }
  }
}

export async function ssrRender(template) {
  setupDom();

  await import("../dist/index.es.js");
  let htmlString = "";
  for await (const chunk of render(template)) {
    htmlString += typeof chunk === "string" ? chunk : Buffer.from(chunk).toString();
  }
  return htmlString;
}
