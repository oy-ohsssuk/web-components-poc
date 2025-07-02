import { Route, Commands } from "@vaadin/router";
import "../src/app/review/components/reviewInCatalog";
import "../src/app/review/components/optionFilterButton";
import "./main-layout";

export const views: Route[] = [
  {
    path: "/",
    component: "",
  },
  {
    path: "/review/:goodsNo",
    action: (context: any, commands: Commands) => {
      const reviewInCatalog = document.createElement("review-in-catalog") as HTMLElement & { goodsNo: string };
      reviewInCatalog.goodsNo = context.params.goodsNo as string;

      const optionBtn = document.createElement("option-filter-button");

      reviewInCatalog.appendChild(optionBtn);

      return reviewInCatalog;
    },
  },
  {
    path: "/button",
    component: "option-filter-button",
  },
];

export const routes: Route[] = [
  {
    path: "",
    component: "main-layout",
    children: [...views],
  },
];
