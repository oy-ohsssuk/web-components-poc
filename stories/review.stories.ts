import { html } from "lit";
import "../src/app/review/index.ts";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "componenets/review",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  argTypes: {
    goodsNo: { control: "text" },
    isVisible: { control: { type: "radio" }, options: ["on", "off"] },
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
  render: ({ goodsNo, isVisible }: ReviewInCatalogProps) => html`
    <review-in-catalog goodsNo=${goodsNo} isVisible=${isVisible}>
      <option-filter-button></option-filter-button>
    </review-in-catalog>
  `,
};
