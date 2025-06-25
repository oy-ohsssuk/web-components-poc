import { Meta, StoryObj } from '@storybook/web-components';

declare const meta: Meta;
export default meta;
interface ReviewInCatalogProps {
    goodsNo: string;
    isVisible: "on" | "off";
}
type Story = StoryObj<ReviewInCatalogProps>;
export declare const Default: Story;
