const renderedMap = new WeakMap<HTMLElement, boolean>();

export class RenderStatus {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    this.el = el;
  }

  isRendered() {
    return !!renderedMap.get(this.el);
  }

  markRendered() {
    renderedMap.set(this.el, true);
  }

  subscribeRendered(cb: () => void) {
    const handler = () => {
      this.markRendered();
      cb();
    };
    this.el.addEventListener("rendered", handler, { once: true });
    return () => {
      this.el.removeEventListener("rendered", handler);
    };
  }

  onFirstRendered(cb: (el: HTMLElement) => void) {
    if (document.body.contains(this.el)) {
      return this.subscribeRendered(() => cb(this.el));
    }
  }

  onError() {
    const tagName = this.el.tagName.toLowerCase();
    if (!customElements.get(tagName)) {
      if (this.el.parentNode) {
        this.el.parentNode.removeChild(this.el);
        console.warn(`[RenderStatus] customElements.define('${tagName}')가 안된 상태라 엘리먼트를 제거합니다:`, this.el);
      }
    }
  }
}
