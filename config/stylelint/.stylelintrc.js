module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    "selector-class-pattern": /[a-z]+([A-Z][a-z]*)*/,
    "keyframes-name-pattern": /[a-z]+([A-Z][a-z]*)*/,
    "scss/percent-placeholder-pattern": /[a-z]+([A-Z][a-z]*)*/,
    "custom-property-empty-line-before": null,
    "no-descending-specificity": null,
  }
}