import js from "@eslint/js";
import { lit } from "eslint-plugin-lit";
import wc from "eslint-plugin-wc";

export default [
  js.config({
    extends: ["eslint:recommended"],
    env: { browser: true, es2021: true },
  }),
  {
    plugins: { lit, wc },
    extends: ["plugin:lit/recommended", "plugin:wc/recommended"],
    rules: {
      // 필요시 프로젝트별 커스텀 룰 추가
    },
  },
];
