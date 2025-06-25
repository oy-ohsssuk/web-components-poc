export function scrollToReview(el: HTMLElement, reviewId: string) {
  const root = (el.shadowRoot || (el as any).renderRoot || el) as Document | ShadowRoot;
  const target = root.querySelector(`#review_${reviewId}`);
  if (target) {
    (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
    return true;
  }
  return false;
}
