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
    return () => this.el.removeEventListener("rendered", handler);
  }

  onFirstRendered(cb: (el: HTMLElement) => void) {
    if (document.body.contains(this.el)) {
      return this.subscribeRendered(() => cb(this.el));
    }
    const observer = new MutationObserver(() => {
      if (document.body.contains(this.el)) {
        this.subscribeRendered(() => cb(this.el));
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }
}
