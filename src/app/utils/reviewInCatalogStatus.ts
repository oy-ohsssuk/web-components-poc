import { RenderStatus } from "./renderStatus";

export function getReviewCatalogRenderStatusInstance(): RenderStatus | null {
  const el = document.querySelector("review-in-catalog") as HTMLElement | null;
  return el ? new RenderStatus(el) : null;
}
