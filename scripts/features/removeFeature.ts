import { Project, ts } from "ts-morph";
import * as process from "node:process";
import SyntaxKind = ts.SyntaxKind;

import type { JsxAttribute, Node } from "ts-morph";

const toggleFunctionName = `toggleFeatures`;
const toggleComponentName = `ToggleFeatures`;

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removedFeatureName) {
  throw new Error(`Pass feature name as first argument`);
}

if (!featureState || (featureState !== `on` && featureState !== `off`)) {
  throw new Error(`Pass on/off as second argument`);
}

const project = new Project({});
project.addSourceFilesAtPaths(`src/**/*.ts`);
project.addSourceFilesAtPaths(`src/**/*.tsx`);

const files = project.getSourceFiles();

const isToggleFunction = (node: Node, name: string) => {
  let isToggleFeature = false;

  node.forEachChild((child) => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === name) {
      isToggleFeature = true;
    }
  });

  return isToggleFeature;
};

const getAttributeNodeByName = (
  jsxAttributes: JsxAttribute[],
  name: string,
) => {
  return jsxAttributes.find((node) => node.getNameNode().getText() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith(`(`)) {
    return value.slice(1, -1);
  }

  return value;
};

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );

  if (!objectOptions) {
    return;
  }

  const onProperty = objectOptions.getProperty(`on`);
  const offProperty = objectOptions.getProperty(`off`);
  const nameProperty = objectOptions.getProperty(`name`);

  const onFunction = onProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const offFunction = offProperty?.getFirstDescendantByKind(
    SyntaxKind.ArrowFunction,
  );
  const featureName = nameProperty
    ?.getFirstDescendantByKind(SyntaxKind.NoSubstitutionTemplateLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== removedFeatureName) {
    return;
  }

  if (featureState === `off`) {
    node.replaceWithText(offFunction?.getBody().getText() ?? ``);
  } else if (featureState === `on`) {
    node.replaceWithText(onFunction?.getBody().getText() ?? ``);
  }
};

const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, `on`);
  const offAttribute = getAttributeNodeByName(attributes, `off`);

  const featureNameAttribute = getAttributeNodeByName(attributes, `name`);
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.NoSubstitutionTemplateLiteral)
    ?.getText()
    ?.slice(1, -1);

  if (featureName !== removedFeatureName) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === `on` && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === `off` && offValue) {
    node.replaceWithText(offValue);
  }
};

files.forEach((file) => {
  file.forEachDescendant((node) => {
    if (
      node.isKind(SyntaxKind.CallExpression) &&
      isToggleFunction(node, toggleFunctionName)
    ) {
      return replaceToggleFunction(node);
    }

    if (
      node.isKind(SyntaxKind.JsxSelfClosingElement) &&
      isToggleFunction(node, toggleComponentName)
    ) {
      return replaceToggleComponent(node);
    }
  });
});

project.save();
