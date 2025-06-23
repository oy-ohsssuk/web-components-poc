import { JSDOM } from "jsdom";

// 브라우저 환경 shim
const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;
global.Node = dom.window.Node;
global.Event = dom.window.Event;
global.EventTarget = dom.window.EventTarget;

// CSSStyleSheet shim
if (typeof global.CSSStyleSheet === "undefined") {
  global.CSSStyleSheet = class {};
}

import { html } from "lit";
import { render } from "@lit-labs/ssr";
import { createWriteStream } from "fs";

await import("./dist/index.es.js");

const template = html`<review-in-catalog goodsNo="A000000113670"></review-in-catalog>`;

const output = createWriteStream("ssr-test.html");
for await (const chunk of render(template)) {
  output.write(typeof chunk === "string" ? chunk : Buffer.from(chunk));
}
output.end();

output.on("finish", () => {
  console.log("정적 HTML 파일이 생성");
});
