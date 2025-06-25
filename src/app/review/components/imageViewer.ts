import { html, nothing, TemplateResult } from "lit";

export type ImageSaveFormatType = "webp" | "png" | "jpeg" | "jpg" | "gif";

export interface ImageViewerProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  imgWidth?: number;
  imgSaveFormat?: ImageSaveFormatType;
  sigma?: string;
  style?: string;
  className?: string;
}

function getQueryFlag(url: string) {
  return url.includes("?") ? "&" : "?";
}

function getResizeQuery(url: string, width?: number) {
  if (!width) return "";
  return `${getQueryFlag(url)}rs=${width}x0`;
}

function getSharpenQuery(url: string, sigma?: string) {
  if (!sigma) return "";
  return `${getQueryFlag(url)}sharpen=0x${sigma}`;
}

function getFormatQuery(url: string, webpSupport: boolean, quality: number, imgSaveFormat?: ImageSaveFormatType) {
  const queryFlag = getQueryFlag(url);
  if (imgSaveFormat === "webp" && webpSupport) {
    return `${queryFlag}qt=${quality}&sf=webp`;
  }
  if (imgSaveFormat && imgSaveFormat !== "webp") {
    return `${queryFlag}qt=${quality}&sf=${imgSaveFormat}`;
  }
  return `${queryFlag}qt=${quality}`;
}

function getImageUrl({ src, fallbackSrc, imgWidth, imgSaveFormat = "webp", sigma }: ImageViewerProps, webpSupport = true): string {
  const quality = 85;
  let url = src;
  if (!url) return fallbackSrc || "";
  if (imgWidth) {
    url += getResizeQuery(url, imgWidth);
  }
  url += getFormatQuery(url, webpSupport, quality, imgSaveFormat);
  if (imgSaveFormat === "webp") {
    url += getSharpenQuery(url, sigma);
  }
  return url;
}

/**
 * imageViewer 헬퍼 함수 - React 함수 컴포넌트처럼 사용
 * @param props ImageViewerProps
 * @param webpSupport (optional) 브라우저 webp 지원 여부, 기본값 true
 */
export function imageViewer(props: ImageViewerProps, webpSupport = true): TemplateResult {
  const { src, alt, fallbackSrc, imgWidth, style = "", className = "", ...rest } = props;
  // SSR/fallback 등은 사용처에서 분기 처리 필요. 여기서는 단순히 img만 렌더링
  const imgUrl = getImageUrl(props, webpSupport);
  return html`<img
    src="${imgUrl}"
    alt="${alt}"
    style="width:100%;height:100%;object-fit:cover;${style}"
    class="${className}"
    loading="lazy"
    ...=${rest}
  />`;
}

export default imageViewer;
