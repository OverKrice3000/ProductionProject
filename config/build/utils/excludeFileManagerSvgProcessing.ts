import { RuleSetRule } from "webpack";

export const excludeFileManagerSvgProcessing = (rules: RuleSetRule[]) => rules.map((rule: RuleSetRule) => {
  if (rule.test instanceof RegExp && rule.test.test(`.svg`)) {
    return { ...rule, exclude: /\.svg$/i };
  }

  return rule;
});
