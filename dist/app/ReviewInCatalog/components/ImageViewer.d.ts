import { TemplateResult } from 'lit';

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
/**
 * imageViewer 헬퍼 함수 - React 함수 컴포넌트처럼 사용
 * @param props ImageViewerProps
 * @param webpSupport (optional) 브라우저 webp 지원 여부, 기본값 true
 */
export declare function imageViewer(props: ImageViewerProps, webpSupport?: boolean): TemplateResult;
export default imageViewer;
