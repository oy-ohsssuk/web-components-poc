import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./page";

const meta: Meta = {
  title: "Web Components/review-in-catalog",
  component: "review-in-catalog",
  tags: ["autodocs"],
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    goodsNo: {
      control: "text",
      description: "상품 번호",
      type: { name: "string", required: true },
    },
    isVisible: {
      control: "radio",
      options: ["on", "off"],
      description: "컴포넌트 표시 여부",
      table: { type: { summary: "'on' | 'off'" } },
      defaultValue: { summary: "on" },
    },
  },
};
export default meta;

interface ReviewInCatalogProps {
  goodsNo: string;
  isVisible: "on" | "off";
}

type Story = StoryObj<ReviewInCatalogProps>;

export const Default: Story = {
  args: {
    goodsNo: "A000000113670",
    isVisible: "on",
  },
  render: ({ goodsNo, isVisible }: ReviewInCatalogProps) => html` <review-in-catalog goodsNo=${goodsNo} isVisible=${isVisible}></review-in-catalog> `,
};
